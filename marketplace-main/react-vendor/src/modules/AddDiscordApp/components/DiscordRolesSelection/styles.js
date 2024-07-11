import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 30,
    },
    title: {
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 30
    },
    selectedRoleList: {
        margin: '8px 0'
    },
    selectedRoleLabel: {
        alignItems: 'center',
        display: 'flex',
        fontWeight: 600
    },
    input:{
        marginTop:20
    }
}))

export default useStyles;
