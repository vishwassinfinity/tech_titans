const positiveWords = ['happy', 'joy', 'love', 'great', 'good', 'awesome', 'fantastic', 'excited'];
const negativeWords = ['sad', 'bad', 'terrible', 'awful', 'angry', 'tired', 'anxious', 'stress', 'stressed'];

function scoreText(text) {
  const words = text.toLowerCase().split(/\W+/);
  let score = 0;
  words.forEach((w) => {
    if (positiveWords.includes(w)) score += 1;
    if (negativeWords.includes(w)) score -= 1;
  });
  // Normalize score to -1..1
  if (score > 5) score = 5;
  if (score < -5) score = -5;
  return score / 5;
}

export default function analyzeSentiment(text) {
  const score = scoreText(text);
  let label = 'neutral';
  if (score > 0.2) label = 'positive';
  else if (score < -0.2) label = 'negative';
  return { score, label };
} 