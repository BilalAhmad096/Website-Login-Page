import { Stack, Typography, Chip, Button, FormHelperText } from '@mui/material'
import { useFormik } from 'formik';

import { schema } from './schema'

const options = [
    {
        label: 'Technical indicators',
        value: 'technical-indicators'
    },
    {
        label: 'Trading Communities',
        value: 'trading-communities'
    },
    {
        label: 'Alerts',
        value: 'Alerts'
    },
    {
        label: 'Discord Bots',
        value: 'discord-bots'
    },
    {
        label: 'Scanner Settings',
        value: 'scanner-settings'
    },
    {
        label: 'Newsletters and Information',
        value: 'newsletters-and-information'
    }, {
        label: 'Trading Funding Program',
        value: 'trading-funding-program'
    }
]

const StoreCategory = ({ onSubmit }) => {
    const initialValues = {
        categories: [],
    };

    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: () => { }
    });

    const handleSubmit = () => {
        onSubmit(formik.values)
    }

    const onChangeCategory = (value) => {
        formik.setFieldValue(
            "categories",
            formik.values.categories.includes(value)
                ? formik.values.categories.filter(category => category !== value)
                : [...formik.values.categories, value]
        );
    };
    console.log(formik)
    return (
        <>
            <Stack spacing={1}>
                <Typography
                    color="text.secondary"
                    variant="overline"
                >
                    What are you selling?
                </Typography>
                <Stack
                    alignItems="center"
                    direction="row"
                    flexWrap="wrap"
                    gap={2}
                >
                    {options.map((option) => (
                        <Chip
                            key={option.label}
                            label={option.label}
                            onClick={() => onChangeCategory?.(option.value)}
                            sx={{
                                borderColor: 'transparent',
                                borderRadius: 1.5,
                                borderStyle: 'solid',
                                borderWidth: 2,
                                ...(formik.values.categories.find(category => category === option.value) && {
                                    borderColor: 'primary.main'
                                })
                            }}
                        />
                    ))}
                </Stack>
            </Stack>
            {!!(formik.errors.categories) && (
                <FormHelperText sx={{ mt: 3, color: 'error.main' }}>
                    {formik.errors.categories}
                </FormHelperText>
            )}
            <Button
                fullWidth
                sx={{ mt: 4 }}
                size="large"
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                disabled={!formik.dirty || !formik.isValid}
            >
                Continue
            </Button>
        </>
    )
}

export default StoreCategory