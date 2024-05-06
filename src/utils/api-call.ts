const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const createApiCaller = (delayMs: number) => {
  let called = false;

  return async <ResponseData>(url: string, init?: RequestInit, skipDelay = false): Promise<ResponseData> => {
    while (called && !skipDelay) {
      await delay(100);
    }

    try {
      called = true;
      const response = await fetch(url, init);
      const data: ResponseData = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error while fetch data: ${url}`);
    } finally {
      delay(delayMs).then(() => (called = false));
    }
  };
};

export const apiCall = createApiCaller(1500);
