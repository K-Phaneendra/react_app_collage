import { LOADING, SPEECH_TO_TEXT } from "./actionType";

export const setLoading = () => ({ type: LOADING.SET_LOADING });
export const resetLoading = () => ({ type: LOADING.RESET_LOADING });

export const speechToText_UPLOAD_AND_CONVERT = (payload) => ({
  type: SPEECH_TO_TEXT.UPLOAD_AND_CONVERT,
  payload
})
