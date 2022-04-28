import {combineReducers} from "@reduxjs/toolkit";
import CommonSlice from "../common/commonSlice";
import AlertSlice from "../common/alertSlice";
import NavItemSlice from "../common/navItemSlice";
import SideNavItemSlice from "../common/sideNavItemSlice";

const rootReducer = combineReducers({
    common: CommonSlice.reducer,
    alert: AlertSlice.reducer,
    topNav: NavItemSlice.reducer,
    sideNav: SideNavItemSlice.reducer,
})

export default rootReducer;