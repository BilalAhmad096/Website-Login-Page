import { useCallback, useState } from 'react';
import { Box, Button, Card, Chip, Stack, Typography } from '@mui/material'

import useStyles from './styles'
import MultiSelect from 'components/MultiSelect'

const roleList = [
    {
        label: 'RS Yearly',
        value: 'rsyearly'
    },
    {
        label: 'RS Monthly',
        value: 'monthly'
    },
    {
        label: 'Free Trial',
        value: 'trial'
    }
];


const DiscordRoleSelection = ({ handleNext }) => {
    const classes = useStyles()
    const [selectedRole, setSelectedRoles] = useState([])

    const showSelectedRoles = selectedRole.length > 0;

    const handleRemoveRole = () => { }

    const handleRoleSelection = useCallback((values) => {
        setSelectedRoles(values)
    }, [])

    return (
        <Card className={classes.container}>
            <Typography className={classes.title} variant="h5">Discord roles</Typography>
            <Typography variant="overline">Included with this product</Typography>
            <Stack className={classes.selectedRoleList} alignItems="center" direction="row" flexWrap="wrap" gap={1}>
                {showSelectedRoles
                    ? selectedRole.map((role) => {
                        const option = roleList.find((option) => option.value === role);
                        return (
                            <Chip
                                label={(<Box className={classes.selectedRoleLabel}>{option.label}</Box>)}
                                onDelete={() => handleRemoveRole()}
                                variant="filled"
                            />
                        )
                    })
                    : (
                        <Typography color="text.secondary" variant="subtitle2">No roles selected</Typography>
                    )
                }
            </Stack>
            <Box className={classes.input}>
                <MultiSelect
                    label="Select Discord Roles"
                    onChange={handleRoleSelection}
                    options={roleList}
                    value={selectedRole}
                    variant="outlined"
                />
            </Box>
            <Box className={classes.buttonContainer}>
                <Button variant="contained" onClick={handleNext}>Confirm Selection</Button>
            </Box>
        </Card>
    )
}

export default DiscordRoleSelection