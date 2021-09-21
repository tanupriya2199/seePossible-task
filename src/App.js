import { Switch, Route } from "react-router-dom";
import AddAddress from "./components/AddressBook/AddAddress";
import AddressBookList from "./components/AddressBook/AddressBookList";
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
        <Route exact path="/address-list" component={AddressBookList}></Route>
        <Route exact path="/add-address" component={AddAddress}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
