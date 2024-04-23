import {Button, Dialog} from '@gravity-ui/uikit';
import {useState} from 'react';
import {useAppSelector} from '../../store/hooks';
import CreateApplication from './CreateApplication';

import s from './style.module.scss';

const AddApplication = () => {
    const isAdmin = useAppSelector((state) => state.user.isAdmin);

    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

    return (
        <>
            {isAdmin ? <Button onClick={() => setIsOpenCreateModal(true)}>Добавить</Button> : null}
            <Dialog
                size="s"
                className={s.modal}
                open={isOpenCreateModal}
                onClose={() => setIsOpenCreateModal(false)}
            >
                <CreateApplication setIsOpenCreateModal={setIsOpenCreateModal} />
            </Dialog>
        </>
    );
};

export default AddApplication;
