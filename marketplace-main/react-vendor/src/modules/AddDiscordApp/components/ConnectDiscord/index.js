import { Card, Typography, Button, Box } from "@mui/material"
import useStyles from "./styles"

const ConnectDiscord = ({ handleNext }) => {
    const classes = useStyles()

    return (
        <Card className={classes.container}>
            <Typography className={classes.title} variant="h5">Connect Your Discord</Typography>
            <Typography variant="caption">Give your customers Discord roles with unique privileges in your Discord server. The roles you add will be automatically assigned to customers who get this product.</Typography>
            <Box className={classes.buttonContainer}>
                <Button variant="contained" onClick={handleNext}>Connect Discord</Button>
            </Box>
        </Card>
    )
}

export default ConnectDiscord