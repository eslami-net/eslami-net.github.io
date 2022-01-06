import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActions } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

export default function AboutMe({ aboutme }) {
  const matches = useMediaQuery("(min-width:600px)"); // is greater than 600

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // backgroundColor: "red",
      }}
    >
      <div
        style={{
          // borderRadius: 25,
          // width: matches ? "500px" : "90%",
          // margin: 20,
          // padding: 10,
          // backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          // borderColor: "red",
          justifyContent: "center",
          marginTop: 20,
          // backgroundColor: "red",

          // justifyContent: "center",
        }}
      >
        <Typography variant="h5" align="left">
          About Me
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            alignItems: "center",
            // borderColor: "red",
            // justifyContent: "center",
            // backgroundColor: "red",
          }}
        >
          <div>
            <img
              style={{
                // margin: matches ? "4vh" : "2vh",
                borderRadius: "50%",
              }}
              width="140vh"
              src={aboutme?.avatar}
              alt="avatar"
            ></img>
          </div>
          <Card
            style={{
              borderRadius: 25,
              width: matches ? "500px" : "90%",
              margin: 20,
              padding: 10,
            }}
          >
            <CardContent>
              <Typography color="textSecondary">
                {aboutme?.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="error"
                style={{ borderRadius: 25, margin: "0 20px", display: "flex" }}
                href="./data/Hamed Eslami CV_20201125.pdf"
              >
                Download CV
              </Button>
            </CardActions>
          </Card>
          <Card
            style={{
              borderRadius: 25,
              width: matches ? "20%" : "90%",
              minHeight: "200px",
              minWidth: "220px",
              // margin: 10,
              marginTop: matches ? 0 : 20,
            }}
          >
            <CardContent>
              {aboutme?.skills?.map((s) => {
                return (
                  <>
                    <Typography marginTop="14px">{s[0]}</Typography>
                    <LinearProgress
                      style={{
                        borderRadius: 25,
                        height: 10,
                      }}
                      variant="determinate"
                      color="primary"
                      value={s[1]}
                    />
                    {/* <br></br> */}
                  </>
                );
              })}
            </CardContent>
          </Card>

          <br></br>
        </div>
      </div>
    </div>
  );
}
