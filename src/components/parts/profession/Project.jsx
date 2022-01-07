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
        height: "100%",
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
            style={{
              borderRadius: 25,
              // width: matches ? "20%" : "90%",
              // minHeight: "200px",
              // minWidth: "220px",
              // marginTop: matches ? 0 : 20,
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
