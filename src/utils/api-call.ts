export const apiCall = async <ResponseData>(url: string, init?: RequestInit): Promise<ResponseData> => {
  try {
    const response = await fetch(url, init);
    const data: ResponseData = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error while fetch data: ${url}`);
  }
};
