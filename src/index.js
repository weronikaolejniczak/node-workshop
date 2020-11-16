const PORT = 3001;
const express = require('express');

const app = express();

// GET /
app.get('/', (req, res) => {
    res.send('Hello, world!'); // default: 200, text/html
});

app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({ ok: true });
});

app.get('/ping', (req, res) => {
    //res.json({ status: 'ok' });
    res.status(201).json({ status: 'ok' });
});

app.listen(PORT, (err) => {
    if (err) {
        console.log('Error!');
        throw err;
    } else {
        console.log(`Server is running at http://localhost:${PORT}/`);
    }
});
