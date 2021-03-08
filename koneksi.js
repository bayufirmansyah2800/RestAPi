let mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restapi'
});

conn.connect((error) => {
    if (error) throw error;
    console.log("Berhasil Melakukan Koneksi");
});

module.exports = conn;