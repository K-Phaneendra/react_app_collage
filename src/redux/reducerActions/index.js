import {
  LOADING,
  AUDIO_TO_TEXT,
  PRINT,
  FACE_RECOGNITION,
  IMAGE_TO_SKETCH,
  CHAT,
} from "./actionType";

export const setLoading = () => ({ type: LOADING.SET_LOADING });
export const resetLoading = () => ({ type: LOADING.RESET_LOADING });

// connects to audioToText reducer through type
export const audioToText_UPLOAD_AND_CONVERT = (payload) => ({
  type: AUDIO_TO_TEXT.UPLOAD_AND_CONVERT,
  payload,
});

// connects to facerecognition reducer through type
export const faceRecognition_PREDICT_GENDER = (payload) => ({
  type: FACE_RECOGNITION.PREDICT_GENDER,
  payload,
});

// once file got uploaded on the server, then the file name is stored in the reducer
export const imageToSketch_UPLOADED_FILENAME = (payload) => ({
  type: IMAGE_TO_SKETCH.UPLOADED_FILENAME,
  payload,
});
// once file we receive the converted image, assign it to the reducer
export const imageToSketch_CONVERTED_IMAGE = (payload) => ({
  type: IMAGE_TO_SKETCH.CONVERTED_IMAGE,
  payload,
});

export const set_printable_content = (payload) => ({
  type: PRINT.CONTENT,
  payload,
});

export const set_llm_response = (payload) => ({
  type: CHAT.RESPONSE,
  payload
})