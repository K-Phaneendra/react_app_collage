import { POST } from "./APIMethods";
import appConfig from "../appConfig";

const { FlaskAPI } = appConfig();

export const uploadFile = async (file) => {
  const url = `${FlaskAPI}/upload-file`;
  const axiosConfig = {
    headers: {},
  };
  const APIResponse = await POST(url, file, axiosConfig);
  return APIResponse;
};

export const convertAudioToText = async (filename) => {
  const url = `${FlaskAPI}/audio-to-text`;
  const axiosConfig = {
    headers: {},
  };
  const APIResponse = await POST(url, { filename }, axiosConfig);
  return APIResponse;
};
