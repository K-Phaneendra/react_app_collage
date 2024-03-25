import { POST } from "./APIMethods";
import appConfig from "../appConfig";

const { LLMFlaskAPI } = appConfig();

export const chatWithLLM = async (body) => {
  const url = `${LLMFlaskAPI}/chat`;
  const axiosConfig = {
    headers: {},
  };
  const APIResponse = await POST(url, body, axiosConfig);
  return APIResponse;
};
