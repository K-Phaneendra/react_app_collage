import { POST } from "./APIMethods"
const FlaskAPI = process.env.REACT_APP_FLASK_API
// const FlaskAPI = 'http://localhost:5000'

export const uploadFile = async (file) => {
  const url = `${FlaskAPI}/upload-file`
  const axiosConfig = {
    headers: {}
  }
  const APIResponse = await POST(
    url,
    file,
    axiosConfig
  )
  return APIResponse
}

export const convertAudioToText = async (filename) => {
  const url = `${FlaskAPI}/audio-to-text`
  const axiosConfig = {
    headers: {}
  }
  const APIResponse = await POST(
    url,
    {filename},
    axiosConfig
  )
  return APIResponse
}
