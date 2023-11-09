const http = require('http') // this is a module
const fs = require('fs'); //file system
const _= require('lodash');


const server = http.createServer((req, res)=>{
 
 //lodash
 const randomNumber = _.random(5, 45);
 console.log(randomNumber);

 const slap = _once(()=>{
    console.log("Holy!");
 })

 slap();
 slap(); //this second slap function call won't run

//set header content type
res.setHeader('content-type', 'text/html');

//routing
let path = './views/';
switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode= 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode= 200;
        break;
    case '/about-me':
        res.statusCode= 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
    default:
        path += '404.html';
        res.statusCode= 400;
        break;
}


//send an html file to the client(browser)
fs.readFile(path,(err, data)=>{
    if(err){
        console.log(err);
        res.end();
    }else{
        //res.write(data); //when passing a single data, we can pass it in the res.end
        res.end(data);
    }
})
// res.write('<head><link rel="stylesheet" href="#"></head>');
// res.write('<p>Hey there!<p>')
// res.write('<h1>Ahlen Wesahlen!</h1>')

// res.end();
});


server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000')


})