import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import BreweriesPage from './components/BreweriesPage';
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import BeersPage from "./components/BeersPage";
import CheckinsPage from "./components/CheckinsPage";
import AddCheckinForm from "./components/AddCheckinForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/breweries">
            <BreweriesPage />
          </Route>
          <Route path="/beers">
            <BeersPage />
          </Route>
          <Route path="/home">
            <CheckinsPage />
          </Route>
          <Route path="/checkin">
            <AddCheckinForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
