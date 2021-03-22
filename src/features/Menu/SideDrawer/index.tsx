import { Drawer, IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState, Fragment } from "react";
import useStyles from "./styles";

const SideDrawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState<any>({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    console.log(anchor, open);
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <Fragment>
      <IconButton edge="start" aria-label="menu" onClick={toggleDrawer("right", true)}>
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>

      <Drawer anchor="right" open={state.right} onClose={toggleDrawer("right", false)}>
        {sideDrawerList("right")}
      </Drawer>
    </Fragment>
  );
};

export default SideDrawer;
