import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    activeFiltersCard: {
        padding: 16
    },
    searchBox: {
        padding: 16
    },
    activeFilterLabel: {
        alignItems: 'center',
        display: 'flex',
        '& span': {
            fontWeight: 600
        }
    }
}))

export default useStyles;
