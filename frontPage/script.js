const motivationalQuotes = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. - Chantal Sutherland",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett"
];

function fetchUselessFacts() {
  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  const quoteParts = randomQuote.split('-');

  if (quoteParts.length !== 2) {
    console.error('Invalid quote format:', randomQuote);
    return;
  }

  const quoteBeginning = quoteParts[0].trim();
  const quoteEnd = quoteParts[1].trim();
  
  const factContainer = document.getElementById('factContainer');
  factContainer.innerHTML = `${quoteBeginning} - ${quoteEnd}`;
}

window.addEventListener('load', fetchUselessFacts);
