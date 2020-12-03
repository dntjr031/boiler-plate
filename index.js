const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lama:lama@boilercluster.z8vti.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected..')).catch(err => console.error(err));



app.get('/', (req, res) => {
  res.send('Hello World!~~ 안녕하세요!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 