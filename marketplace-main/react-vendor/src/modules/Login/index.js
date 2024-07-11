import { NavLink } from "react-router-dom";
import { Box, Button, Link, Stack, SvgIcon, TextField, Typography } from '@mui/material';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Layout as AuthLayout } from 'layouts/Auth/ModernLayout';
import useStyles from 'layouts/Auth/styles';

const initialValues = {
    email: '',
    password: '',
    submit: null
};

const validationSchema = Yup.object({
    email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
    password: Yup
        .string()
        .max(255)
        .required('Password is required')
});

const Login = () => {
    const classes = useStyles()

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: () => { }
    });

    return (
        <AuthLayout>
            <Stack sx={{ mb: 4 }} spacing={1}            >
                <Typography variant="h5">
                    Log in
                </Typography>
                <Typography color="text.secondary" variant="body2">
                    Don&apos;t have an account?
                    &nbsp;
                    <Link href="/vendor/register" underline="hover" variant="subtitle2"                    >
                        Register
                    </Link>
                </Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                        autoFocus
                        error={!!(formik.touched.email && formik.errors.email)}
                        fullWidth
                        helperText={formik.touched.email && formik.errors.email}
                        label="Email Address"
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        value={formik.values.email}
                    />
                    <TextField
                        error={!!(formik.touched.password && formik.errors.password)}
                        fullWidth
                        helperText={formik.touched.password && formik.errors.password}
                        label="Password"
                        name="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="password"
                        value={formik.values.password}
                    />
                </Stack>
                <Button
                    fullWidth
                    sx={{ mt: 3 }}
                    size="large"
                    type="submit"
                    variant="contained"
                >
                    Continue
                </Button>
                <Box sx={{ mt: 3 }}>
                    <Link
                        href="#"
                        underline="hover"
                        variant="subtitle2"
                    >
                        Forgot password?
                    </Link>
                </Box>
            </form>
        </AuthLayout>
    );
};

export default Login;
