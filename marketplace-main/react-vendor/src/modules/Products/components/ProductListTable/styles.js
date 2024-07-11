import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    productNameCell: {
        alignItems: 'center',
        display: 'flex'
    },
    productImage: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: 8,
        display: 'flex',
        height: 80,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 80,
        alignItems: 'center',
        backgroundColor: theme.palette.neutral[50],
    },
    productIcon: {
        alignItems: 'center',
        backgroundColor: theme.palette.neutral[50],
        borderRadius: 1,
        display: 'flex',
        height: 80,
        justifyContent: 'center',
        width: 80
    },
    productName: {
        paddingLeft: 8
    }
}))

export default useStyles;
