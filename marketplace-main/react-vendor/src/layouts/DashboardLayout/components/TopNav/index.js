import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import { Box, IconButton, Stack, SvgIcon, useMediaQuery } from '@mui/material';
import { alpha } from '@mui/material/styles';

import AccountButton from '../AccountButton';
import NotificationsButton from '../NotificationsButton';

const TOP_NAV_HEIGHT = 64;
const SIDE_NAV_WIDTH = 280;

const TopNav = (props) => {
    const { onMobileNavOpen, ...other } = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

    return (
        <Box
            component="header"
            sx={{
                backdropFilter: 'blur(6px)',
                backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
                position: 'sticky',
                left: {
                    lg: `${SIDE_NAV_WIDTH}px`
                },
                top: 0,
                width: {
                    lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
                },
                zIndex: (theme) => theme.zIndex.appBar
            }}
            {...other}>
            <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{
                    minHeight: TOP_NAV_HEIGHT,
                    px: 2
                }}
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={2}
                >
                    {!lgUp && (
                        <IconButton onClick={onMobileNavOpen}>
                            <SvgIcon>
                                <Menu01Icon />
                            </SvgIcon>
                        </IconButton>
                    )}
                </Stack>
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={2}
                >
                    <NotificationsButton />
                    <AccountButton />
                </Stack>
            </Stack>
        </Box>
    );
};

export default TopNav