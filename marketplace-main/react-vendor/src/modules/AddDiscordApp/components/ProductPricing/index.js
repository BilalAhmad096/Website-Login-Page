import { Box, Card, CardContent, Divider, FormControl, FormLabel, Grid, InputAdornment, MenuItem, Radio, Select, Stack, Switch, TextField, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@emotion/react"

import { billingPeriodOptions, expirationOptions, pricingOption, showOfferCancelDiscountOptions } from "./options"
import useStyles from "./styles"

const PricingOptions = ({ formik }) => {
    const classes = useStyles()

    return pricingOption.map((option) => (
        <Card
            key={option.value}
            className={classes.pricingOptionCard}
            sx={{
                ...(formik.values.pricingOption === option.value && {
                    backgroundColor: 'primary.alpha12',
                    boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`
                })
            }}
            onClick={() => formik.setFieldValue('pricingOption', option.value)}
            variant="outlined"
        >
            <Stack direction="row" spacing={1}>
                <Radio checked={formik.values.pricingOption === option.value} color="primary" />
                <div>
                    <Typography variant="subtitle1">{option.title}</Typography>
                    <Typography color="text.secondary" variant="body2">
                        {option.description}
                    </Typography>
                </div>
            </Stack>
        </Card>
    ))
}

const FreePricingSection = ({ formik }) => {
    return (
        <Box>
            <FormControl fullWidth>
                <FormLabel sx={{ color: 'text.primary', mb: 1 }}>
                    Access expires
                </FormLabel>
                <Select
                    placeholder="Access expires"
                    value={formik.values.freeAccessPeriod}
                    onChange={(e) => formik.setFieldValue('freeAccessPeriod', e.target.value)}
                >
                    {expirationOptions.map((option) => {
                        return (
                            <MenuItem value={option.value} key={option.value}>
                                {option.label}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    )
}

const SubscriptionPricingSection = ({ formik }) => {
    const classes = useStyles()

    return (
        <Stack spacing={2}>
            <TextField
                error={!!(formik.touched.recurringAmount && formik.errors.recurringAmount)}
                fullWidth
                helperText={formik.touched.recurringAmount && formik.errors.recurringAmount}
                name="recurringAmount"
                label="Amount"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.recurringAmount}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
            />
            <Grid container columnGap={2}>
                <Grid xs={formik.values.billingPeriod === 'custom' ? 8 : 12} item>
                    <FormControl fullWidth>
                        <Select
                            placeholder="Access expires"
                            value={formik.values.billingPeriod}
                            onChange={(e) => formik.setFieldValue('billingPeriod', e.target.value)}
                        >
                            {billingPeriodOptions.map((option) => {
                                return (
                                    <MenuItem value={option.value} key={option.value}>
                                        {option.label}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                {formik.values.billingPeriod === 'custom' && (
                    <Grid xs item>
                        <TextField
                            error={!!(formik.touched.customBillingPeriod && formik.errors.customBillingPeriod)}
                            fullWidth
                            helperText={formik.touched.customBillingPeriod && formik.errors.customBillingPeriod}
                            name="customBillingPeriod"
                            label="Billing Period (in days)"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.customBillingPeriod}
                        />
                    </Grid>
                )}
            </Grid>
            <Divider />
            <Stack spacing={2}>
                <Stack alignItems="center" direction="row" justifyContent="space-between" spacing={3}>
                    <Stack spacing={1}>
                        <Typography gutterBottom variant="subtitle1"> Free trial days</Typography>
                        <Typography
                            color="text.secondary"
                            variant="body2"
                        >
                            Add free trial days before charging customers.
                        </Typography>
                    </Stack>
                    <Switch
                        checked={formik.values.trialPeriodEnabled}
                        color="primary"
                        edge="start"
                        name="trialPeriodEnabled"
                        onChange={formik.handleChange}
                        value={formik.values.trialPeriodEnabled}
                    />
                </Stack>
                {formik.values.trialPeriodEnabled && (
                    <TextField
                        autoFocus
                        error={!!(formik.touched.trialPeriodDays && formik.errors.trialPeriodDays)}
                        fullWidth
                        helperText={'Customers will be charged after their free trial is over'}
                        name="trialPeriodDays"
                        label="Trial Period Days"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.trialPeriodDays}
                    />
                )}
            </Stack>
            <Stack spacing={2}>
                <Stack alignItems="center" direction="row" justifyContent="space-between" spacing={3}>
                    <Stack spacing={1}>
                        <Typography gutterBottom variant="subtitle1">One-time initial fee</Typography>
                        <Typography color="text.secondary" variant="body2">
                            Add a one-time initial fee to the subscription.
                        </Typography>
                    </Stack>
                    <Switch
                        checked={formik.values.initialFee}
                        color="primary"
                        edge="start"
                        name="initialFee"
                        onChange={formik.handleChange}
                        value={formik.values.initialFee}
                    />
                </Stack>
                {formik.values.initialFee && (
                    <TextField
                        error={!!(formik.touched.initialPrice && formik.errors.initialPrice)}
                        fullWidth
                        helperText={formik.touched.initialPrice && formik.errors.initialPrice}
                        name="initialPrice"
                        label="Initial Price"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.initialPrice}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                )}
            </Stack>
            <Stack spacing={2}>
                <Stack alignItems="center" direction="row" justifyContent="space-between" spacing={3}>
                    <Stack spacing={1}>
                        <Typography gutterBottom variant="subtitle1">Offer discount before customer cancels</Typography>
                        <Typography color="text.secondary" variant="body2">
                            Offer your customers a promotional code before they cancel.
                        </Typography>
                    </Stack>
                    <Switch
                        checked={formik.values.showOfferCancelDiscount}
                        color="primary"
                        edge="start"
                        name="showOfferCancelDiscount"
                        onChange={formik.handleChange}
                        value={formik.values.showOfferCancelDiscount}
                    />
                </Stack>
                {formik.values.showOfferCancelDiscount && (
                    <Grid container columnGap={2}>
                        <Grid xs={6}>
                            <TextField
                                error={!!(formik.touched.showOfferCancelDiscountPercentage && formik.errors.showOfferCancelDiscountPercentage)}
                                fullWidth
                                helperText={formik.touched.showOfferCancelDiscountPercentage && formik.errors.showOfferCancelDiscountPercentage}
                                name="showOfferCancelDiscountPercentage"
                                label="Offer Percentage"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.showOfferCancelDiscountPercentage}
                                className={classes.percentageInput}
                                type='number'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">%</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid xs>
                            <FormControl fullWidth>
                                <Select
                                    value={formik.values.showOfferCancelDiscountPeriod}
                                    onChange={(e) => formik.setFieldValue('showOfferCancelDiscountPeriod', e.target.value)}
                                >
                                    {showOfferCancelDiscountOptions.map((option) => {
                                        return (
                                            <MenuItem value={option.value} key={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                )}
            </Stack>
        </Stack>
    )
}

const OnetimePricingSection = ({ formik }) => {
    return (
        <Stack spacing={2}>
            <TextField
                error={!!(formik.touched.onetimeInitialPrice && formik.errors.onetimeInitialPrice)}
                fullWidth
                helperText={formik.touched.onetimeInitialPrice && formik.errors.onetimeInitialPrice}
                name="onetimeInitialPrice"
                label="Amount"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.onetimeInitialPrice}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
            />
            <FormControl fullWidth>
                <Select
                    value={formik.values.onetimeExpirationDays}
                    onChange={(e) => formik.setFieldValue('onetimeExpirationDays', e.target.value)}
                >
                    {expirationOptions.map((option) => {
                        return (
                            <MenuItem value={option.value} key={option.value}>
                                {option.label}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Stack>
    )
}

const ProductPricing = ({ formik }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid xs={12} md={4} item>
                        <Stack spacing={1}>
                            <Typography variant="h6">
                                Set your price
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            >
                                Choose your price, release method!
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={12} md={8} item>
                        <Stack spacing={3}>
                            <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
                                <PricingOptions formik={formik} />
                            </Stack>
                            {formik.values.pricingOption === 'free' && <FreePricingSection formik={formik} />}
                            {formik.values.pricingOption === 'subscription' && <SubscriptionPricingSection formik={formik} />}
                            {formik.values.pricingOption === 'onetime' && <OnetimePricingSection formik={formik} />}
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ProductPricing