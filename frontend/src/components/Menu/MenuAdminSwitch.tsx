import {Switch} from '@gravity-ui/uikit';
import {toggleAdmin} from '../../store/User/slice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';

import s from './style.module.scss';

const MenuAdminSwitch = () => {
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector((state) => state.user.isAdmin);
    return (
        <div className={s.switch}>
            <Switch size="l" checked={isAdmin} onChange={() => dispatch(toggleAdmin())}>
                Режим администратора
            </Switch>
        </div>
    );
};

export default MenuAdminSwitch;
