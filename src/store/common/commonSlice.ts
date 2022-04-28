import {createSlice} from "@reduxjs/toolkit";

const initialLoadingState = {isLoading: false}

const CommonSlice = createSlice({
    name: 'isLoading',
    initialState: initialLoadingState,
    reducers: {
        showLoading(state) {
            state.isLoading = true;
        },
        hideLoading(state) {
            state.isLoading = false;
        }
    }
})

export const {showLoading, hideLoading} = CommonSlice.actions;
export default CommonSlice;