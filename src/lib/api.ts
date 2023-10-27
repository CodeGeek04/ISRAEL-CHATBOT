interface SendMessagePayload {
  text: string;
  parentMessageId?: string;
}

class APIClient {
  async sendMessage(host: string, payload: SendMessagePayload) {
    const abortController = new AbortController();

    try {
      const response = await fetch(`${host}/chatgpt/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: abortController.signal,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();
      return { data, abortController };

    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}

const API = new APIClient();

export default API;
