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

export const schemaShiping = yup.object().shape({
    fullname: yup.string().required('Can not be empty'),
    phoneNumber: yup.string().required('Can not be empty'),
    city: yup.string().required('Can not be empty'),
    district: yup.string().required('Can not be empty'),
    commune: yup.string().required('Can not be empty'),
    detailAddress: yup.string().required('Can not be empty')
})

export const schemaForgotPassword = yup.object().shape({
    email: yup.string().required('Can not be empty')
})

export const validateSupport = yup.object().shape({
    fullname: yup.string().required('Can not be empty'),
    email: yup.string().required('Can not be empty'),
    message: yup.string().required('Can not be empty')
})