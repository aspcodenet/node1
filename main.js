const express = require('express')
const app = express()
const fs = require('fs');
const ejs = require('ejs');
const port = 3000
const testFolder = 'c:\\temp';

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/players', (req, res) => {
    const players = [{
        name: "Stefan",
        jersey:2,
        age:51
    },{
        name: "Foppa",
        jersey:21,
        age:51
    },
    {
        name: "Sudden",
        jersey:13,
        age:52
    }]
    res.json(players)
  })
  

app.get('/contact', (req, res) => {
  res.send('Don’t contact us at all!')
})

app.get('/listing', (req, res) => {
    res.render('index',{files:fs.readdirSync(testFolder), title: "Test"})
	// result = '';
	// fs.readdirSync(testFolder).forEach(file => {
	//   result += file + '<br/>'
	// });
  	// res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})