import { Card, CardContent, Grid, Stack, TextField, Typography } from "@mui/material"

const ProductBasicDetails = ({ formik }) => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid xs={12} md={4} item>
                        <Typography variant="h6">Basic details</Typography>
                    </Grid>
                    <Grid xs={12} md={8} item>
                        <Stack spacing={3}>
                            <TextField
                                error={!!(formik.touched.name && formik.errors.name)}
                                fullWidth
                                helperText={formik.touched.name && formik.errors.name}
                                label="Product Name"
                                name="name"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            <div>
                                <Typography
                                    color="text.secondary"
                                    sx={{ mb: 2 }}
                                    variant="subtitle2"
                                >
                                    Description
                                </Typography>
                                <TextField
                                    error={!!(formik.touched.description && formik.errors.description)}
                                    fullWidth
                                    helperText={formik.touched.description && formik.errors.description}
                                    name="description"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                    multiline
                                    rows={5}
                                />
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ProductBasicDetails