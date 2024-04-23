import MenuAdminSwitch from './MenuAdminSwitch';
import MenuList from './MenuList';
import MenuLogo from './MenuLogo';

import s from './style.module.scss';

const MainMenu = () => {
    return (
        <div className={s.cont}>
            <MenuLogo />
            <MenuList />
            <MenuAdminSwitch />
        </div>
    );
};

export default MainMenu;
