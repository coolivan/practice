const querystring = require('querystring');

//类似JSON.parse


console.log(querystring.parse('a=1&b=2&c=3'));

console.log(querystring.stringify({a:1,b:2,c:3}));


// { a: '1', b: '2', c: '3' }
// a=1&b=2&c=3


