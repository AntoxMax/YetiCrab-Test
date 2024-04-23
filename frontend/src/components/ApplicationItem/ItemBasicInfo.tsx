import {Statuses} from '../../store/types/application';
import {getStatusInRussian} from '../../utils/convertStatus';
import s from './style.module.scss';

type Props = {
    id: number;
    status: Statuses;
    date: string;
};

const ItemBasicInfo = ({id, status, date}: Props) => {
    return (
        <div className={s.card__basic_info}>
            <div>
                <b>Заявка №{id}</b>
            </div>
            <div>
                <b>Статус:</b> {getStatusInRussian(status)}
            </div>
            <div>
                <b>Получена:</b> {date}
            </div>
        </div>
    );
};

export default ItemBasicInfo;
