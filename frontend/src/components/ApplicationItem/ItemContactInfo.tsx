import s from './style.module.scss';

type Props = {
    customerName: string;
    carrierName: string;
    carrierPhone: string;
    carrierAti: number;
};

const ItemContactInfo = ({customerName, carrierName, carrierPhone, carrierAti}: Props) => {
    return (
        <div className={s.card__contacts}>
            <div>
                <div>
                    <b>Клиент:</b>
                </div>
                <div>{customerName}</div>
            </div>
            <div className={s.card__vertical}></div>
            <div>
                <div>
                    <b>Перевозчик:</b>
                </div>
                <div>{carrierName}</div>
                <div>{carrierPhone}</div>
                <div>
                    <a href={`https://ati.su/firms/${carrierAti}/info`}>ATI</a>
                </div>
            </div>
        </div>
    );
};

export default ItemContactInfo;
