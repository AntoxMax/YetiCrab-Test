import {CarrierType} from './carrier';
import {CustomerType} from './customer';

export enum Statuses {
    NEW = 'Новая',
    IN_PROGRESS = 'В работе',
    FINISH = 'Завершена',
}

export interface ApplicationType {
    id: number;
    createdAt: Date;
    status: Statuses;
    customerId: number;
    carrierId: number;
    Carrier: CarrierType;
    Customer: CustomerType;
}
