import React, { useState } from "react";
import "../../assets/styles/SpeechToText.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Input } from "antd";
import { Button } from "react-bootstrap";
import { FaMicrophoneSlash, FaStop } from "react-icons/fa";
import { GrPowerReset } from 'react-icons/gr'

const { TextArea } = Input;

function WebKitSpeechRecognition() {
  const [recordingStarted, setRecordingStarted] = useState(false);
  const commands = [];
  const { transcript, resetTranscript } = useSpeechRecognition({
    transcribing: true,
    clearTranscriptOnListen: true,
    commands,
  });

  // IF BROWSER DOES NOT SUPPORT SpeechRecognition
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="text-center">
        <h1>Speech to text</h1>
        <h3>
          Recording audio is not supported by your browser, please use <a href="https://www.google.com/intl/en_in/chrome/" target="_blank" rel="noreferrer" title="Download google chrome browser">Google
          Chrome browser</a> instead
        </h3>
      </div>
    );
  }

  const startListening = () => {
    setRecordingStarted(true);
    return SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopListening = () => {
    setRecordingStarted(false);
    return SpeechRecognition.stopListening;
  };

  const displayStartStopButtons = () => {
    if (recordingStarted) {
      return (
        <>
          <Button
            onClick={stopListening}
            title="stop"
            variant="outline-danger"
            className="circle-button"
          >
            <FaStop />
          </Button>
        </>
      );
    }
    return (
      <Button
        onClick={startListening}
        title="start"
        variant="outline-danger"
        className="circle-button"
      >
        <FaMicrophoneSlash />
      </Button>
    );
  };

  const displayRecordingAnimation = () => {
    if (recordingStarted) {
      return (
        <div id="bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="text-center">
        <h1>Speech to text</h1>
        <h3>
          Click on the mic icon and start speaking. The transcript of your audio
          will be displayed below
        </h3>
      </div>
      <div className="text-center">
        <div className="row voice-animation-container d-flex justify-content-center">
          {displayRecordingAnimation()}
        </div>
        {displayStartStopButtons()}&nbsp;
        <Button
          onClick={resetTranscript}
          title="reset"
          variant="secondary"
          className="circle-button"
        >
          <GrPowerReset />
        </Button>
      </div>

    <div className="mt-3">
      <TextArea
        value={transcript}
        placeholder="Your transcripted audio will display here"
        autoSize={{ minRows: 8, maxRows: 50 }}
      />
      </div>
    </div>
  );
}

export default WebKitSpeechRecognition;
