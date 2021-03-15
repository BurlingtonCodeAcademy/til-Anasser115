import React from "react";
import SearchBar from "./SearchBar"
import AllEntries from "./AllEntries"
import SearchResult from "./SearchResult"
import FilterResult from "./FilterResult"
import { Switch, Route } from "react-router";

export default function ExistingEntry() {

  return (
    <div id="exist-body">
     
        <SearchBar />
        <Switch>
        <Route exact path={"/ExistingEntry"} render={() =><AllEntries/>} />
        <Route path={"/ExistingEntry/search/:title"} render={() =><SearchResult/>} />
        <Route path={"/ExistingEntry/filter/:category"} render={() =><FilterResult/>} />

        </Switch>
      
      
    </div>
  );
}
