import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '50px 40px'
    },
    logoContainer: {
        margin: '20px 0',
        borderColor: theme.palette.neutral[300],
        borderRadius: 8,
        borderStyle: 'dashed',
        borderWidth: 1,
        padding: 10,
        width: 'fit-content'
    },
    logoCard: {
        borderRadius: 8,
        height: '100%',
        width: '100%',
        position: 'relative'
    },
    avatarOverlay: {
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.neutral[700], 0.5),
        borderRadius: 8,
        color: theme.palette.common.white,
        cursor: 'pointer',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        opacity: 0,
        position: 'absolute',
        top: 0,
        width: '100px',
        zIndex: 1,
        '&:hover': {
            opacity: 1
        }
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    section: {
        margin: '20px 0',
    }
}))

export default useStyles;
