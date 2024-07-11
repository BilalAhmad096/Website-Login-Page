import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material'
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

import ProductBasicDetails from '../ProductBasicDetails';
import ProductThumbnails from '../ProductThumbnails';
import ProductPricing from '../ProductPricing';
import { validationSchema } from './schema';
import { paths } from 'routes/paths';

const ProductDetails = () => {
    const navigate = useNavigate()
    const [files, setFiles] = useState([]);

    const initialValues = {
        barcode: '925487986526',
        category: '',
        description: '',
        images: [],
        name: '',
        pricingOption: 'free',
        freeAccessPeriod: "",
        recurringAmount: '',
        billingPeriod: '',
        customBillingPeriod: '',
        trialPeriodEnabled: false,
        trialPeriodDays: 0,
        initialFee: false,
        initialPrice: '',
        showOfferCancelDiscount: false,
        showOfferCancelDiscountPercentage: 10,
        showOfferCancelDiscountPeriod: '1',
        onetimeInitialPrice: 15,
        onetimeExpirationDays: '',
        submit: null
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, helpers) => {
            try {
                // NOTE: Make API request
                toast.success('Product created');
                navigate(paths.dashboard.products.index);
            } catch (err) {
                console.error(err);
                toast.error('Something went wrong!');
            }
        }
    });

    const handleFilesDrop = useCallback((newFiles) => {
        setFiles((prevFiles) => {
            return [...prevFiles, ...newFiles];
        });
    }, []);

    const handleFileRemove = useCallback((file) => {
        setFiles((prevFiles) => {
            return prevFiles.filter((_file) => _file.path !== file.path);
        });
    }, []);

    const handleFilesRemoveAll = useCallback(() => {
        setFiles([]);
    }, []);

    const handleUpload = () => { }


    return (
        <Stack spacing={4}>
            <ProductBasicDetails formik={formik} />
            <ProductThumbnails
                files={files}
                handleFileRemove={handleFileRemove}
                handleFilesDrop={handleFilesDrop}
                handleFilesRemoveAll={handleFilesRemoveAll}
                handleUpload={handleUpload}
            />
            <ProductPricing formik={formik} />
        </Stack>

    )
}

export default ProductDetails