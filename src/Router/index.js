import React from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import Home from "../screens/Home/Home";
import SpeechToText from "../screens/SpeechToText";

export default function Router() {
  const location = useLocation();

  const pages = [
    {
      pageLink: "/",
      view: Home,
      displayName: "Home",
    },
    {
      pageLink: "/speech-to-text",
      view: SpeechToText,
      displayName: "speech-to-text"
    }
  ];

  return (
    <Switch location={location}>
      {pages.map((page, index) => {
        return (
          <Route
            exact
            path={page.pageLink}
            render={({ match }) => <page.view />}
            key={index}
          />
        );
      })}
      <Redirect to="/" />
    </Switch>
  );
};
