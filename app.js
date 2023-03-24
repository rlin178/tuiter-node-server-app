// const express = require('express') // imports express
import express from 'express';
const app = express() // creates instance of express library
//app.get('/hello', (req, res) => {res.send('Hello World!')}) // triggers second argument
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(4000) // must be on port 4000