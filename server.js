const express = require('express');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routes'));


db.once('once', ()=>{
    app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
})