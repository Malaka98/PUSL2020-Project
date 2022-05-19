import UserService from "../../../service/user.service";

import {hideLoading, showLoading} from "../../../store/common/commonSlice";
import {showAlert} from '../../../store/common/alertSlice'

const loginAction = (form: any, navigate: any) => {

    const pathList = {
        "USER": "/app/accidentreport",
        "POLICE_USER": "/app"
    }


    const getDoc = (keyList: Object, type: string): string => {
        const key = Object.keys(keyList).find(item => item === type.split("-")[0])
        // @ts-ignore
        return keyList[key]
    }

    return async (dispatch: any) => {

        let path: string = ""

        dispatch(showLoading())
        const {error, data} = await dispatch(UserService.endpoints.login.initiate(form))

        console.log("user", data)
        data?.user_role.forEach((item: any) => {
            if (data?.user_role.includes(item)) {
                path = getDoc(pathList, item)
            }
        })
        dispatch(hideLoading())

        if (!error) {
            navigate(path)
        } else dispatch(showAlert())

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