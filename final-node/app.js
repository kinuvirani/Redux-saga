const bodyParser=require('body-parser')
const express=require('express')
var cors = require('cors')
const app=express()
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger/swagger.json');

const testRoute=require('./routes/test.route')

app.use(bodyParser.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api',testRoute)

app.listen('4007',()=>{
    console.log("App Started")
})
