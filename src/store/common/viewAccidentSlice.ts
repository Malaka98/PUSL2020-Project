import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    item: {},
}

const ViewAccidentSlice = createSlice({
    name: 'sideNav',
    initialState: initialState,
    reducers: {
        getAccidentViewItems(state: any, {payload}: any) {
            state.item = payload;
        },
    }
})

export const {getAccidentViewItems} = ViewAccidentSlice.actions
export default ViewAccidentSlice