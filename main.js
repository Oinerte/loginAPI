import express  from 'express'
const app = express()
import bodyParser from 'body-parser';
import mysql from 'mysql2'
const connection = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'bdcf72c5f7e878',
  password: "63e8dbb8",
  database: 'heroku_03dcf1a7aaa08ad'
});

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

app.listen(8000, console.log('Server started...'))

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
app.post('/users/names', (req, res)=>{
    let nameToTest = req.body.username
    connection.query(
        'SELECT username FROM `user`',function (error, results){
            results.map((item)=>{
                if(item.username == nameToTest){
                    res.send('this name is been used')
                }
            })

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
