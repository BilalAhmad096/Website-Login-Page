
import * as Yup from 'yup';

export const schema = Yup.object({
    name: Yup
        .string()
        .max(255)
        .required('Store name is required'),
    description: Yup
        .string()
        .min(100, 'Description must be at least 100 characters')
        .max(255, 'Description must be 255 characters or less')
        .required('Description is required')
});