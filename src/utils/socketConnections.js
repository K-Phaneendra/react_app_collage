import io from "socket.io-client";
import appConfig from "../appConfig";

// sending a connect request to the server.
const socket = io.connect(appConfig().FlaskAPI, {
  reconnection: true,
});

// capture voice recording and send it to socket
export const send_recorded_audio_to_socket = async (body) => {
  socket.emit("capture-voice-recording", body);
};

// receive data from socket
export const receive_capture_voice_response_from_socket = async () => {
  const socketResponse = await new Promise((resolve) => {
    socket.on("response-for-capture-voice-recording", (data) => {
      resolve(data);
    });
  });
  return socketResponse;
};

export const closeSocketConnection = () => {
  socket.close();
};
