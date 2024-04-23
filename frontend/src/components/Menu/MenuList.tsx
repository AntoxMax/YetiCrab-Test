import {ListUl} from '@gravity-ui/icons';
import {Menu} from '@gravity-ui/uikit';
import {Link, useLocation} from 'react-router-dom';

const MenuList = () => {
    const location = useLocation();

    return (
        <Menu size="xl">
            <Link to={'/'}>
                <Menu.Item
                    active={location.pathname === '/' ? true : undefined}
                    iconStart={<ListUl />}
                >
                    Заявки
                </Menu.Item>
            </Link>
        </Menu>
    );
};

export default MenuList;
