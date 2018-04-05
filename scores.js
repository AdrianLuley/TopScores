const jsonBody = require("body/json");
var scores = [{name: "Edwin", score: 50}, {name: "David", score: 39}];



const textBody = require("body");
var resources = {"/IP": "Internet Protocol", "/TCP": "Transmission Control Protocol"};
const http = require('http');

const hostname = null;
const port = 3000;

function compareNumbers(a, b) {
  return b.score - a.score;
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/javascript');
 
  var body;
  if(req.method === "GET") {
    if(req.url !== "/scores") {
      res.statusCode = 404;
    } else {
      res.statusCode = 200;
      
      
      res.end(JSON.stringify(scores))
    }
  }else if (req.method === "POST") {
    res.statusCode = 201;
    jsonBody(req, res, function (err, body)  {
      scores.push(body);
      scores.sort(compareNumbers); //pass the compair function //
      scores.splice(3,3);
     
     })
   }
   
  res.end(body);
  console.log(req.url);
  console.log(req.headers);
  console.log(req.method);
});

server.listen(port)
//listen(port) same as this //
// , hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


//array methods to limit use splice or (slice) //