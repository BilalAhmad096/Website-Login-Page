import * as Yup from 'yup';

export const schema = Yup.object({
    email: Yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    phone: Yup
        .string()
        .matches(
            /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            'Invalid mobile number'
        )
        .required('Mobile number is required')
});