const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
require('dotenv').config();
const { sendMessage } = require('./libs/sendEmail')
const { emailV } = require('./libs/regex');
const {count, readCount} = require('./libs/counter');

app.use(express.static(__dirname + '/public'));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.post('/email', (req, res) => {
    const body = req.body;
    const monthLimit = 30;
    const overflow = readCount(monthLimit);
    
    const isEmail = emailV(body.email);
        if(isEmail === false)
            return res.status(400).send('invalid email')
    
    console.log(overflow);
    sendMessage({
        to: process.env.MY_EMAIL,
        subject: `Hey Malik, From your web portfolio`,
        html: body.text + `\n- ${body.email}`
    })

    count(1, monthLimit)
    res.status(200).send('Sent message')
});

app.listen(PORT, () => {
    console.log(`Malik's portfolio on port: ${PORT}`);
})

