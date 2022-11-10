const app = require('express')();
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const port = 3000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})






