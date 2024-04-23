import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../api/axios.js';
import {CarrierType} from '../types/carrier.js';

export const fetchCarriers = createAsyncThunk('carrier/fetchCarriers', async () => {
    const {data} = await axios.get('/carrier');
    return data;
});

interface CarrierState {
    carriers: CarrierType[];
}

const initialState: CarrierState = {
    carriers: [],
};

export const carriersSlice = createSlice({
    name: 'carrier',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCarriers.fulfilled, (state, action: PayloadAction<[]>) => {
            state.carriers = action.payload;
        });
        builder.addCase(fetchCarriers.rejected, (state) => {
            state.carriers = [];
        });
    },
});

export const carrierReducer = carriersSlice.reducer;
