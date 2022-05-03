import {AppDispatch} from "../../../store/store";
import {ResourceApiService} from "../../../service/resource-api.service";

export const AddAccidentReportAction = (doc: String, payload: any) => {

    return async (dispatch: AppDispatch) => {
        const {error, data}: any = await dispatch(ResourceApiService.endpoints.create.initiate({
            doc: doc,
            payload: payload
        }))
        if (!error) return {status: 'success', data: data.data}; else return {status: 'error'}
    }
}