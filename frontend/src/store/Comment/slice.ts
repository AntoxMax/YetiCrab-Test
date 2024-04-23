import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../api/axios.js';
import {CommentType} from '../types/comment.js';

export const fetchComments = createAsyncThunk('comment/fetchComments', async (id: number) => {
    const {data} = await axios.get(`/comment/${id}`);
    return data;
});

export const createComment = createAsyncThunk('comment/createComment', async (content: object) => {
    const {data} = await axios.post(`/comment`, content);
    return data;
});

interface CommentState {
    comments: CommentType[];
}

const initialState: CommentState = {
    comments: [],
};

export const commentSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state, action: PayloadAction<[]>) => {
            state.comments = action.payload;
        });
        builder.addCase(fetchComments.rejected, (state) => {
            state.comments = [];
        });
        builder.addCase(createComment.fulfilled, (state, action: any) => {
            state.comments.push(action.payload);
        });
    },
});

export const commentReducer = commentSlice.reducer;
