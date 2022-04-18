const express = require('express');
const app = express();


app.get('/books', (req, res) => {
    console.log("books");
})

app.get('/libraries', (req, res) => {
    console.log('libraries');
})

app.get('/authors', (req, res) => {
    console.log('authors');
})

function logger(req, res, next) {

}

function checkPermission(req, res, next){

}

app.listen(9006, () => {
    console.log("Listening on port 9006")
});