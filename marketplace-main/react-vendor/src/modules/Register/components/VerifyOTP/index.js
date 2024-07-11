import { Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";

import { schema } from './schema'

const VerifyOTP = ({ onSubmit }) => {
    const initialValues = {
        emailCode: '',
        phoneCode: ''
    };

    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: () => { }
    });

    const handleSubmit = () => {
        onSubmit(formik.values);
    }
    console.log(formik)
    return (
        <Stack spacing={3}>
            <TextField
                autoFocus
                error={!!(formik.touched.emailCode && formik.errors.emailCode)}
                fullWidth
                helperText={formik.touched.emailCode && formik.errors.emailCode}
                label="Email OTP"
                name="emailCode"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.emailCode}
            />
            <TextField
                error={!!(formik.touched.phoneCode && formik.errors.phoneCode)}
                fullWidth
                helperText={formik.touched.phoneCode && formik.errors.phoneCode}
                label="Mobile OTP"
                name="phoneCode"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phoneCode}
            />
            <Button
                fullWidth
                sx={{ mt: 3 }}
                size="large"
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                disabled={!formik.dirty || !formik.isValid}
            >
                Continue
            </Button>
        </Stack>
    )
}

export default VerifyOTP