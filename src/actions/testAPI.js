import { GET } from "./APIMethods"

export const getSampleData = async () => {
  const url = 'http://localhost:1024/answers'
  const APIResponse = await GET(url)
  console.log('APIResponse', APIResponse);
}
