const express = require('express'); // make sure we're using express!
const app = express(); // make our 'app' an express one. 
const port = process.env.PORT || 3000 // Port that the server will run on. Will use a default available one, otherwise 3000.

app.get('/', (req, res) => res.sendFile(__dirname + '/html/frame0.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))