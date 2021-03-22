import useStyles from "./styles";

const Home = () => {
  const classes = useStyles({ height: window.innerHeight });

  return <div className={classes.home}></div>;
};

export default Home;
