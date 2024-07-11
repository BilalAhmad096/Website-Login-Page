import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        transition: 'all 0.3s',
        '&:hover': {
            borderColor: theme.palette.primary.main,
        }
    },
    icon: {
        height: 40,
        width: 40,
        '& img': {
            height: 'auto',
            width: '100%'
        }
    },
    addButton: {
        marginTop: 16
    }
}))

export default useStyles;
