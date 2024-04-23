import {ApplicationType} from '@/store/types/application';
import {Card} from '@gravity-ui/uikit';
import {useAppSelector} from '../../store/hooks';
import ItemComments from './ItemComments';
import ItemMenu from './ItemMenu';

import {format} from 'date-fns';
import ItemBasicInfo from './ItemBasicInfo';
import ItemContactInfo from './ItemContactInfo';
import s from './style.module.scss';

type Props = {
    application: ApplicationType;
};

const ApplicationItem = ({application}: Props) => {
    const isAdmin = useAppSelector((state) => state.user.isAdmin);
    const formatDate = format(application.createdAt, 'd.M.yyyy, H:mm');

    console.log(application.Carrier);

    return (
        <Card className={s.card}>
            <ItemBasicInfo id={application.id} status={application.status} date={formatDate} />
            <ItemContactInfo
                customerName={application.Customer.name}
                carrierName={application.Carrier.name}
                carrierPhone={application.Carrier.phone}
                carrierAti={application.Carrier.ati}
            />
            <div className={s.card__actions}>
                <ItemComments id={application.id} />
                {isAdmin ? <ItemMenu application={application} /> : null}
            </div>
        </Card>
    );
};

export default ApplicationItem;
