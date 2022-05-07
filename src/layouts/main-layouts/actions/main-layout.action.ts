import {AppDispatch} from "../../../store/store";
import {ResourceApiService} from "../../../service/resource-api.service";
import {getSideNavItems} from "../../../store/common/sideNavItemSlice";

export const MainLayoutAction = () => {

    return async (dispatch: AppDispatch) => {
        const {error, data}: any = await dispatch(ResourceApiService.endpoints.get.initiate({
            doc: "get_side_nav_item"
        }))
        dispatch(getSideNavItems(data))
    }
}