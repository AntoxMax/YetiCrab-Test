import {Button, Col, Row, Select} from '@gravity-ui/uikit';
import {useEffect, useState} from 'react';
import {getFilteredApplication, updateApplication} from '../../store/Application/slice';
import {fetchCarriers} from '../../store/Carrier/slice';
import {fetchCustomer} from '../../store/Customer/slice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {ApplicationType, Statuses} from '../../store/types/application';
import s from './style.module.scss';

type Props = {
    setIsOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    application: ApplicationType;
};

const EditForm = ({setIsOpenEditModal, application}: Props) => {
    const dispatch = useAppDispatch();
    const carriers = useAppSelector((state) => state.carrier.carriers);
    const customers = useAppSelector((state) => state.customer.customers);

    const [customersId, setCustomersId] = useState<string[]>([application.customerId.toString()]);
    const [carriersId, setCarriersId] = useState<string[]>([application.carrierId.toString()]);
    const [status, setStatus] = useState([application.status.toString()]);

    useEffect(() => {
        dispatch(fetchCarriers());
        dispatch(fetchCustomer());
    }, []);

    const saveApplication = () => {
        const fields = {
            status: status[0],
            customerId: Number(customersId[0]),
            carrierId: Number(carriersId[0]),
        };

        dispatch(updateApplication({id: application.id, fields}));
        alert('Заявка успешно сохранена');
        setIsOpenEditModal(false);
        dispatch(getFilteredApplication());
    };

    return (
        <Row space={2}>
            <Col s="12">
                <div>
                    <Select
                        className={s.modal__select}
                        label="Статус:"
                        value={status}
                        onUpdate={(value) => setStatus(value)}
                        placeholder="Выберете статус"
                    >
                        <Select.Option value="NEW">{Statuses.NEW}</Select.Option>
                        <Select.Option value="IN_PROGRESS">{Statuses.IN_PROGRESS}</Select.Option>
                        <Select.Option value="FINISH">{Statuses.FINISH}</Select.Option>
                    </Select>
                </div>
            </Col>
            <Col s="12">
                <Select
                    className={s.modal__select}
                    label="Клиент:"
                    value={customersId}
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
                    value={carriersId}
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
            <Col s="12" className={s.modal__buttons}>
                <Button view="outlined" size="l" onClick={() => setIsOpenEditModal(false)}>
                    Отменить
                </Button>
                <Button view="action" size="l" onClick={() => saveApplication()}>
                    Сохранить
                </Button>
            </Col>
        </Row>
    );
};

export default EditForm;
