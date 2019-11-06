/**
 * file ini digunakan untuk membuat response api agar lebih konsiten
 */

'use strict'


// meng-export funcsi success agar dapat digunakan pada file lain (controller.js)
exports.success = function (values, res) {
    var data = {
        'status': true,
        'message': 'Success',
        'data': values
    };

    res.json(data)
    res.end()
}

// meng-export funcsi error agar dapat digunakan pada file lain (controller.js)
exports.error = function (message, res) {
    res.json({
        'status': false,
        'message': message
    }).end();
}