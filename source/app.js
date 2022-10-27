const path = require('path');
const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());
server.use(express.urlencoded({extended:true}));

const port = process.env.PORT || 2033;
server.listen(port, () => console.log('Abriendo el servidor http://localhost:'+port));


server.use('/api/musicando', require('./routes/apiMusicando.routes'));

server.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views/index.html')))

server.get('/', (req,res) => res.send('Bienvenido a musicando'));
