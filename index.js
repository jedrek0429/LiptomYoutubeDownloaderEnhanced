const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    if (req.query.format && req.query.url) {
        if (!["mp3", "mp4"].includes(req.query.format)) return res.sendStatus(400);
        return res.redirect(`https://adoredvictoriousengineers.liptom3281.repl.co/${req.query.format}?URL=${req.query.url}`)
    }
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});