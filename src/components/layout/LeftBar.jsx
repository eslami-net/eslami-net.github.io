import IconButton from "@mui/material/IconButton";

import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function LeftBar({ open, setOpen }) {
  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <div>
        <IconButton
          onClick={() => {
            setOpen(false);
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {[
          ["Home", "home", "fa-house-user"],
          ["Profession", "profession", "fa-user-tie"],
          ["Honors", "honors", "fa-award"],
          ["Educations", "educations", "fa-user-graduate"],
        ].map((text, index) => (
          <ListItem button key={text[1]}>
            <ListItemIcon>
              <i className={"fa " + text[2] + " fa-lg"}></i>
            </ListItemIcon>
            <ListItemText primary={text[0]} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
