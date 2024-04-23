import {configureStore} from '@reduxjs/toolkit';
import {applicationReducer} from './Application/slice';
import {carrierReducer} from './Carrier/slice';
import {commentReducer} from './Comment/slice';
import {customerReducer} from './Customer/slice';
import {userReducer} from './User/slice';

export const store = configureStore({
    reducer: {
        application: applicationReducer,
        user: userReducer,
        carrier: carrierReducer,
        customer: customerReducer,
        comments: commentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
