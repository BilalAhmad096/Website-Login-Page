import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    pricingOptionCard: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        padding: 8,
        width:'100%'
    },
    percentageInput:{
        '& input[type=number]': {
            '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    }
}))

export default useStyles;
