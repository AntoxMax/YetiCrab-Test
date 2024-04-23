import {Pencil} from '@gravity-ui/icons';
import {Dialog, Text} from '@gravity-ui/uikit';
import {useState} from 'react';
import {ApplicationType} from '../../store/types/application';
import EditForm from './EditForm';

import s from './style.module.scss';

type Props = {
    application: ApplicationType;
};
const EditApplication = ({application}: Props) => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpenEditModal(true)}>
                <Pencil />
            </div>
            <Dialog
                size="s"
                className={s.modal}
                open={isOpenEditModal}
                onClose={() => setIsOpenEditModal(false)}
            >
                <Text className={s.modal__title} variant="header-2">
                    Редактировать заявку №{application.id}
                </Text>
                <EditForm setIsOpenEditModal={setIsOpenEditModal} application={application} />
            </Dialog>
        </>
    );
};

export default EditApplication;
