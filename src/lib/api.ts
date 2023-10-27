interface SendMessagePayload {
  text: string;
  parentMessageId?: string;
}

class APIClient {
  sendMessage(host: string, payload: SendMessagePayload) {
    const abortController = new AbortController();

    console.log("Host: ", host);
    // const response = fetch(`${host}/api/chatbot`, {
    const response = fetch(`${host}/chatbot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: abortController.signal,
    });
    console.log("Response: ", response);

    return { response, abortController };
  }
}

const API = new APIClient();

export default API;
