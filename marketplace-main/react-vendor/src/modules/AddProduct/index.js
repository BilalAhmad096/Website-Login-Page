import { Box, Container, Stack, Link, Typography, Breadcrumbs } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { BreadcrumbsSeparator } from 'components/BreadcrumbsSeparator'
import useStyles from "./styles"
import { paths } from 'routes/paths'
import { AppList } from './components'

const AddProduct = () => {
    const classes = useStyles()
    return (
        <Box className={classes.container} component="main">
            <Container maxWidth="xl">
                <Stack spacing={3}>
                    <Stack spacing={1}>
                        <Typography variant="h4">
                            Create a new product
                        </Typography>
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
                            <Typography
                                color="text.secondary"
                                variant="subtitle2"
                            >
                                Create
                            </Typography>
                        </Breadcrumbs>
                    </Stack>
                    <AppList />
                </Stack>
            </Container>
        </Box>
    )
}

export default AddProduct