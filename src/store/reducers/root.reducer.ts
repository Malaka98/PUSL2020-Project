import {combineReducers} from "@reduxjs/toolkit";
import CommonSlice from "../common/commonSlice";
import AlertSlice from "../common/alertSlice";
import NavItemSlice from "../common/navItemSlice";
import SideNavItemSlice from "../common/sideNavItemSlice";
import {ResourceApiService} from "../../service/resource-api.service";
import UserService from "../../service/user.service";
import AccidentApiService from "../../service/accident-api.service";
import CardItemSlice from "../common/cardItemSlice";

const rootReducer = combineReducers({
    common: CommonSlice.reducer,
    alert: AlertSlice.reducer,
    topNav: NavItemSlice.reducer,
    sideNav: SideNavItemSlice.reducer,
    cards: CardItemSlice.reducer,
    [ResourceApiService.reducerPath]: ResourceApiService.reducer,
    [UserService.reducerPath]: UserService.reducer,
    [AccidentApiService.reducerPath]: AccidentApiService.reducer
})

export default rootReducer;