const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql2');
// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//     });
// });
// create the connection to database
const connection = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'bdcf72c5f7e878',
  password: "63e8dbb8",
  database: 'heroku_03dcf1a7aaa08ad'
});

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

app.listen(8000, console.log('Server started...'))


// simple query
// connection.query(
//     'SELECT * FROM `playlists`',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//     }
//   );

app.get('/users', function (req, res){
    const body = req.body
    const inputUserName = body.inputUserName
    const registeredUsernames = []
    connection.query(
        'SELECT * FROM `user`',function (error, results){
            res.send(results)
        }
    )
})

app.post('/users', (req, res) =>{
    const body = req.body
    const name = body.name
    const passwd = body.password
    let query = 'INSERT INTO `user` (username, password) VALUES '
    let values = `("${name}", MD5("${passwd}"))`

    connection.query(`${query} ${values}`)
    res.send('usuário registrado')
})

function isSamePasswd(passwd1, passwd2){
    if( typeof(passwd1,passwd2) == "string"){
        if(passwd1 != "" && passwd2 != ""){
            if(passwd1 != passwd2){
                return false;
            }else{
                return true
            } 
        }else{
            return false
        }
    }else{
        return false
    }   
}