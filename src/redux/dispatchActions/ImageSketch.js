import {
  uploadFile,
  deleteFile,
  convertImageToSketch,
  deleteFilesPresentInUploadFolder,
} from "../../actions/FlaskAPICalls";
import { ToastMessage } from "../../components/ToastMessage";
import {
  setLoading,
  resetLoading,
  imageToSketch_CONVERTED_IMAGE,
  imageToSketch_UPLOADED_FILENAME,
} from "../reducerActions";

// UPLOAD IMAGE
export const UPLOAD_IMAGE = (file) => {
  return async (dispatch) => {
    try {
      // upload image file to api
      dispatch(setLoading());
      ToastMessage(
        "info",
        "Uploading your file"
      );
      const uploadFileResponse = await uploadFile(file);
      dispatch(resetLoading());
      if (uploadFileResponse.data.status === "failed") {
        ToastMessage(
          "error",
          "Failed to upload",
          uploadFileResponse.data.message
        );
        dispatch(
          imageToSketch_UPLOADED_FILENAME({
            filename: "",
            error: true,
            convertedImage: null
          })
        );
      }
      if (uploadFileResponse.data.status === "success") {
        ToastMessage(
          "success",
          "Uploaded successfully",
          "File uploaded successfully"
        );
        dispatch(
          imageToSketch_UPLOADED_FILENAME({
            filename: uploadFileResponse.data.filename,
            error: false,
            convertedImage: null
          })
        );
      }
    } catch (err) {
      dispatch(resetLoading());
      ToastMessage("error", "Execution error", err.message);
      dispatch(
        imageToSketch_UPLOADED_FILENAME({
          filename: "",
          error: true,
          convertedImage: null
        })
      );
    }
  };
};

// delete an image from the server
export const DELETE_IMAGE = (body) => {
  return async (dispatch) => {
    try {
      const { filename } = body;
      // delete the file from the server
      dispatch(setLoading());
      const Response = await deleteFile(filename);
      dispatch(resetLoading());
      if (Response.data.status === "failed") {
        ToastMessage("error", "Failed to delete", Response.data.message);
      }
      if (Response.data.status === "success") {
        ToastMessage("success", "File deleted successfully");
        // empty the file name from the redux store
        dispatch(imageToSketch_UPLOADED_FILENAME(""));
      }
    } catch (err) {
      dispatch(resetLoading());
      ToastMessage("error", "Execution error", err.message);
    }
  };
};

// Empty the folder
export const DELETE_FILES_PRESENT_IN_UPLOAD_FOLDER = () => {
  return async (dispatch) => {
    try {
      // delete the file from the server
      dispatch(setLoading());
      const Response = await deleteFilesPresentInUploadFolder();
      dispatch(resetLoading());
      if (Response.data.status === "failed") {
        ToastMessage("error", "Failed to delete", Response.data.message);
      }
      if (Response.data.status === "success") {
        // ToastMessage("success", "File deleted successfully");
        // empty the file name from the redux store
        dispatch(imageToSketch_UPLOADED_FILENAME(""));
      }
    } catch (err) {
      dispatch(resetLoading());
      ToastMessage("error", "Execution error", err.message);
    }
  };
};

export const UPLOAD_IMAGE_TO_SKETCH = (body) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      // ToastMessage(
      //   "info",
      //   "Conversion in progress",
      //   "Applying filter on the image",
      // );
      // PASS THE FILE NAME OF THE FACE PREDICTION API, TO GET THE PREDICTED IMAGE
      const Response = await convertImageToSketch(body);
      dispatch(resetLoading());
      if (Response.data.status === "failed") {
        ToastMessage("error", "Failed to convert", Response.data.message);
      }
      // if success we receive predicted image
      if (Response.data.status === "success") {
        dispatch(imageToSketch_CONVERTED_IMAGE(Response.data.image));
      }
    } catch (err) {
      dispatch(resetLoading());
      ToastMessage("error", "Execution error", err.message);
    }
  };
};
