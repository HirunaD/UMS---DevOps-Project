const express = require('express'); //import the express
const app = express(); //create express instance called app
const cors = require('cors'); //import cors
const controller = require('./controller'); //import the controller

//add middlewares
app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

//create get Rest API's
app.get('/users', (req, res) => {
    controller.getUsers((req, res, next) => {
        res.send();
    });
});

app.post('/createuser', (req, res) => {
    controller.addUser(req.body, (callback) => {
        res.send();
    });
});

app.put('/updateuser', (req, res) => {
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    });
});

app.post('/deleteuser', (req, res) => {
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});

//export app for access to server.js
module.exports = app;