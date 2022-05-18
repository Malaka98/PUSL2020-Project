import {AppDispatch} from "../../../store/store";
import {ResourceApiService} from "../../../service/resource-api.service";
import {getCardItem} from "../../../store/common/cardItemSlice";

export const getDashboardItem = () => {

    return async (dispatch: AppDispatch) => {

        let cardDataList: Array<any> = []

        const {error, data}: any = await dispatch(ResourceApiService.endpoints.get.initiate({
            doc: "get_card_details"
        }))

        if (data) {
            cardDataList = [
                {
                    label: 'Registered User',
                    value: data?.registeredUser,
                    percentage: data?.registeredUserPercentage,
                    path: '/app/application/received'
                },
                {
                    label: 'Approved Accident Report',
                    value: data?.approvedAccident,
                    percentage: data?.approvedPercentage,
                    path: '/app/application/approved'
                },
                {
                    label: 'Pending Accident Report',
                    value: data?.pendingAccident,
                    percentage: data?.pendingPercentage,
                    path: '/app/application/pending'
                },
                {
                    label: 'Rejected Accident Report',
                    value: data?.rejectedAccident,
                    percentage: data?.rejectedPercentage,
                    path: '/app/application/rejected'
                }
            ]

            dispatch(getCardItem(cardDataList))
        }
    }


}