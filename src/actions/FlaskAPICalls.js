import { GET, POST } from "./APIMethods";
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
  // const url = `http://65.2.122.7/send-contact-email`;
  const url = `http://futurztech.in/futurestack/index.php?to_email=${body.to_email}&mail_subject=${body.mail_subject}&mail_body=${body.mail_body}`;
  const axiosConfig = {
    headers: {
      // 'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    },
  };
  // const APIResponse = await POST(url, body, axiosConfig);
  const APIResponse = await GET(url)
  return APIResponse;
};
