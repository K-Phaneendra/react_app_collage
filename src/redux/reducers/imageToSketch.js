import { IMAGE_TO_SKETCH } from "../reducerActions/actionType";

const initialState = {
  uploadedFilename: "",
  errorOnUpload: false,
  convertedImage: null // usually a base64 image is assigned
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case IMAGE_TO_SKETCH.UPLOADED_FILENAME:
      return {
        ...state,
        uploadedFilename: action.payload.filename,
        errorOnUpload: action.payload.error,
        convertedImage: action.payload.convertedImage
      };
    case IMAGE_TO_SKETCH.CONVERTED_IMAGE:
      return {
        ...state,
        convertedImage: action.payload
      };
    default:
      return state;
  }
}
