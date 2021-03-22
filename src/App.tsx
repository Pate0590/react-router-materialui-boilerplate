import { BrowserRouter as Router, Link } from "react-router-dom";
import Menu from "./features/Menu";
import Routes from "./Routes/Routes";

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes />
    </Router>
  );
};

export default App;
