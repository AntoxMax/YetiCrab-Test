import {createSlice} from '@reduxjs/toolkit';

interface UserState {
    isAdmin: boolean;
}

const initialState: UserState = {
    isAdmin: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleAdmin: (state: UserState) => {
            state.isAdmin = !state.isAdmin;
            if (state.isAdmin) {
                localStorage.setItem('admin', 'true');
            } else {
                localStorage.setItem('admin', 'false');
            }
        },
        checkAdmin: (state: UserState) => {
            const localStorageData = localStorage.getItem('admin');
            if (localStorageData === 'true') {
                state.isAdmin = true;
            }
        },
    },
});

export const {toggleAdmin, checkAdmin} = userSlice.actions;

export const userReducer = userSlice.reducer;
