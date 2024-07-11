import { Box, Chip, IconButton, Link, SvgIcon, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import { ArrowForward, ArrowRight, Edit, Link as LinkIcon } from '@mui/icons-material';

import { Scrollbar } from 'components/Scrollbar'
import useStyles from './styles'
import { NavLink } from 'react-router-dom';
import { paths } from 'routes/paths';

const ProductListTable = () => {
    const classes = useStyles()
    return (
        <Box>
            <Scrollbar>
                <Table sx={{ minWidth: 1200 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell width="25%">
                                Name
                            </TableCell>
                            <TableCell width="25%">
                                Options
                            </TableCell>
                            <TableCell>
                                Total Users
                            </TableCell>
                            <TableCell>
                                Status
                            </TableCell>
                            <TableCell align="right">
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableRow>
                        <TableCell width="25%">
                            <Box className={classes.productNameCell}>
                                {1 == 1
                                    ? <Box className={classes.productImage} sx={{ backgroundImage: `url('/assets/images/mock/demo-product.png')` }} />
                                    : (
                                        <Box className={classes.productIcon}>
                                            <SvgIcon>
                                                <Image01Icon />
                                            </SvgIcon>
                                        </Box>
                                    )}
                                <Typography variant="subtitle2" className={classes.productName}>RS Discord Access</Typography>
                            </Box>
                        </TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>
                            <Chip label="Draft" color="warning" />
                        </TableCell>
                        <TableCell align="right">
                            <IconButton component={NavLink} to='/vendor/products/edit/discord/123'>
                                <SvgIcon>
                                    <Edit />
                                </SvgIcon>
                            </IconButton>
                            <IconButton component={NavLink} to={paths.dashboard.products.edit}>
                                <SvgIcon>
                                    <ArrowForward />
                                </SvgIcon>
                            </IconButton>
                            <IconButton onClick={() => { }}>
                                <SvgIcon>
                                    <LinkIcon />
                                </SvgIcon>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </Table>
            </Scrollbar>
        </Box >
    )
}

export default ProductListTable