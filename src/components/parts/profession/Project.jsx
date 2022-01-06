import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
export default function Project({ projects }) {
  const matches = useMediaQuery("(min-width:600px)"); // is greater than 600
  return (
    <div
      style={{
        display: "flex",
        flexDirection: matches ? "row" : "column",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 20,
      }}
    >
      {projects?.map((p) => {
        return (
          <Card
            sx={{ minWidth: 345 }}
            // style={{
            //   margin: 10,
            // }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Open
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
