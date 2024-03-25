import { chatWithLLM } from "../../actions/ChatAPICalls";
import { ToastMessage } from "../../components/ToastMessage";
import { setLoading, resetLoading, set_llm_response } from "../reducerActions";

export const CHAT_WITH_LLM = (body) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await chatWithLLM(body);
      dispatch(resetLoading());
      dispatch(set_llm_response(response))
    } catch (err) {
      dispatch(resetLoading());
      ToastMessage("error", "Execution error", err.message);
    }
  };
};
