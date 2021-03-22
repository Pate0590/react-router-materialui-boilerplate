import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import navLinks from "./constants";
import HideOnScroll from "./HideOnScroll";
import SideDrawer from "./SideDrawer";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <AppBar position="fixed">
        <Toolbar component="nav">
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <IconButton edge="start" aria-label="home">
              <a href="/" style={{ color: `white` }}>
                <Home fontSize="large" />
              </a>
            </IconButton>

            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navListDisplayFlex}
              >
                {navLinks.map(({ title, path }) => (
                  <a href={path} key={title} className={classes.linkText}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </a>
                ))}
              </List>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
