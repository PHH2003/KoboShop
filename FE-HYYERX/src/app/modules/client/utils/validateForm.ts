import * as yup from "yup";

export const schemaRegister = yup.object().shape({
    fullname: yup.string().required('Can not be empty'),
    email: yup.string().required('Can not be empty'),
    password: yup.string().required('Can not be empty'),

})
export const schemaLogin = yup.object().shape({
    email: yup.string().required('Can not be empty'),
    password: yup.string().required('Can not be empty'),
})