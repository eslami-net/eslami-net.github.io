import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Experience({ experiences }) {
  const matches = useMediaQuery("(min-width:600px)"); // is greater than 600
  return (
    <Card
      style={{
        borderRadius: 25,
        width: matches ? "500px" : "90%",
        margin: 20,
        padding: 10,
      }}
    >
      <CardContent>
        <Typography variant="body1" component="span">
          Experiences
        </Typography>
        <Timeline>
          {experiences?.map((e) => {
            return (
              <TimelineItem position="alternate">
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {/* <ul>
                    {e.tasks?.map((t) => {
                      return <p>{t}</p>;
                    })}
                  </ul> */}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h7" component="span">
                    <Link href={e.url} target="_blank" color="inherit">
                      {e.company}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.from} - {e.to}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.summery}
                  </Typography>
                  <br />
                  {/* <Typography variant="body2">{e.title}</Typography> */}
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </CardContent>
    </Card>
  );
}
