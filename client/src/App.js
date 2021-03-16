import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ExistingEntry from "./components/ExistingEntry";
import NewEntry from "./components/NewEntry";
import Redirecting from "./components/Redirecting";

import Footer from "./components/Footer";
import { Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
       
        <Route exact path={"/"} render={() => <Home/>} />
        <Route path={"/ExistingEntry"} render={() =><ExistingEntry/>} />
        <Route path={"/NewEntry"} render={() =><NewEntry/>} />
        <Route path={"/Redirecting"} render={() =><Redirecting/>} />
       
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
