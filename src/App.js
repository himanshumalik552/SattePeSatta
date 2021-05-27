import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/components/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import CityUp from "../src/components/City/CityUp";
import History from "./components/History";
import CityCards from "./components/CityCards";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <CityCards exact path="/" component={CityCards} />
        <Route exact path="/CityUP" component={CityUp} />
        <Route exact path="/History" component={History} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
