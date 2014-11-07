/**
 * Created by kinnimew on 7/11/14.
 */
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/websocket.html");
});

io.on("connection", function (socket) {

    setInterval(function () {
        socket.emit("date", {date: new Date()});
    }, 1000)
});

server.listen(3000);
console.log("Magic starts at port 3000");