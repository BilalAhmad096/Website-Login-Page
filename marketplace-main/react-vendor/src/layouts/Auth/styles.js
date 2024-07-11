import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'row',
            minHeight: '100vh',
            [theme.breakpoints.down('sm')]: {
                flexDirection: "column-reverse"
            }
        },
        leftBanner: {
            alignItems: 'center',
            backgroundColor: theme.palette.neutral[800],
            backgroundImage: 'url("/assets/images/gradient-bg.svg")',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            color: theme.palette.common.white,
            display: 'flex',
            flex: '1 1 auto',
            justifyContent: 'center',
            padding: 64,
            [theme.breakpoints.down('sm')]: {
                flex: '0 0 auto',
                padding: 32
            }
        },
        loginForm: {
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            flex: '0 0 auto',
            flexDirection: 'column',
            justifyContent: "start",
            maxWidth: '100%',
            padding: 64,
            paddingTop: 100,
            width: 600,
            [theme.breakpoints.down('sm')]: {
                flex: '1 1 auto',
                padding: 32,
                paddingTop: 32
            }
        },
        logo: {
            display: 'inline-flex',
            height: 'auto',
            width: '120px',
        }
    };
});

export default useStyles;
