import { AUDIO_TO_TEXT } from "../actions/actionType"

const initialState = {
  textFromAudio: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUDIO_TO_TEXT.UPLOAD_AND_CONVERT:
     return {
      ...state,
      textFromAudio: action.payload
     }
   default:
    return state
  }
 }
 