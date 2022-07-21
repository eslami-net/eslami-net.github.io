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
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export default function Education({ educations }) {
  const matches = useMediaQuery("(min-width:600px)"); // is greater than 600
  return (
    <Card
      style={{
        borderRadius: 25,
        width: matches ? "400px" : "90%",
        margin: 20,
        padding: 10,
      }}
    >
      <CardContent>
        <Typography variant="body1" component="span">
          Educations
        </Typography>
        <Timeline sx={{ ml: "0", pl: 0 }}>
          {educations?.map((e) => {
            return (
              <TimelineItem>
                <TimelineOppositeContent
                  style={{ flex: 0.1 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <LocalLibraryIcon color="primary" />
                  </TimelineDot>
                  <TimelineConnector color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h7" component="span">
                    <Link href={e.url} target="_blank" color="inherit">
                      {e.school}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.degree}
                  </Typography>
                  <br />
                  <Typography variant="body2">{e.title}</Typography>
                </TimelineContent>
                <br />
              </TimelineItem>
            );
          })}
        </Timeline>
      </CardContent>
    </Card>
  );
}
