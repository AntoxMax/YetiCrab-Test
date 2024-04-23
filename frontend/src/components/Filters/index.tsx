import {Checkbox, Flex, Select, Text, TextInput} from '@gravity-ui/uikit';
import {useEffect, useState} from 'react';
import {getFilteredApplication} from '../../store/Application/slice';
import {fetchCarriers} from '../../store/Carrier/slice';
import {fetchCustomer} from '../../store/Customer/slice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import AddApplication from '../AddApplication';

import s from './style.module.scss';

const ApplicationFilters = () => {
    const dispatch = useAppDispatch();
    const applications = useAppSelector((state) => state.application.applications);
    const carriers = useAppSelector((state) => state.carrier.carriers);
    const customers = useAppSelector((state) => state.customer.customers);

    const [checkbox, setCheckbox] = useState(false);
    const [input, setInput] = useState('');
    const [customersId, setCustomersId] = useState(['']);
    const [carriersId, setCarriersId] = useState(['']);
    const [order, setOrder] = useState(['']);

    useEffect(() => {
        dispatch(fetchCarriers());
        dispatch(fetchCustomer());
    }, []);

    useEffect(() => {
        const query = {
            finished: checkbox,
            search: input,
            customers: customersId.join(),
            carriers: carriersId.join(),
            order: order.join(),
        };

        dispatch(getFilteredApplication(query));
    }, [checkbox, input, customersId, carriersId, order]);

    console.log(applications);

    return (
        <>
            <div className={s.subhead}>
                <Text variant="body-3">Кол-во заявок: {applications.length}</Text>
                <AddApplication />
            </div>
            <Flex
                wrap
                space={3}
                className={s.filters}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <TextInput
                    className={s.filters__item}
                    size="m"
                    placeholder="Найти по номеру"
                    value={input}
                    type="number"
                    onChange={(e) => setInput(e.target.value)}
                />

                <Select
                    className={s.filters__item}
                    filterable
                    multiple
                    placeholder="Выберите поставщика"
                    onUpdate={(value) => setCarriersId(value)}
                >
                    {carriers.map((carrier) => (
                        <Select.Option key={carrier.id} value={carrier.id.toString()}>
                            {carrier.name}
                        </Select.Option>
                    ))}
                </Select>
                <Select
                    className={s.filters__item}
                    filterable
                    multiple
                    placeholder="Выберите клиента"
                    onUpdate={(value) => setCustomersId(value)}
                >
                    {customers.map((customer) => (
                        <Select.Option key={customer.id} value={customer.id.toString()}>
                            {customer.name}
                        </Select.Option>
                    ))}
                </Select>
                <Checkbox size="l" checked={checkbox} onUpdate={(checked) => setCheckbox(checked)}>
                    Показывать завершенные
                </Checkbox>
                <Select placeholder="Сортировать по:" onUpdate={(value) => setOrder(value)}>
                    <Select.Option value="asc">Сначала новые</Select.Option>
                    <Select.Option value="desc">Сначала старые</Select.Option>
                </Select>
            </Flex>
        </>
    );
};

export default ApplicationFilters;
