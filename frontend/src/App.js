import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/components/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import History from "./components/History";
import CityCards from "./components/CityCards";
import Footer from "./components/Footer";
import AdminLogin from "./components/Admin/AdminLogin";
import Admin from "./components/Admin/Admin";
import UttarPradesh from "./components/States/UttarPradesh"
import Haryana from "./components/States/Haryana"
import Uttarakhand from "./components/States/Uttarakhand"
import Punjab from "./components/States/Punjab"
import MadhyaPradesh from "./components/States/MadhyaPradesh"
import Bihar from "./components/States/Bihar"
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <CityCards exact path="/" component={CityCards} />
        <Route exact path="/AdminLogin" component={AdminLogin} />
        <Route exact path="/History" component={History} />
        {/* State Route */}
        <Route exact path="/UttarPradesh" component={UttarPradesh} />
        <Route exact path="/Haryana" component={Haryana} />
        <Route exact path="/Uttarakhand" component={Uttarakhand} />
        <Route exact path="/Punjab" component={Punjab} />
        <Route exact path="/MadhyaPradesh" component={MadhyaPradesh} />
        <Route exact path="/Bihar" component={Bihar} />
        {/* End State Route */}
        <Route exact path="/Admin" component={Admin} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
