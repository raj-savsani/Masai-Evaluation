const express = require("express");

const {app, start} = require("./server")
const userController = require('./controllers/user.controller')
const movieController = require('./controllers/movie.controller')
const theatreController = require('./controllers/theatre.controller')
const screenController = require('./controllers/screen.controller')
const showController = require('./controllers/show.controller')


app.use('/user',userController)
app.use('/movies',movieController)
app.use('/theatre',theatreController)
app.use('/screen',screenController);
app.use('/show',showController);



start();