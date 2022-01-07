import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";

import useMediaQuery from "@mui/material/useMediaQuery";
export default function Project({ projects }) {
  const matches = useMediaQuery("(min-width:600px)"); // is greater than 600
  return (
    <>
      <Typography
        variant="h5"
        style={{
          padding: 30,
        }}
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={2}
        style={{
          padding: 30,
        }}
      >
        {projects?.map((p) => {
          return (
            <Grid item xs={12} md={4}>
              <Card
                style={{
                  borderRadius: 25,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={p?.images[0]?.path}
                    // alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {p.title}
                    </Typography>
                    <Typography
                      height="140"
                      noWrap
                      variant="body2"
                      color="text.secondary"
                    >
                      {p.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
                    Open
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
