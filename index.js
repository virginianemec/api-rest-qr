const express = require('express');
const multer = require('multer');

const app = express()
const upload = multer({dest: '/uploads' })
app.use(express.json);



app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/imagen', upload.single('imagen'), function(req, res){
    const body = req.body;
    const imagen = req.file;
    console.log(imagen);
    res.send('esta es el post');
})

app.listen(3000)