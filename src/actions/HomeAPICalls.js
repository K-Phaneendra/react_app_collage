import { GET } from "./APIMethods";
import appConfig from "../appConfig";

const { FlaskAPI } = appConfig();

export const pageViews = async () => {
    const url = `${FlaskAPI}/page-views`;
    const APIResponse = await GET(url);
    return APIResponse;
  };
  