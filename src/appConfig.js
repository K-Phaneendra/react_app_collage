export default function appConfig() {
  let FlaskAPI = process.env.REACT_APP_FLASK_API;
  let LLMFlaskAPI = process.env.REACT_APP_LLM_FLASK_API;


  if (process.env.NODE_ENV === "development") {
    FlaskAPI = "http://localhost:5000";
    LLMFlaskAPI = "http://localhost:4000";
  }
  return {
    FlaskAPI,
    LLMFlaskAPI,
  };
}
