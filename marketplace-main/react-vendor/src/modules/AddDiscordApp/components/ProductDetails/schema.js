import * as Yup from 'yup';

export const validationSchema = Yup.object({
    barcode: Yup.string().max(255),
    category: Yup.string().max(255),
    description: Yup.string().max(5000),
    images: Yup.array(),
    name: Yup.string().max(255).required(),
    newPrice: Yup.number().min(0).required(),
    oldPrice: Yup.number().min(0),
    sku: Yup.string().max(255)
});