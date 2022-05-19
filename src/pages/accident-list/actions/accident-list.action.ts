import {AppDispatch} from "../../../store/store";
import AccidentApiService from "../../../service/accident-api.service";

export const AccidentListAction = (doc: string, payload: any) => {

    return async (dispatch: AppDispatch) => {
        const {error, data}: any = await dispatch(AccidentApiService.endpoints.create.initiate({
            doc: doc,
            payload: payload
        }))
        await dispatch(AccidentApiService.util.invalidateTags(['GetAllAccidentList']))
        if (!error) { return {status: 'success', data: data}} else { return {status: 'error'}}
    }
}