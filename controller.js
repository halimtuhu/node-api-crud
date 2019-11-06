/**
 * File ini berfungsi sebagai pemegang kendali
 * dari logika yang akan dijalankan
 * 
 * Seluruh route yang didaftarkan akan diarahkan ke file ini
 * untuk diproses
 */


// Membuat file ini dalam mode strict
// see https://www.w3schools.com/js/js_strict.asp
'use strict'

var response = require('./res') // meng-import file res.js pada variabel
var conn = require('./conn') // meng-import file conn.js pada variabel


// meng-export fungsi posts agar dapat dipanggil pada file lain (routes.js)
// fungsi ini digunakan untuk mengambil seluruh data post yang ada pada database
exports.posts = function (req, res) {
    conn.query('select * from posts', function (err, rows, field) {
        if (err) {
            console.log(err)
        } else {
            response.success(rows, res)
        }
    })
}

// meng-export fungsi storePost agar dapat dipanggil pada file lain (routes.js)
// fungsi ini digunakan untuk menambahkan data post pada database
// --- NOTE ---
// data harus bertipe json dengan menambahkan header
// Content-Type => application/json
// see ./data-postman.png
exports.storePost = function (req, res) {
    let data = {
        title: req.body.title,
        content: req.body.content
    }

    conn.query(
        'insert into posts (title, content) values (?, ?)',
        [data.title, data.content],
        function (err, rows, fields) {
            if (err) {
                console.log(err)
            } else {
                response.success('Store post success', res)
            }
        }
    )
}

// meng-export fungsi detailPost agar dapat dipanggil pada file lain (routes.js)
// fungsi ini digunakan untuk mengambil 1 data post yang ada pada database
// data yang diambil berdasarkan id yang ditaruh di endpoint (url) berupa params
exports.detailPost = function (req, res) {
    conn.query(
        'select * from posts where id = ' + req.params.id,
        function (err, rows, field) {
            if (err) {
                console.log(err)
            } else {
                if (rows[0]) {
                    response.success(rows[0], res)
                } else {
                    response.error('Post not found', res)
                }
            }
        }
    )
}

// meng-export fungsi storePost agar dapat dipanggil pada file lain (routes.js)
// fungsi ini digunakan untuk mengupdate data post pada database
// data yang diupdate berdasarkan id yang ditaruh di endpoint (url) berupa params
// --- NOTE ---
// data harus bertipe json dengan menambahkan header
// Content-Type => application/json
// see ./data-postman.png
exports.updatePost = function (req, res) {
    conn.query(
        'update posts set title = ?, content = ? where id = ?',
        [req.body.title, req.body.content, req.params.id],
        function (err, rows, field) {
            err ? console.log(err) : response.success('Update posts success', res)
        }
    )
}

// meng-export fungsi deletePost agar dapat dipanggil pada file lain (routes.js)
// fungsi ini digunakan untuk menghapus data post pada database
// data yang dihapus berdasarkan id yang ditaruh di endpoint (url) berupa params
exports.deletePost = function (req, res) {
    conn.query(
        'delete from posts where id = ?',
        [req.params.id],
        function (err, rows, field) {
            err ? console.log(err) : response.success('Delete post success', res)
        }
    )
}

// meng-export fungsi index agar dapat dipanggil pada file lain (route.js)
// fungsi ini digunakan untuk testing apakah api sudah berjalan
exports.index = function (req, res) {
    response.success("Hello World !", res)
}