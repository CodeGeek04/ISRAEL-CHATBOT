import React from 'react';
import * as tf from '@tensorflow/tfjs';
import * as toxicity from '@tensorflow-models/toxicity';

export default function SentimentAnalysis({ text }) {
  const [predictions, setPredictions] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const threshold = 0.9;
      const model = await toxicity.load(threshold);
      const sentences = [text];
      const preds = await model.classify(sentences);
      setPredictions(preds);
    };

    loadModel();
  }, [text]);

  return (
    <div>
      <h2>Sentiment Analysis</h2>
      {predictions && predictions.map((prediction, index) => (
        <p key={index}>{prediction.label}: {prediction.results[0].match ? 'True' : 'False'}</p>
      ))}
    </div>
  );
}