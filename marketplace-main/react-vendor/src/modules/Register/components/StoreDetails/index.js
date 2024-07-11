import { Button, Stack, TextField, Typography } from "@mui/material"
import { useFormik } from "formik";

import { schema } from './schema'

const StoreDetails = ({ onSubmit }) => {
    const initialValues = {
        name: '',
        description: '',
        twitter: '',
        facebook: '',
        instagram: '',
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
        <>
            <Stack sx={{ mb: 4 }} spacing={1}>
                <Typography variant="h5">
                    Let's create your new store
                </Typography>
            </Stack>
            <Stack spacing={3}>
                <TextField
                    autoFocus
                    error={!!(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="Store name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <TextField
                    error={!!(formik.touched.description && formik.errors.description)}
                    fullWidth
                    helperText={formik.touched.description && formik.errors.description}
                    label="Description"
                    name="description"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    rows={3}
                />
                <TextField
                    error={!!(formik.touched.twitter && formik.errors.twitter)}
                    fullWidth
                    helperText={formik.touched.twitter && formik.errors.twitter}
                    label="Twitter (optional)"
                    name="twitter"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.twitter}
                />
                <TextField
                    error={!!(formik.touched.facebook && formik.errors.facebook)}
                    fullWidth
                    helperText={formik.touched.facebook && formik.errors.facebook}
                    label="Facebook (optional)"
                    name="facebook"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.facebook}
                />
                <TextField
                    error={!!(formik.touched.instagram && formik.errors.instagram)}
                    fullWidth
                    helperText={formik.touched.instagram && formik.errors.instagram}
                    label="Instagram (optional)"
                    name="instagram"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.instagram}
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
        </>
    )
}

export default StoreDetails