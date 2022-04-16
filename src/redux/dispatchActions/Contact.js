import { sendContactEmail } from "../../actions/FlaskAPICalls";
import { ToastMessage } from "../../components/ToastMessage";
import {
  setLoading,
  resetLoading
} from "../reducerActions";

// SEND A CONTACT EMAIL
export const SEND_CONTACT_EMAIL = (formData) => {
  return async (dispatch) => {
    try {
      // LOADING - START
      dispatch(setLoading());
      ToastMessage(
        "info",
        "Trying to send an email to "+formData.to_email,
        "A thank you email will be sent to you"
      );
      const response = await sendContactEmail(formData);
      // LOADING - END
      dispatch(resetLoading());
      if (response.data.status === "success") {
        ToastMessage(
          "success",
          response.data.message,
          "You have successfully sent an email through this contact form"
        );
      } else {
        ToastMessage(
          "error",
          response.data.message,
          "Unable to send an email through this contact form. Seems like there is a technical difficulty. The designated team will look into it. Please try again after few mins. Thank you"
        );
      }
    } catch (err) {
      // LOADING - END
      dispatch(resetLoading());
      ToastMessage("error", "Execution error", err.message);
    }
  }
};
