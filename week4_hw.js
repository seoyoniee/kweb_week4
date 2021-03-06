const express = require('express');

const app = express();

const port = 3000;



function printstr(req, res) {

    console.log(`${req.method} ${req.url}
    ${Object.keys(req.headers).map(k => `${k}: ${req.headers[k]}`).join('\n')}
    `);
    

  req.on('data', d => console.log(d.toString()));

};



app.get('/', (req, res) => { 
    printstr(req); 
    res.write('This is main page.'); 
    res.end(); });

app.get('/board', (req, res) => { 
    printstr(req); 
    res.write('This is board page.'); 
    res.end(); });



app.post('/board', (req, res) => { 
    printstr(req); 
    res.write('This is board write page.'); 
    res.end(); });



app.use((req, res, next) => { 
    printstr(req); 
    res.status(404).send('404 Not found'); });



app.listen(port, () => console.log(`server online`));