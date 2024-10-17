const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());


app.listen(8000,()=>{
    console.log("running");
});

app.post('/zapier-webhook', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.status(200).send('Data received');
 });
 