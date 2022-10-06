const api_endpoint = 'http://dog-api.kiduff.com/api/facts?number=5'

const response = await fetch(api_endpoint);

const data = await response.json();

console.log(data);

console.log(data.facts);