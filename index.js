const express = require('express');
const app = express();
require('dotenv').config()

// Use port 3001 unless env var PORT is defined
let port = 3001;
if (process.env['PORT']) {
    port = process.env['PORT'];
}

// Use host 127.0.0.1 unless env var HOST is defined
let host = "127.0.0.1";
if (process.env['HOST']) {
    host = process.env['HOST'];
}

console.log("Starting listener on " + host + ":" + port + "...");

app.listen(port, host);

app.get('/', (req, res) => {
    res.redirect("https://github.com/bc1bb/example-ecommerce-api");
});



