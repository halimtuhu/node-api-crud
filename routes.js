/**
 * file berisi seluruh route yang ada pada aplikasi ini
 */

'use strict'

// meng-export file route.js agar dapat digunakan pada file lain (server.js)
module.exports = function (app) {

    // meng-import controller.js pada variabel
    var controller = require('./controller')

    // daftar route yang ada pada aplikasi dan fungsi controller yang digunakan
    app.get('/', controller.index)

    app.get('/posts', controller.posts)
    app.post('/posts', controller.storePost)
    app.get('/posts/:id', controller.detailPost)
    app.put('/posts/:id', controller.updatePost)
    app.delete('/posts/:id', controller.deletePost)
}