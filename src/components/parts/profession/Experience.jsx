import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Link from "@mui/material/Link";

export default function Experience({ experiences }) {
  return (
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
              {e.tasks?.map((t) => {
                return <p>{t}</p>;
              })}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h5" component="span">
                <Link href={e.url} target="_blank" color="inherit">
                  {e.company}
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {e.from} - {e.to}
              </Typography>
              <br />
              <Typography>{e.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {e.summery}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
