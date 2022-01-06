import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 170;

export default function TopBar({ title, setOpen, open }) {
  const [op, setOp] = useState(open);
  useEffect(() => {
    setOp(open);
  }, [open]);

  return (
    <AppBar
      position="static"
      style={{
        zIndex: 6,
      }}
      // style={{
      //   width: `calc(100% - ${op ? drawerWidth : 0}px)`,
      //   marginLeft: `${op ? drawerWidth : 0}px`,
      // }}
    >
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => {
            setOp(!open);
            setOpen(!open);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography>{title}</Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
}
