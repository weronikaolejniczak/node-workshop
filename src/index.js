require('dotenv').config();

const express = require('express');
const constants = require('./config/constants');
const middlewareConfig = require('./middleware');

const app = express();
middlewareConfig(app);

// GET /
app.get('/', (req, res) => {
    res.send('Hello, world!'); // default: 200, text/html
});

// curl -i --data '{"day":"monday2"}' -H 'Content-Type: application/json' -XPOST http://localhost:3001/
app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({ ok: true });
});

app.get('/ping', (req, res) => {
    //res.json({ status: 'ok' });
    res.status(201).json({ status: 'ok' });
});

const PORT = constants.PORT;
app.listen(PORT, (err) => {
    if (err) {
        console.log('Error!');
        throw err;
    } else {
        console.log(`Server is running at http://localhost:${PORT}/`);
    }
});
