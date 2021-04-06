import {
  uploadFile,
  predictGenderByImageName,
} from "../../actions/FlaskAPICalls";
import { ToastMessage } from "../../components/ToastMessage";
import { setLoading, resetLoading, faceRecognition_PREDICT_GENDER } from "../reducerActions";

// UPLOAD FACE IMAGE
export const UPLOAD_FACE_IMAGE = (file) => {
  return async (dispatch) => {
    try {
      // upload image file to api
      dispatch(setLoading());
      const uploadFileResponse = await uploadFile(file);
      dispatch(resetLoading());
      if (uploadFileResponse.data.status === "failed") {
        ToastMessage(
          "error",
          "Failed to upload",
          uploadFileResponse.data.message
        );
      }
      if (uploadFileResponse.data.status === "success") {
        ToastMessage(
          "success",
          "Uploaded successfully",
          "File uploaded successfully, image prediction has begun"
        );
        const uploadedFileName = uploadFileResponse.data.filename;
        dispatch(setLoading());
        ToastMessage(
          "info",
          "Prediction in progress",
          "Image was uploaded successfully, please wait while the system predicts the human faces. You will see the predicted image on this screen only"
        );
        // PASS THE FILE NAME OF THE FACE PREDICTION API, TO GET THE PREDICTED IMAGE
        const predictionResponse = await predictGenderByImageName(
          uploadedFileName
        );
        dispatch(resetLoading())
        if (predictionResponse.data.status === "failed") {
          ToastMessage(
            "error",
            "Failed to convert",
            predictionResponse.data.message
          );
        }
        // if success we receive predicted image
        if (predictionResponse.data.status === "success") {
          dispatch(faceRecognition_PREDICT_GENDER(predictionResponse.data.image));
        }
      }
    } catch (err) {
      dispatch(resetLoading());
      ToastMessage("error", "Execution error", err.message);
    }
  };
};
