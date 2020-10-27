import { LOADING, AUDIO_TO_TEXT } from "./actionType";

export const setLoading = () => ({ type: LOADING.SET_LOADING });
export const resetLoading = () => ({ type: LOADING.RESET_LOADING });

export const audioToText_UPLOAD_AND_CONVERT = (payload) => ({
  type: AUDIO_TO_TEXT.UPLOAD_AND_CONVERT,
  payload
})
