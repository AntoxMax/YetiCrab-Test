import {Text} from '@gravity-ui/uikit';
import CreateForm from './CreateForm';
import s from './style.module.scss';

type Props = {
    setIsOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateApplication = ({setIsOpenCreateModal}: Props) => {
    return (
        <div className={s.modal__content}>
            <div className={s.modal__title}>
                <Text variant="header-2">Новая заявка</Text>
            </div>
            <CreateForm setIsOpenCreateModal={setIsOpenCreateModal} />
        </div>
    );
};

export default CreateApplication;
