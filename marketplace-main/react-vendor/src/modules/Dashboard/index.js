import { Box, Button, Container, Grid, Stack, SvgIcon, Typography } from "@mui/material"

import { Onboarding } from "./components";

const Dashboard = () => {
    return (
        <Box component="main">
            <Container maxWidth='xl'>
                <Grid container spacing={{ xs: 3, lg: 4 }}>
                    <Grid xs={12} item>
                        <Stack direction="row" justifyContent="space-between" spacing={4}>
                            <div>
                                <Typography variant="h4">
                                    Welcome back!
                                </Typography>
                            </div>
                            <Stack
                                alignItems="center"
                                direction="row"
                                spacing={2}
                            >

                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid xs={12} item>
                        <Onboarding />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Dashboard