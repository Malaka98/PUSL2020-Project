import * as yup from "yup";

const AddAccidentReportSchema = yup.object().shape({
    "location": yup.string().required("Location is Required"),
    "description": yup.string().required("Description is Required"),
    "vehicleNumber": yup.string().required("Vehicle Number is Required"),
    "vehicleType": yup.string().required("Vehicle Type is Required"),
})

export {AddAccidentReportSchema}