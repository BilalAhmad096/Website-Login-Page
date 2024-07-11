import { useFormik } from "formik";
import { Button, Stack, TextField } from "@mui/material"

import { schema } from './schema'

const ContactForm = ({ onSubmit }) => {
    const initialValues = {
        phone:'',
        email:'',
    };

    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: () => { }
    });

    const handleSubmit = () => {
        onSubmit(formik.values)
    }

    return (
        <Stack spacing={3}>
            <TextField
                autoFocus
                error={!!(formik.touched.phone && formik.errors.phone)}
                fullWidth
                helperText={formik.touched.phone && formik.errors.phone}
                label="Mobile Number"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
            />
            <TextField
                error={!!(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email address"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
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

export default ContactForm