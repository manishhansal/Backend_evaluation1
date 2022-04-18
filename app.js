const express = require('express');
const app = express();

// app.use(logger);

app.get('/books', logger,  (req, res) => {
    res.send(req.routerName);
})

app.get('/libraries', checkPermission, (req, res) => {
    res.send(req.pathRoute);
})

app.get('/authors', checkPermission, (req, res) => {
    res.send(req.pathRoute);
})

function logger(req, res, next) {
    var pathName = req.route.path;
    req.routerName = {name: pathName};
    next();
}

function checkPermission(req, res, next){
    var routeName = req.route.path;
    req.pathRoute = {name: routeName, checkPermission: true};
    next();
}

app.listen(9006, () => {
    console.log("Listening on port 9006")
});