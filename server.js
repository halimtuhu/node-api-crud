/**
 * file ini adalah file utama yang mana
 * akan kita jalankan menggunakan command
 * $ node server
 * atau
 * $ nodemon server
 */


// inisiasi beberapa variable
var express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser')

// bodyParser digunakan untuk mengambil data yang dikirim
// saat mengirim data harus menggunakan 
// Content-Type => application/json
// pada Headers request
// see ./data-postman.png
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// memisahkan route dari file server.js ke file routes.js
var routes = require('./routes')
routes(app)

// menjalankan web server pada port yang ditentukan
app.listen(port)
console.log('Application running on port ' + port)