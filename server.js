const express = require('express');
const fs = require('fs');
const app = express();
const port = 4200;

contents = null;

contents = fs.readFileSync('mod.app.js', 'utf8');
console.log('js file read');

app.get('/', (req,res) => {
	res.header("Content-Type", "application/javascript")
	res.send(contents);
});


app.listen(port, () => console.log('server is up & running'));
