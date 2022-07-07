import fetch from 'node-fetch';

function getUSers(username){
    fetch('http://localhost:8000/users'), {
        method: 'POST',
        body: {"username":`${username}`}
    }
}
function checkUsername(arr){
    console.log(arr);
}

getUSers()
