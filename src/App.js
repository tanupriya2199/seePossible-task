import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AddAddress from "./components/AddressBook/AddAddress";
import AddressBookList from "./components/AddressBook/AddressBookList";
import EditAddress from "./components/AddressBook/EditAddress";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/HomePage/Home";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
  const [networkStatus, setStatus] = useState(true);

  useEffect(() => {
    function changeStatus() {
      setStatus(navigator.onLine);
    }
    window.addEventListener("online", changeStatus);
    window.addEventListener("offline", changeStatus);
    return () => {
      window.removeEventListener("online", changeStatus);
      window.removeEventListener("offline", changeStatus);
    };
  }, []);

  return (
    <div>
      <Route render={() => <Header networkStatus={networkStatus} />} />
      <Switch>
        <Route exact path="/sign-up" component={SignUp}></Route>
        <Route exact path="/sign-in" component={SignIn}></Route>
        <Route exact path="/address-list" component={AddressBookList}></Route>
        <Route exact path="/update-address/:id" component={EditAddress}></Route>
        <Route exact path="/add-address" component={AddAddress}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
