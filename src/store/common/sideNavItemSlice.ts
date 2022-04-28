import {createSlice} from "@reduxjs/toolkit";

const initialData: any = [
    // {
    //     "name": "Rejected Applications",
    //     "label": "Rejected Applications",
    //     "path": "/app/application/rejected"
    // },
    // {
    //     "name": "Pending Applications",
    //     "label": "Pending Applications",
    //     "path": "/app/application/pending"
    // },
    // {
    //     "name": "Approved Applications",
    //     "label": "Approved Applications",
    //     "path": "/app/application/approved"
    // },
    // {
    //     "name": "Received Applications",
    //     "label": "Received Applications",
    //     "path": "/app/application/received"
    // }
]

const initialState = {
    sideNavItems: initialData,
    showSpinner: false
}

const SideNavItemSlice = createSlice({
    name: 'sideNav',
    initialState: initialState,
    reducers: {
        getSideNavItems(state: any, {payload}: any) {
            state.sideNavItems = payload;
            state.showSpinner = false;
        },
        showSpinner(state: any) {
            state.showSpinner = true;
        }
    }
})

export const {getSideNavItems, showSpinner} = SideNavItemSlice.actions
export default SideNavItemSlice