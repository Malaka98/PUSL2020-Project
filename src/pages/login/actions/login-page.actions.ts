import UserService from "../../../service/user.service";

import {hideLoading, showLoading} from "../../../store/common/commonSlice";
import {showAlert, hideAlert} from '../../../store/common/alertSlice'
import ShowToast from "./show-toast";

const loginAction = (form: any, navigate: any) => {
    return async (dispatch: any) => {
        dispatch(showLoading())
        const {error, data} = await dispatch(UserService.endpoints.login.initiate(form))

        console.log("user", data)
        dispatch(hideLoading())

        if (!error) navigate('/app')
        else dispatch(showAlert())

        return data ? {status: 'success'} : {status: 'error'}
    }
}

// const logoutAction = (navigate: any) => {
//     console.log(navigate, '------------')
//     return async (dispatch: any) => {
//         const {error, data} = await dispatch(UserService.endpoints.logout.initiate)
//
//         console.log("user", data)
//
//         if (!error) navigate('/')
//         return data
//     }
// }

export {
    loginAction
}