import React from "react"
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import FileDropzone from "components/FileDropZone";

const ProductThumbnails = ({ files, handleFileRemove, handleFilesDrop, handleFilesRemoveAll, handleUpload }) => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid xs={12} md={4} item>
                        <Stack spacing={1}>
                            <Typography variant="h6">
                                Images
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            >
                                Images will appear in the store front of your website.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={12} md={8} item>
                        <FileDropzone
                            accept={{ 'image/*': [] }}
                            caption="(SVG, JPG, PNG, or gif maximum 900x400)"
                            files={files}
                            onDrop={handleFilesDrop}
                            onRemove={handleFileRemove}
                            onRemoveAll={handleFilesRemoveAll}
                            onUpload={handleUpload}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ProductThumbnails