const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = 8001;


app.listen(PORT, ()=>{
    console.log(`Server started at PORT:${PORT}`)
})