import { CHAT } from "../reducerActions/actionType";

const initialState = {
  reply: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHAT.RESPONSE:
      return {
        ...state,
        reply: action.payload.data.reply,
      };
    default:
      return state;
  }
}
