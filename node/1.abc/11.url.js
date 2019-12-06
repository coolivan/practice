const url = require('url');


let str = 'http://www.bing.com/root/a/b/1.txt?a=1&b=2';

console.log(url.parse(str));

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.bing.com',
//     port: null,
//     hostname: 'www.bing.com',
//     hash: null,
//     search: '?a=1&b=2',
//     query: 'a=1&b=2',
//     pathname: '/root/a/b/1.txt',
//     path: '/root/a/b/1.txt?a=1&b=2',
//     href: 'http://www.bing.com/root/a/b/1.txt?a=1&b=2' 
// }



