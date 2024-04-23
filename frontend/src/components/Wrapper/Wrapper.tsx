import {ThemeProvider} from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import React from 'react';
import {checkAdmin} from '../../store/User/slice';
import {useAppDispatch} from '../../store/hooks';
import './Wrapper.scss';

const b = block('wrapper');

export type AppProps = {
    children: React.ReactNode;
};

export const Wrapper: React.FC<AppProps> = ({children}) => {
    const dispatch = useAppDispatch();

    dispatch(checkAdmin());

    return (
        <div className={b()}>
            <ThemeProvider theme={'light'}>{children}</ThemeProvider>
        </div>
    );
};
