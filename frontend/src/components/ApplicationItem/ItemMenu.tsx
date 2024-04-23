import {Button, Dialog, Text} from '@gravity-ui/uikit';

import {ApplicationType} from '@/store/types/application';
import {TrashBin} from '@gravity-ui/icons';
import {useState} from 'react';
import {deleteApplication, fetchApplications} from '../../store/Application/slice';
import {useAppDispatch} from '../../store/hooks';
import EditApplication from '../EditApplication/EditApplication';
import s from './style.module.scss';

type Props = {
    application: ApplicationType;
};

const ItemMenu = ({application}: Props) => {
    const dispatch = useAppDispatch();
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const deleteApplicationFunc = async () => {
        await dispatch(deleteApplication(application.id));
        setIsConfirmOpen(false);
        await dispatch(fetchApplications());
    };

    return (
        <div style={{position: 'relative'}}>
            <div className={s.card__menu}>
                <EditApplication application={application} />
                <div onClick={() => setIsConfirmOpen(true)}>
                    <TrashBin />
                </div>
            </div>
            <Dialog
                className={s.confirm}
                size="s"
                hasCloseButton
                open={isConfirmOpen}
                onClose={() => setIsConfirmOpen(false)}
            >
                <Text className={s.confirm__title} variant="subheader-2">
                    Вы уверены что хотите удалить заявку?
                </Text>
                <div className={s.confirm__buttons}>
                    <Button view="outlined-info" onClick={() => setIsConfirmOpen(false)}>
                        Отменить
                    </Button>
                    <Button view="outlined-danger" onClick={deleteApplicationFunc}>
                        Да
                    </Button>
                </div>
            </Dialog>
        </div>
    );
};

export default ItemMenu;
