import {Button, Dialog, Text} from '@gravity-ui/uikit';
import {useState} from 'react';
import Comments from '../Comments/Comments';

import s from './style.module.scss';

type Props = {
    id: number;
};

const ItemComments = ({id}: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setOpen(true)} view="outlined">
                Комментарии
            </Button>
            <Dialog
                className={s.comments}
                size="s"
                hasCloseButton
                open={open}
                onClose={() => setOpen(false)}
            >
                <Text className={s.comments__text} variant="subheader-3">
                    Комментарии
                </Text>
                <Comments id={id} />
            </Dialog>

            {/* <Modal
                open={open}
                onEscapeKeyDown={() => setOpen(false)}
                onOutsideClick={() => setOpen(false)}
            ></Modal> */}
        </div>
    );
};

export default ItemComments;
