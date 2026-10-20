import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files={'/':['index.html','text/html'],'/app.js':['app.js','text/javascript'],'/style.css':['style.css','text/css'],'/budget.js':['budget.js','text/javascript']};
http.createServer(async(req,res)=>{const file=files[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);return res.end('Non trovato');}try{res.writeHead(200,{'Content-Type':file[1]+'; charset=utf-8'});res.end(await readFile(new URL(file[0],import.meta.url)));}catch{res.writeHead(500);res.end('Errore del server');}}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Bilancio familiare avviato sulla porta '+(process.env.PORT||3000)));
