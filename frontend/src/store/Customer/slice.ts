import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../api/axios.js';
import {CustomerType} from '../types/customer.js';

export const fetchCustomer = createAsyncThunk('customer/fetchCustomer', async () => {
    const {data} = await axios.get('/customer');
    return data;
});

interface CustomerState {
    customers: CustomerType[];
}

const initialState: CustomerState = {
    customers: [],
};

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCustomer.fulfilled, (state, action: PayloadAction<[]>) => {
            state.customers = action.payload;
        });
        builder.addCase(fetchCustomer.rejected, (state) => {
            state.customers = [];
        });
    },
});

export const customerReducer = customerSlice.reducer;
