
import * as Yup from 'yup';

export const schema = Yup.object({
    emailCode: Yup
        .string()
        .length(6, 'Email code must be exactly 6 characters')
        .required('Email code is required'),
    phoneCode: Yup
        .string()
        .length(6, 'Mobile code must be exactly 6 characters')
        .required('Mobile code is required')
});
