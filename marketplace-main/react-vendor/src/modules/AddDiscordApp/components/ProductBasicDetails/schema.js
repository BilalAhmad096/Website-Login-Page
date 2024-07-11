import * as Yup from 'yup';

export const validationSchema = Yup.object({
    description: Yup.string().max(5000),
    name: Yup.string().max(255).required(),
});