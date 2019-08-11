const express = require('express');
// const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// app.use(routes);

app.listen(PORT, () => console.log(`Server: ${PORT}`));