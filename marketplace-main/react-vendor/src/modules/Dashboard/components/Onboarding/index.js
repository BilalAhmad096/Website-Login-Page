import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Avatar, Card, Stack, SvgIcon, alpha, TextField } from '@mui/material';
import useStyles from './styles';
import Camera01Icon from '@untitled-ui/icons-react/build/esm/Camera01';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import { NavLink } from 'react-router-dom';
import { paths } from 'routes/paths';

const Onboarding = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [avatar, setAvatar] = useState('')
    const [stipeKey, setStripeKey] = useState('')

    const classes = useStyles()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Card className={classes.container}>
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step>
                    <StepLabel>
                        Upload Store Logo
                    </StepLabel>
                    <StepContent>
                        <Typography>Upload your brand logo to personalize your storefront.</Typography>
                        <Box className={classes.logoContainer}>
                            <Box className={classes.logoCard}>
                                <Box className={classes.avatarOverlay}>
                                    <Stack
                                        alignItems="center"
                                        direction="row"
                                        spacing={1}
                                    >
                                        <SvgIcon color="inherit">
                                            <Camera01Icon />
                                        </SvgIcon>
                                        <Typography
                                            color="inherit"
                                            variant="subtitle2"
                                            sx={{ fontWeight: 700 }}
                                        >
                                            Select
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Avatar src={avatar} className={classes.avatar}>
                                    <SvgIcon>
                                        <User01Icon />
                                    </SvgIcon>
                                </Avatar>
                            </Box>
                        </Box>
                        <Box>
                            <Button variant="contained" onClick={handleNext}>
                                Next
                            </Button>
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>
                        Add At Least One Product
                    </StepLabel>
                    <StepContent>
                        <Typography>List a product to showcase what you have to offer.</Typography>
                        <Box className={classes.section}>
                            <Button variant="outlined" LinkComponent={NavLink} to={paths.dashboard.products.index}>
                                Goto Products
                            </Button>
                        </Box>
                        <Box>
                            <Button variant="contained" onClick={handleNext}>
                                Next
                            </Button>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Stripe Account Details</StepLabel>
                    <StepContent>
                        <Typography>Provide your Stripe account information for payment processing.</Typography>
                        <Box className={classes.section}>
                            <TextField
                                autoFocus
                                label="Stripe Key"
                                name="stripe"
                                onChange={setStripeKey}
                                type="text"
                                value={stipeKey}
                            />
                        </Box>
                        <Box>
                            <Button variant="contained" onClick={handleNext}>
                                Next
                            </Button>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Submit for Verification</StepLabel>
                    <StepContent>
                        <Typography>Submit your details for verification to ensure compliance.</Typography>
                        <Box className={classes.section}>

                        </Box>
                        <Box>
                            <Button variant="contained" onClick={handleNext}>
                                Submit for Verification
                            </Button>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Wait for Verification</StepLabel>
                    <StepContent>
                        <Typography>Our team will review your submission and get back to you shortly.</Typography>
                    </StepContent>
                </Step>
            </Stepper>
        </Card>
    );
}

export default Onboarding