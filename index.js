const express = require('express');
const app = express();
const cors = require('cors')
const http = require('http').createServer(app);;
const bodyParser = require('body-parser')
const io = require('socket.io')(http);

app.use(bodyParser());
app.use(express.static('public'))
const corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.options('/', cors())
app.post('/', cors(corsOptions), (req, res) => {
    console.log(req.body.value);
    res.sendStatus(200);
});

io.set('origins', 'localhost:*');
io.on('connection', (socket) => {
    console.log('a user connected');
});
http.listen(1337, () => console.log('SCC Listening on Port 1337'));