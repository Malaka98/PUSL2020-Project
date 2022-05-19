import {useReducer} from "react";

const useInput = () => {
    const [form, setFormData] = useReducer((state: any, newState: any) => ({...state, ...newState}), {})

    const handleOnChange = (event: any) => {
        const {name, value} = event.target;
        setFormData({[name]: value})
    };

    const handleCheckBoxOnChange = (event: any) => {
        const {name, checked} = event.target;
        setFormData({[name]: checked})
    };

    const handleOnChangeForValue = (key: any, value: any) => {
        setFormData({[key]: value})
    };

    const clearAllFields = () => {
        let _form = {}
        for (let key in form) _form = {..._form, [key]: ''}
        setFormData(_form)
    }

    return {form, handleOnChange, handleOnChangeForValue, clearAllFields, handleCheckBoxOnChange, setFormData}
}

export default useInput