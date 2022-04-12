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

// delete file
export const deleteFile = async (filename) => {
  const url = `${FlaskAPI}/delete-file`;
  const axiosConfig = {
    headers: {},
  };
  const APIResponse = await POST(url, { filename }, axiosConfig);
  return APIResponse;
};

// delete files present in upload folder
export const deleteFilesPresentInUploadFolder = async () => {
  const url = `${FlaskAPI}/delete-files-in-upload-folder`;
  const axiosConfig = {
    headers: {},
  };
  const APIResponse = await POST(url, { deleteFiles: true }, axiosConfig);
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

export const predictGenderByImageName = async (filename) => {
  const url = `${FlaskAPI}/predict-gender-by-image-name`;
  const axiosConfig = {
    headers: {},
  };
  const APIResponse = await POST(url, { filename }, axiosConfig);
  return APIResponse;
};

export const convertImageToSketch = async (body) => {
  const url = `${FlaskAPI}/convert-image-to-sketch`;
  const axiosConfig = {
    headers: {},
  };
  const APIResponse = await POST(url, body, axiosConfig);
  return APIResponse;
};

export const sendContactEmail = async (body) => {
  const url = `${FlaskAPI}/send-contact-email`;
  const axiosConfig = {
    headers: {},
  };
  const APIResponse = await POST(url, { formDetails: body }, axiosConfig);
  return APIResponse;
};
