import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  home: {
    position: "relative",
    height: (props: { height: number }) => props.height,
    minHeight: 500,
    width: "100%",
    background: `#161415 url("images/banff.jpg") no-repeat top center`,
    backgroundSize: "cover !important",
    "-webkit-background-size": "cover !important",
    textAlign: "center",
    overflow: "hidden",
  },
});
