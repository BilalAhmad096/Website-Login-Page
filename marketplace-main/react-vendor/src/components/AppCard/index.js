import { NavLink } from 'react-router-dom'
import { Card, CardContent, Box, Typography, Stack, Chip, Button, SvgIcon } from '@mui/material'
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import useStyles from './styles'
import { useState } from 'react';

const AppCard = ({ icon, path, name, description }) => {
    const classes = useStyles()
    const [step, setStep] = useState(1)

    return (
        <Card className={classes.container} variant="outlined">
            <CardContent>
                <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3} sx={{ mb: 1 }}>
                    <Box className={classes.icon}>{icon}</Box>
                    <Chip label="Free" color='success' size='small' />
                </Stack>
                <Stack spacing={1}>
                    <Typography className={classes.title} variant="overline">{name}</Typography>
                    <Typography variant="caption">{description}</Typography>
                </Stack>
                <Button
                    className={classes.addButton}
                    fullWidth
                    component={NavLink}
                    to={path}
                    startIcon={(
                        <SvgIcon>
                            <PlusIcon />
                        </SvgIcon>
                    )}
                    variant="contained"
                    size="small"
                >
                    Add to product
                </Button>
            </CardContent>
        </Card >
    )
}

export default AppCard