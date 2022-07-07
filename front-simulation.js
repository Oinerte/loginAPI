import fetch from 'node-fetch';

function getUSers(){
    fetch('http://localhost:8000/users').then(response =>response.json().then(console.log)), {
        method: 'GET',
    }
}
function checkUsername(arr){
    console.log(arr);
}

getUSers()
