import {Button, Col, Row, Select} from '@gravity-ui/uikit';
import {useEffect, useState} from 'react';
import {createApplication, getFilteredApplication} from '../../store/Application/slice';
import {fetchCarriers} from '../../store/Carrier/slice';
import {fetchCustomer} from '../../store/Customer/slice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import s from './style.module.scss';

type Props = {
    setIsOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateForm = ({setIsOpenCreateModal}: Props) => {
    const dispatch = useAppDispatch();
    const carriers = useAppSelector((state) => state.carrier.carriers);
    const customers = useAppSelector((state) => state.customer.customers);

    const [customersId, setCustomersId] = useState<string[] | undefined>(undefined);
    const [carriersId, setCarriersId] = useState<string[] | undefined>(undefined);

    useEffect(() => {
        dispatch(fetchCarriers());
        dispatch(fetchCustomer());
    }, []);

    const create = () => {
        if (!(customersId && carriersId)) {
            alert('Заполните все поля');
            return;
        }

        const fields = {
            customerId: Number(customersId[0]),
            carrierId: Number(carriersId[0]),
        };

        dispatch(createApplication(fields));
        alert('Заявка успешно создана');
        setIsOpenCreateModal(false);
        dispatch(getFilteredApplication());
    };

    return (
        <Row space={2}>
            <Col s="12">
                <Select
                    className={s.modal__select}
                    label="Клиент:"
                    filterable
                    placeholder="Выберите клиента"
                    onUpdate={(value) => setCustomersId(value)}
                >
                    {customers.map((customer) => (
                        <Select.Option key={customer.id} value={customer.id.toString()}>
                            {customer.name}
                        </Select.Option>
                    ))}
                </Select>
            </Col>
            <Col s="12">
                <Select
                    className={s.modal__select}
                    label="Поставщик:"
                    filterable
                    placeholder="Выберите поставщика"
                    onUpdate={(value) => setCarriersId(value)}
                >
                    {carriers.map((carrier) => (
                        <Select.Option key={carrier.id} value={carrier.id.toString()}>
                            {carrier.name}
                        </Select.Option>
                    ))}
                </Select>
            </Col>
            <Col s="12" className={s.modal__button}>
                <Button view="action" size="l" onClick={() => create()}>
                    Создать
                </Button>
            </Col>
        </Row>
    );
};

export default CreateForm;
