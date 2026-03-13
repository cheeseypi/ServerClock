var fs = require("fs"),
    express = require('express'),
    app = express();

let script = fs.readFileSync('lib/ServerDate.js', 'utf8');

app.get("/ServerDate.js", function (req, res) {
    var now = Date.now();

    if (!script)
        res.status(500);
    else {
        if (req.query.time) {
            res.set("Content-Type", "application/json");
            res.json(now);
        }
        else {
            res.set("Content-Type", "text/javascript");
            res.send(script + "(" + now + ");\n");
        }
    }
});

app.use(express.static('public'));
// app.get('/qr-creator', function (req, res) {
//     res.sendFile('lib/qr-creator.min.js', { root: __dirname });
// })

// app.get("/", function (req, res) {
//     res.sendFile("index.html", { root: __dirname });
// });

port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port ' + port);