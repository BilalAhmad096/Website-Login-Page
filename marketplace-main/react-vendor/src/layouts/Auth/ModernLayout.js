import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';

import Logo from 'assets/images/logo.png'
import useStyles from './styles';

export const Layout = (props) => {
    const { children } = props;
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <Box className={classes.leftBanner}>
                <Box maxWidth="md">
                    <Typography
                        sx={{ mb: 1 }}
                        variant="h4"
                    >
                        Welcome to Rocket Scooter Marketplace
                    </Typography>
                    <Typography color="text.secondary"
                        sx={{ mb: 4 }}
                    >
                        Your gateway to a community of trading enthusiasts and a hub of premium trading tools and resources.
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{ mb: 2 }}
                    >
                        Join a network of reputable vendors and trading experts.
                    </Typography>

                </Box>
            </Box>
            <Box className={classes.loginForm}>
                <div>
                    <Box sx={{ mb: 4 }}>
                        <Stack
                            alignItems="center"
                            component={NavLink}
                            direction="row"
                            display="inline-flex"
                            href='/'
                            spacing={1}
                            sx={{ textDecoration: 'none' }}
                        >
                            <Box>
                                <img src={Logo} alt='logo' className={classes.logo} />
                            </Box>
                        </Stack>
                    </Box>
                    {children}
                </div>
            </Box>
        </Box>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};
