import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../../assets/styles/SpeechToText.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Input } from "antd";
import { Button } from "react-bootstrap";
import { AiFillPrinter } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { set_printable_content } from "../../redux/actions";
import { withRouter } from "react-router-dom";

const { TextArea } = Input;

function WebKitSpeechRecognition(props) {
  const [recordingStarted, setRecordingStarted] = useState(false);
  const [micPermissionGranted, setMicPermissionGranted] = useState(false);
  const [micPromptMsg, setMicPromptMsg] = useState("");

  const commands = [];
  const { transcript, resetTranscript } = useSpeechRecognition({
    transcribing: true,
    clearTranscriptOnListen: true,
    commands,
  });

  const checkForAudioPermission = () => {
    navigator.permissions.query({ name: "microphone" }).then(function (result) {
      if (result.state === "granted") {
        // PERMISSION GRANTED, SHOW BUTTONS TO OPERATE MIC
        setMicPermissionGranted(true);
        setMicPromptMsg("");
      } else if (result.state === "prompt") {
        const msg = "Please allow microphone to use this application.";
        setMicPromptMsg(msg);
      } else if (result.state === "denied") {
        // Permission was denied
        const msg = "Please allow microphone to use this application.";
        setMicPromptMsg(msg);
      }
    });
  };

  useEffect(() => {
    checkForAudioPermission();
  });

  // IF BROWSER DOES NOT SUPPORT SpeechRecognition
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="text-center">
        <h1>Speech to text</h1>
        <h3>
          Recording audio is not supported by your browser, please use{" "}
          <a
            href="https://www.google.com/intl/en_in/chrome/"
            target="_blank"
            rel="noreferrer"
            title="Download google chrome browser"
          >
            Google Chrome browser
          </a>{" "}
          instead
        </h3>
      </div>
    );
  }

  const requestMicPermission = () => {
    navigator.getUserMedia(
      // constraints
      {
        audio: true,
      },

      // successCallback
      function (localMediaStream) {
        if (localMediaStream.active) {
          setMicPermissionGranted(true);
        }
      },

      // errorCallback
      function (err) {
        if (err.message === "Permission denied") {
          // Explain why you need permission and how to update the permission setting
        }
      }
    );
  };

  const startListening = () => {
    setRecordingStarted(true);
    return SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopListening = () => {
    setRecordingStarted(false);
    return SpeechRecognition.stopListening();
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
            Stop
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
        Speak
      </Button>
    );
  };

  // currently not using animation while recording
  // const displayRecordingAnimation = () => {
  //   if (recordingStarted) {
  //     return (
  //       <div id="bars">
  //         <div className="bar"></div>
  //         <div className="bar"></div>
  //         <div className="bar"></div>
  //         <div className="bar"></div>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  const printText = () => {
    const printableText = transcript;
    props.history.push('/print-screen')
    props.SET_PRINTABLE_CONTENT(printableText);
  };

  return (
    <div>
      <div className="text-center">
        <h1>Dictate</h1>
        {micPermissionGranted && (
          <h3>
            Click on the "Speak" button and start speaking. The transcript of
            your audio will display below
          </h3>
        )}
      </div>
      <div className="text-center">
        {!micPermissionGranted && (
          <div>
            {micPromptMsg}{" "}
            <Button onClick={requestMicPermission}>
              Allow&nbsp;
              <FaMicrophone />
            </Button>
          </div>
        )}
        {micPermissionGranted && (
          <>
            <div className="row voice-animation-container d-flex justify-content-center">
              {/* {displayRecordingAnimation()} */}
              {recordingStarted && <div>Listening...</div>}
            </div>
            {recordingStarted && transcript === "" && (
              <div className="row d-flex justify-content-center">
                if you are speaking but unable to see the text below, then
                please run this application on&nbsp;
                <a
                  href="https://www.google.com/intl/en_in/chrome/"
                  target="_blank"
                  rel="noreferrer"
                  title="Download google chrome browser"
                >
                  Google Chrome browser
                </a>
              </div>
            )}
            <div className="mt-3">
              {displayStartStopButtons()}&nbsp;
              <Button
                onClick={resetTranscript}
                title="reset"
                variant="secondary"
                className="circle-button"
              >
                Reset
              </Button>
            </div>
          </>
        )}
      </div>

      <div className="mt-3">
        <div className="row justify-content-end">
          <Button onClick={printText} variant="light" title="print notes">
            <AiFillPrinter />
          </Button>
        </div>
        <TextArea
          value={transcript}
          placeholder="Your audio note will display here"
          autoSize={{ minRows: 8, maxRows: 50 }}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  SET_PRINTABLE_CONTENT: (body) => dispatch(set_printable_content(body)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WebKitSpeechRecognition));
