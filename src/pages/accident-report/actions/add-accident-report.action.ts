import {AppDispatch} from "../../../store/store";
import AccidentApiService from "../../../service/accident-api.service";

export const AddAccidentReportAction = (doc: String, payload: any) => {
    return async (dispatch: AppDispatch) => {
        const {error, data}: any = await dispatch(AccidentApiService.endpoints.create.initiate({
            doc: doc,
            payload: payload
        }))
        await dispatch(AccidentApiService.util.invalidateTags(['GetAccidentList']))
        if (!error) {
            return {status: 'success', data: data}
        } else {
            return {status: 'error'}
        }
    }
}

export const DeleteAccident = (doc: String, id: number) => {

    return async (dispatch: AppDispatch) => {
        const {error, data}: any = await dispatch(AccidentApiService.endpoints.delete.initiate({
            doc: `${doc}/${id}`,
        }))
        await dispatch(AccidentApiService.util.invalidateTags(['GetAccidentList']))
        if (!error) return {status: 'success', data: data}; else return {status: 'error'}
    }
}