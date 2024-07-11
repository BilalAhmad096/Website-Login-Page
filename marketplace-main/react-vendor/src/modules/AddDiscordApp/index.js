import React, { useEffect, useState } from 'react'
import { Box, Container, Stack, Link, Typography, Breadcrumbs, Button } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom'

import { paths } from 'routes/paths'

import { BreadcrumbsSeparator } from 'components/BreadcrumbsSeparator'
import { ConnectDiscord, DiscordRolesSelection, ProductDetails } from './components'
import useStyles from "./styles"

const AddDiscordApp = () => {
    const classes = useStyles()
    const [step, setStep] = useState(1)
    const { id } = useParams()

    const isEdit = !!id

    const handleNext = () => {
        setStep((prevState) => prevState + 1)
    }

    const handleSubmit = () => {

    }

    useEffect(() => {
        if (isEdit) {
            setStep(3)
        }
    }, [isEdit])

    return (
        <Box className={classes.container} component="main">
            <Container maxWidth="xl">
                <Stack spacing={3}>
                    <Stack spacing={1}>
                        <Typography variant="h4">Add Discord App</Typography>
                        <Breadcrumbs separator={<BreadcrumbsSeparator />}>
                            <Link
                                color="text.primary"
                                component={NavLink}
                                to={paths.dashboard.index}
                                variant="subtitle2"
                            >
                                Dashboard
                            </Link>
                            <Link
                                color="text.primary"
                                component={NavLink}
                                to={paths.dashboard.products.index}
                                variant="subtitle2"
                            >
                                Products
                            </Link>
                            <Link
                                color="text.primary"
                                component={NavLink}
                                to={paths.dashboard.products.create}
                                variant="subtitle2"
                            >
                                Create
                            </Link>
                            <Typography
                                color="text.secondary"
                                variant="subtitle2"
                            >
                                Discord
                            </Typography>
                        </Breadcrumbs>
                    </Stack>
                    {step === 1 && <ConnectDiscord handleNext={handleNext} />}
                    {step === 2 && <DiscordRolesSelection handleNext={handleNext} />}
                    {step === 3 && <ProductDetails />}
                    {step === 3 && (
                        <Stack alignItems="center" direction="row" justifyContent="flex-end" spacing={1}>
                            <Button color="inherit">Cancel</Button>
                            <Button onClick={handleSubmit} type="submit" variant="contained">Create</Button>
                        </Stack>
                    )}
                </Stack>
            </Container>
        </Box>
    )
}

export default AddDiscordApp