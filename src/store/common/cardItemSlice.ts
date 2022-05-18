import {createSlice} from "@reduxjs/toolkit";

const initialData: any = []

const initialState = {
    cardItem: initialData,
    showSpinner: false
}

const CardItemSlice = createSlice({
    name: "card",
    initialState: initialState,
    reducers: {
        getCardItem(state: any, {payload}: any) {
            state.cardItem = payload;
            state.showSpinner = false;
        },
        showSpinner(state: any) {
            state.showSpinner = true;
        }
    }
})

export const {getCardItem, showSpinner} = CardItemSlice.actions
export default CardItemSlice