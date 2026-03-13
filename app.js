var fs = require("fs"),
    express = require('express'),
    app = express();

app.get("/ServerDate.js", function(req, res){
    fs.readFile('lib/ServerDate.js', 'utf8', function (err, data) {
        var now = Date.now();

        if (err)
            res.status(500);
        else {
            if (req.query.time) {
                res.set("Content-Type", "application/json");
                res.json(now);
            }
            else {
                res.set("Content-Type", "text/javascript");
                res.send(data + "(" + now + ");\n");
            }
        }
    });
});

app.get('/qr-creator', function(req, res) {
    res.sendFile('lib/qr-creator.min.js', {root: __dirname});
})

app.get("/", function(req, res){
    res.sendFile("index.html", {root: __dirname});
});

port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port '+port);