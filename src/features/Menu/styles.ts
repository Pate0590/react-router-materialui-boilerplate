import { makeStyles } from "@material-ui/core";

export default makeStyles({
  appBar: {
    boxShadow: "none",
  },
  navbarDisplayFlex: {
    display: `flex`,
    padding: 0,
    justifyContent: `space-between`,
  },
  navListDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  text: {
    fontWeight: 600,
    letterSpacing: 1,
  },
});
