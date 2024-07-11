
import * as Yup from 'yup';

export const schema = Yup.object({
    categories: Yup
        .array()
        .min(1, 'At least one category is required')
        .required('At least one category is required')
});