import { useCallback } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

import toast from 'react-hot-toast';
import CreditCard01Icon from '@untitled-ui/icons-react/build/esm/CreditCard01';
import Settings04Icon from '@untitled-ui/icons-react/build/esm/Settings04';
import User03Icon from '@untitled-ui/icons-react/build/esm/User03';
import {
    Box,
    Button,
    Divider,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Popover,
    SvgIcon,
    Typography
} from '@mui/material';
import { paths } from 'routes/paths';

const AccountPopover = (props) => {
    const { anchorEl, onClose, open, ...other } = props;
    const navigate = useNavigate();

    const handleLogout = useCallback(async () => {
        try {
            onClose?.();
            navigate('/login');
        } catch (err) {
            toast.error('Something went wrong!');
        }
    }, [navigate, onClose]);

    return (
        <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
                horizontal: 'center',
                vertical: 'bottom'
            }}
            disableScrollLock
            onClose={onClose}
            open={!!open}
            PaperProps={{ sx: { width: 200 } }}
            {...other}>
            <Box sx={{ p: 2 }}>
                <Typography variant="body1">
                    Anika Visser
                </Typography>
                <Typography
                    color="text.secondary"
                    variant="body2"
                >
                    demo@devias.io
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 1 }}>
                <ListItemButton
                    component={NavLink}
                    href={paths.index}
                    sx={{
                        borderRadius: 1,
                        px: 1,
                        py: 0.5
                    }}
                >
                    <ListItemIcon>
                        <SvgIcon fontSize="small">
                            <User03Icon />
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText
                        primary={(
                            <Typography variant="body1">
                                Profile
                            </Typography>
                        )}
                    />
                </ListItemButton>
                <ListItemButton
                    component={NavLink}
                    href={paths.index}
                    sx={{
                        borderRadius: 1,
                        px: 1,
                        py: 0.5
                    }}
                >
                    <ListItemIcon>
                        <SvgIcon fontSize="small">
                            <Settings04Icon />
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText
                        primary={(
                            <Typography variant="body1">
                                Settings
                            </Typography>
                        )}
                    />
                </ListItemButton>
                <ListItemButton
                    component={NavLink}
                    href={paths.index}
                    sx={{
                        borderRadius: 1,
                        px: 1,
                        py: 0.5
                    }}
                >
                    <ListItemIcon>
                        <SvgIcon fontSize="small">
                            <CreditCard01Icon />
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText
                        primary={(
                            <Typography variant="body1">
                                Billing
                            </Typography>
                        )}
                    />
                </ListItemButton>
            </Box>
            <Divider sx={{ my: '0 !important' }} />
            <Box
                sx={{
                    display: 'flex',
                    p: 1,
                    justifyContent: 'center'
                }}
            >
                <Button
                    color="inherit"
                    onClick={handleLogout}
                    size="small"
                >
                    Logout
                </Button>
            </Box>
        </Popover>
    );
};

export default AccountPopover