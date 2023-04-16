const quotes = require('../quotes.json');

exports.handler = async () => {
  // Select a random quote from the collection
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Return the quote as a JSON object
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quote: randomQuote.quote,
      author: randomQuote.author,
    }),
  };
};
