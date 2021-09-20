import { Switch, Route } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/HomePage/Home";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/sign-up" component={SignUp}></Route>
        <Route exact path="/sign-in" component={SignIn}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
