const express = require('express');
const mysql = require('mysql')

const app = express();




// Database Config
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: 'galanews'
// })
//
// // Database Initialize
// connection.connect(function(err) {
//   if (err) throw err
//   console.log('mysql connected')
// })

//app.use('./api/users', users)

app.get('/api/express', (req, res) => {
  res.json({ express: true });
});

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`));
