import { Grid, Card } from '@mui/material'
import DiscordIcon from 'assets/icons/DiscordIcon'
import AppCard from 'components/AppCard'
import { paths } from 'routes/paths'
import useStyles from './styles'

const ProductList = () => {
    const classes = useStyles()

    return (
        <Card className={classes.container}>
            <Grid container spacing={2}>
                <Grid xs={12} sm={3.8} item>
                    <AppCard
                        icon={<DiscordIcon />}
                        path={paths.dashboard.products.addDiscordApp}
                        name="Discord Access"
                        description="Give premium access to your Discord server, with automatic role management by the Rocket Scooter Bot."
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

export default ProductList