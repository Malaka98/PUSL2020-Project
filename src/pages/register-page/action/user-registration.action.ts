import {AppDispatch} from "../../../store/store";
import {ResourceApiService} from "../../../service/resource-api.service";

export const UserRegistrationAction = (doc: String, form: any) => {

    let model: any = {}
    Object.assign(model, form)
    model.role = [
        {
            "id": 1,
            "name": "USER"
        }
    ]

    return async (dispatch: AppDispatch) => {
        try {
            const {error, data}: any = await dispatch(ResourceApiService.endpoints.create.initiate({
                doc: doc,
                payload: model
            }))
            if (!error) return {status: 'success', data: data.data}; else return {status: 'error'}
        } catch (e: any) {
            return {status: 'Exception Error', e}
        }
    }
}