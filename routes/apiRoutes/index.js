const fs = require('fs');
const router = require('express').Router();


router.get('/notes', (req, res) => {
    let noteSaved = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(noteSaved);
});

router.post('/notes', (req, res) => {
    if (!req.body)  {
      res.status(400).send("Add a note.");
    }

    let addNote = req.body;
    let noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    noteData.push(addNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(noteData));

    res.json(noteData);
});

module.exports = router;