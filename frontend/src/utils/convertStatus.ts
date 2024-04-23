import {Statuses} from '../store/types/application';

enum StatusesEnglish {
    NEW = 'NEW',
    IN_PROGRESS = 'IN_PROGRESS',
    FINISH = 'FINISH',
}

export const getStatusInRussian = (status: string): Statuses => {
    switch (status) {
        case StatusesEnglish.NEW:
            return Statuses.NEW;
        case StatusesEnglish.IN_PROGRESS:
            return Statuses.IN_PROGRESS;
        case StatusesEnglish.FINISH:
            return Statuses.FINISH;
        default:
            return Statuses.NEW;
    }
};

export const getStatusInEnglish = (status: string): StatusesEnglish => {
    switch (status) {
        case Statuses.NEW:
            return StatusesEnglish.NEW;
        case Statuses.IN_PROGRESS:
            return StatusesEnglish.IN_PROGRESS;
        case Statuses.FINISH:
            return StatusesEnglish.FINISH;
        default:
            return StatusesEnglish.NEW;
    }
};
