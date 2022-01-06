import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function BottomBar({ title, setOpen }) {
  return (
    <BottomNavigation
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
    >
      <BottomNavigationAction
        label="Educations"
        value="educations"
        icon={<i className="fa fa-user-graduate fa-lg"></i>}
      />
      <BottomNavigationAction
        label="Honors"
        value="honors"
        icon={<i className="fa fa-award fa-lg"></i>}
      />
      <BottomNavigationAction
        label="Profession"
        value="profession"
        icon={<i className="fa fa-user-tie fa-lg"></i>}
      />
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<i className="fa fa-house-user fa-lg"></i>}
      />
    </BottomNavigation>
  );
}
