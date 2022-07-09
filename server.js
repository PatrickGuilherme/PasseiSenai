const express = require('express');
const appname = "passeisenai";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/' + appname));
app.get('/*',(req,res) => {
    res.send(__dirname + '/dist/' + appname + '/index.html')
});

app.listen(PORT, () =>{
    console.log('Servidor iniciado na porta ' + PORT);
});