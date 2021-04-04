import React from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import Home from "../screens/Home/Home";
import AudioToText from "../screens/AudioToText";
import Dictation from "../screens/Dictation/WebKitSpeechRecognition";
import PrintableScreen from "../screens/PrintableScreen";
import Dashboard from "../screens/Dashboard";

export default function Router() {
  const location = useLocation();

  const pages = [
    {
      pageLink: "/",
      view: Home,
      displayName: "Home",
    },
    {
      pageLink: "/audio-to-text",
      view: AudioToText,
      displayName: "audio-to-text",
    },
    {
      pageLink: "/dictation",
      view: Dictation,
      displayName: "dictation",
    },
    {
      pageLink: "/print-screen",
      view: PrintableScreen,
      displayName: "Print screen",
    },
    {
      pageLink: "/dashboard",
      view: Dashboard,
      displayName: "Dashboard",
    },
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
}
