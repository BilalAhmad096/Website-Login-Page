import { NavLink } from 'react-router-dom'
import { Box, Container, Stack, Typography, Breadcrumbs, Link, SvgIcon, Button, Card } from '@mui/material'
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';

import { BreadcrumbsSeparator } from 'components/BreadcrumbsSeparator'
import { paths } from 'routes/paths'
import useStyles from './styles';
import { ProductListHead, ProductListTable } from './components';

const Products = () => {
    const classes = useStyles()

    return (
        <Box component="main" className={classes.container}>
            <Container maxWidth="xl">
                <Stack spacing={4}>
                    <Stack direction="row" justifyContent="space-between" spacing={4}                    >
                        <Stack spacing={1}>
                            <Typography variant="h4">Products</Typography>
                            <Breadcrumbs separator={<BreadcrumbsSeparator />}>
                                <Link color="text.primary" component={NavLink} to={paths.dashboard.index} variant="subtitle2">Dashboard</Link>
                                <Link color="text.primary" component={NavLink} to={paths.dashboard.products.index} variant="subtitle2">Products</Link>
                                <Typography color="text.secondary" variant="subtitle2">List</Typography>
                            </Breadcrumbs>
                        </Stack>
                        <Stack alignItems="center" direction="row" spacing={3}>
                            <Button
                                component={NavLink}
                                to={paths.dashboard.products.create}
                                startIcon={(
                                    <SvgIcon>
                                        <PlusIcon />
                                    </SvgIcon>
                                )}
                                variant="contained"
                            >
                                Add
                            </Button>
                        </Stack>
                    </Stack>
                    <Card>
                        <ProductListHead onFiltersChange={() => { }} />
                        <ProductListTable />
                    </Card>
                </Stack>
            </Container>
        </Box>
    )
}

export default Products