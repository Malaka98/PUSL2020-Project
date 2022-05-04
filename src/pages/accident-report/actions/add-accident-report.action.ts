import {AppDispatch} from "../../../store/store";
import {ResourceApiService} from "../../../service/resource-api.service";
import AccidentApiService from "../../../service/accident-api.service";

export const AddAccidentReportAction = (doc: String, payload: any) => {

    return async (dispatch: AppDispatch) => {
        const {error, data}: any = await dispatch(ResourceApiService.endpoints.create.initiate({
            doc: doc,
            payload: payload
        }))
        await dispatch(AccidentApiService.util.invalidateTags(['GetAccidentList']))
        if (!error) { return {status: 'success', data: data}} else { return {status: 'error'}}
    }
}

// export const GetAccidentReportList = (doc: String) => {
//
//     return async (dispatch: AppDispatch) => {
//         const {error, data}: any = await dispatch(ResourceApiService.endpoints.get.initiate({
//             doc: doc
//         }))
//         if (!error) return {status: 'success', data: data}; else return {status: 'error'}
//     }
// }