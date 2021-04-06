import { FACE_RECOGNITION } from "../reducerActions/actionType";

const initialState = {
  predictedImage: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FACE_RECOGNITION.PREDICT_GENDER:
      return {
        ...state,
        predictedImage: action.payload,
      };
    default:
      return state;
  }
}
