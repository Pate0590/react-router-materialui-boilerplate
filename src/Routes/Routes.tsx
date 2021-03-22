import { Switch, Route } from "react-router-dom";
import Home from "../features/Home";
import About from "../features/About";
import Resume from "../features/Resume";
import Contacts from "../features/Contacts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/about" exact render={() => <About />} />
      <Route path="/resume" exact render={() => <Resume />} />
      <Route path="/contact" exact render={() => <Contacts />} />
      <Route render={() => <>Not Found </>} />
    </Switch>
  );
};

export default Routes;
