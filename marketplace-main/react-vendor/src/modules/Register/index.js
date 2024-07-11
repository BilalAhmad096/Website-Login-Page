import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Link, Stack, SvgIcon, Typography } from "@mui/material";
import ArrowLeft from "@untitled-ui/icons-react/build/esm/ArrowLeft";

import { Layout as AuthLayout } from 'layouts/Auth/ModernLayout';
import { ContactForm, StoreCategory, StoreDetails, VerifyOTP } from "./components";

const Onboarding = () => {
    const [stage, setStage] = useState(1)
    const [storeDetails, setStoreDetails] = useState('')
    const [categories, setCategories] = useState([])
    const [contact, setContact] = useState()

    const handleSubmit = (data) => {
        if (stage === 1) {
            setStoreDetails(data)
        } else if (stage === 2) {
            setCategories(data)
        } else if (stage === 3) {
            setContact(data)
        }

        setStage((prevState) => prevState + 1)
        console.log(storeDetails)
        console.log(categories)
        console.log(contact)
    }

    return (
        <AuthLayout>
            {stage === 1 && (<StoreDetails onSubmit={handleSubmit} />)}
            {stage === 2 && (<StoreCategory onSubmit={handleSubmit} />)}
            {stage === 3 && (<ContactForm onSubmit={handleSubmit} />)}
            {stage === 4 && (<VerifyOTP onSubmit={handleSubmit} />)}
            {stage === 5 && (
                <Stack sx={{ mb: 4 }} spacing={3}>
                    <Box sx={{ mb: 4 }}>
                        <Link
                            color="text.primary"
                            component={NavLink}
                            to='/'
                            sx={{
                                alignItems: 'center',
                                display: 'inline-flex'
                            }}
                            underline="hover"
                        >
                            <SvgIcon sx={{ mr: 1 }}>
                                <ArrowLeft />
                            </SvgIcon>
                            <Typography variant="subtitle2">
                                Home
                            </Typography>
                        </Link>
                    </Box>
                    <Typography variant="h5">
                        Thank You for Signing Up!
                    </Typography>
                    <Typography variant="p" sx={{ color: 'text.secondary' }}>
                        Our sales team will contact you shortly. Feel free to explore our platform.
                    </Typography>
                </Stack>
            )}
        </AuthLayout>
    );
};

export default Onboarding;
