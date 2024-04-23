import {Card} from '@gravity-ui/uikit';

import s from './style.module.scss';

type Props = {
    content: string;
};

const CommentItem = ({content}: Props) => {
    return (
        <div>
            <Card className={s.comment}>
                <div>
                    <b>User</b>
                </div>
                {content}
            </Card>
        </div>
    );
};

export default CommentItem;
