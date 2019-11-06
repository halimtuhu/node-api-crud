/**
 * File ini digunakan untuk membuat koneksi ke database mysql
 */

var mysql = require('mysql')

// membuat koneksi ke credential server yang ditentukan
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeapp'
})

// menghubungkan database
con.connect(function (err) {
    if (err) throw err
})

// meng-export variable con sehingga dapat digunakan pada file lain
module.exports = con