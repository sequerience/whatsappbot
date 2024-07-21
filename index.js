const bodyParser = require('body-parser')
const express = require('express')
const cors = require("cors");
const WhatsappWebService = require('./App/Services/WhatsappWebService')
const {checkApiKey} = require('./App/Middlewares/CheckApiKey')

WhatsappWebService.instance()

const app = express()

const corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use(checkApiKey)

require('./App/Routes')(app)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});