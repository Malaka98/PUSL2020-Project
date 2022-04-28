import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers/root.reducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware => {
        return getDefaultMiddleware().concat()
    })
})

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;