import { Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
  );
}

export default App;
