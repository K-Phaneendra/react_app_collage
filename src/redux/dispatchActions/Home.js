import { pageViews } from "../../actions/HomeAPICalls";
import { ToastMessage } from "../../components/ToastMessage";
import { setLoading, resetLoading } from "../reducerActions";

export const PAGE_VIEWS = () => {
  return async (dispatch) => {
    try {
      // upload image file to api
      dispatch(setLoading());
      // API to add a count to page views
      pageViews();
      dispatch(resetLoading());
    } catch (err) {
      dispatch(resetLoading());
      ToastMessage("error", "Execution error", err.message);
    }
  };
};
