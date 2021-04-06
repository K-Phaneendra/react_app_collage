import React from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import Home from "../screens/Home/Home";
import AudioToText from "../screens/AudioToText";
import Dictation from "../screens/Dictation/WebKitSpeechRecognition";
import PrintableScreen from "../screens/PrintableScreen";
import paths from './paths.json';
import FaceRecognition from "../screens/FaceRecognition";

export default function Router() {
  const location = useLocation();

  const pages = [
    {
      pageLink: paths.home,
      view: Home,
    },
    {
      pageLink: paths.audioToText,
      view: AudioToText,
    },
    {
      pageLink: paths.dictation,
      view: Dictation,
    },
    {
      pageLink: paths.faceRecognition,
      view: FaceRecognition,
    },
    {
      pageLink: paths.printScreen,
      view: PrintableScreen,
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
