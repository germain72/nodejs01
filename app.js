const express = require('express');
const app = express();

/**
 * Téléchargement client
 */

//Disable x-powered-by header
app.disable('x-powered-by')

//middlewares : ACCES DE SECURITE
app.use(express.static('alixa01'));
app.use(express.static('alixa02'));
/**
* Mette en place la sécurité
*/
//routes
app.get('/A01', (req,res)=>{
    res.sendFile(__dirname + '/alixa01/index.html');
});
app.get('/A02', (req,res)=>{
    res.sendFile(__dirname + '/alixa02/index.html');
});

//Listen on port 8090
server = app.listen( process.env.PORT || 8090);

