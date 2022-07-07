
    function username_exists ( $username ) {
        $user = get_user_by( 'login', $username );
        if ( $user ) {
            $user_id = $user.ID;
        } else {
            $user_id = false;
        }
    }


function isSamePasswd(){
    passwd1 = form.passwd1.value;
    passwd2 = form.passwd2.value;

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



/* let url ='https://youtu.be/icAH8y_FEPc'  */
let url = 'https://www.youtube.com/watch?v=icAH8y_FEPc'

function isLink(url){
    let https = "(.*)https://(.*)"
    return Boolean(url.match(https));  // nn precisa de http pq todas do ytb são https
}
result = isLink(url);

if(result == true) {
let ytb = "(.*)www.youtube.com/watch(.*)"
let ytb2 ="(.*)youtu.be(.*)" 

function isYoutube(url){
   return Boolean(url.match(ytb2) || url.match(ytb) ); 
}
} 
 resultytb = isYoutube(url)
 console.log(resultytb) 