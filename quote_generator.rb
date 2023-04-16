require 'sinatra'
require 'json'

# Load quotes from the JSON file
quotes = JSON.parse(File.read('quotes.json'))

get '/random_quote' do
  content_type :json

  # Select a random quote from the collection
  random_quote = quotes.sample

  # Return the quote as a JSON object
  { quote: random_quote['quote'], author: random_quote['author'] }.to_json
end
