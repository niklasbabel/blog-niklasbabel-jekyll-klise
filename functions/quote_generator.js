const quotes = [
  // Add your quotes here
  { quote: "Quote 1", author: "Author 1" },
  { quote: "Quote 2", author: "Author 2" },
  { quote: "Quote 3", author: "Author 3" },
];

exports.handler = async (event, context) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return {
    statusCode: 200,
    body: JSON.stringify(randomQuote),
  };
};
