import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../api/axios.js';
import {ApplicationType} from '../types/application';

export const fetchApplications = createAsyncThunk('application/fetchApplications', async () => {
    const {data} = await axios.get('/application');
    return data;
});

export const getApplicationById = createAsyncThunk(
    'application/getApplicationById',
    async (id: number) => {
        const {data} = await axios.get(`/application/${id}`);
        return data;
    },
);

export const getFilteredApplication = createAsyncThunk(
    'application/getFilteredApplication',
    async (query?: object) => {
        const {data} = await axios.get(`/application/filter`, {
            params: query,
        });
        return data;
    },
);

export const createApplication = createAsyncThunk(
    'application/createApplication',
    async (fields: object) => {
        await axios.post(`/application`, fields);
    },
);

export const deleteApplication = createAsyncThunk(
    'application/deleteApplication',
    async (id: number) => {
        await axios.delete(`/application/${id}`);
    },
);

export const updateApplication = createAsyncThunk(
    'application/updateApplication',
    async ({id, fields}: {id: number; fields: object}) => {
        await axios.patch(`/application/${id}`, fields);
    },
);

interface ApplicationState {
    applications: ApplicationType[];
    applicationById: ApplicationType | null;
}

const initialState: ApplicationState = {
    applications: [],
    applicationById: null,
};

export const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApplications.fulfilled, (state, action: PayloadAction<[]>) => {
            state.applications = action.payload;
        });
        builder.addCase(fetchApplications.rejected, (state) => {
            state.applications = [];
        });

        builder.addCase(getFilteredApplication.fulfilled, (state, action: PayloadAction<[]>) => {
            state.applications = action.payload;
        });
        builder.addCase(getFilteredApplication.rejected, (state) => {
            state.applications = [];
        });

        builder.addCase(
            getApplicationById.fulfilled,
            (state, action: PayloadAction<ApplicationType>) => {
                state.applicationById = action.payload;
            },
        );

        builder.addCase(getApplicationById.rejected, (state) => {
            state.applicationById = null;
        });
    },
});

export const applicationReducer = applicationSlice.reducer;
