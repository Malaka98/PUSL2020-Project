import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers/root.reducer";
import UserService from "../service/user.service";
import {ResourceApiService} from "../service/resource-api.service";
import AccidentApiService from "../service/accident-api.service";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(UserService.middleware)
            .concat(ResourceApiService.middleware)
            .concat(AccidentApiService.middleware)
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;