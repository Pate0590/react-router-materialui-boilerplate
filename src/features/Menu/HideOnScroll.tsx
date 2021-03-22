import { Slide, useScrollTrigger } from "@material-ui/core";

const HideOnScroll = ({ children }: any) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
