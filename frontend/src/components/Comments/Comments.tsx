import {useEffect, useState} from 'react';
import {createComment, fetchComments} from '../../store/Comment/slice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import CommentItem from './ CommentItem';

import {CommentType} from '@/store/types/comment';
import {Button, Col, Row, TextArea} from '@gravity-ui/uikit';
import s from './style.module.scss';

type Props = {
    id: number;
};

const Comments = ({id}: Props) => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.comments.comments);

    const [textValue, setTextValue] = useState('');
    const [textareaError, setTextareaError] = useState(false);

    useEffect(() => {
        dispatch(fetchComments(id));
    }, [id]);

    const createComm = () => {
        if (textValue.length === 0) {
            setTextareaError(true);
            return;
        }

        setTextValue('');

        const fields = {
            content: textValue,
            applicationId: id,
        };
        dispatch(createComment(fields));
    };

    return (
        <div className={s.comments}>
            <div>
                {comments.length === 0 ? (
                    'По этой заявке пока нет комменатариев'
                ) : (
                    <Row space={3}>
                        {comments.map((comment: CommentType) => (
                            <Col s={12} key={comment.id}>
                                <CommentItem content={comment.content} />
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
            <div className={s.create_comment}>
                <TextArea
                    rows={3}
                    placeholder="Написать комментарий"
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    error={textareaError}
                    errorMessage="Поле не должно быть пустым"
                />
                <Button onClick={() => createComm()}>Отправить</Button>
            </div>
        </div>
    );
};

export default Comments;
