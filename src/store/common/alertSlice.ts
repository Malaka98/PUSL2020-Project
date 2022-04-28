import {createSlice} from "@reduxjs/toolkit";

const initialData = {
    title: 'Default Title',
    description: 'Default Description',
    status: 'default'
}

const initialState = {
    showAlert: false,
    alertData: initialData
};

const AlertSlice = createSlice({
    name: 'showAlert',
    initialState: initialState,
    reducers: {
        showAlert(state: any) {
            state.showAlert = true;
        },
        hideAlert(state) {
            state.showAlert = false;
        }
    }
});

export const {showAlert, hideAlert} = AlertSlice.actions
export default AlertSlice;