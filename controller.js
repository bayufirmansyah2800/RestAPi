'use strict';

let response = require('./res');
var koneksi = require('./koneksi');

exports.index = function(req, res) {
    response.ok("koneksi berjalan");
};