import React, { useState } from "react";
import { ReactMic } from "react-mic";
import {
  closeSocketConnection,
  receive_capture_voice_response_from_socket,
  send_recorded_audio_to_socket,
} from "../../utils/socketConnections";
import { Input } from "antd";

// Decode flac
// let decode = require('audio-decode')
// let flac = require('audio-lena/flac')
// let flac = require('flac.js')

const { TextArea } = Input;

function SpeechToText() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     record: false,
  //   };
  // }
  const [record, setRecord] = useState(false);
  const [convertedText, setConvertedText] = useState("");

  const getResponseFromSocket = async () => {
    const socketResponse = await receive_capture_voice_response_from_socket();
    // const socketResponse = await new Promise((resolve) => {
    //   socket.on("my response", (msg) => {
    //     resolve(msg);
    //   });
    // });
    console.log("socketResponse", socketResponse);
    setConvertedText((prev) => `${prev} ${socketResponse}`);
  };
  // componentDidMount() {
  //   // this.getResponseFromSocket()
  // }

  // componentWillUnmount() {
  //   // closeSocketConnection()
  //   console.log("component unmounted");
  // }

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = async (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
    const recorderdAudioBuffer = await recordedBlob.arrayBuffer();
    const stream = await recordedBlob.stream()
    const streamReader = await stream.getReader()
    console.log('stream', streamReader)
    const int16Array = new Int16Array(
      recorderdAudioBuffer,
      0,
      Math.floor(recorderdAudioBuffer.byteLength / 2)
    );
    // decode(flac, recorderdAudioBuffer, (err, audioBuffer) => {
    //   console.log('errr', err)
    //   console.log('auddd', audioBuffer)
    // });

    // var str = String.fromCharCode.apply(null, int16Array)
    // console.log('str', str)

    console.log('audio buffer in int16Array', int16Array)
    send_recorded_audio_to_socket({ data: recordedBlob });
    getResponseFromSocket();
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
  };

  return (
    <>
      <div>
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}
          onData={onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <button onClick={startRecording} type="button">
          Start
        </button>
        <button onClick={stopRecording} type="button">
          Stop
        </button>
      </div>

      <TextArea
        value={convertedText}
        placeholder="Converted text will display here"
        autoSize={{ minRows: 8, maxRows: 50 }}
      />
    </>
  );
}

export default SpeechToText;
