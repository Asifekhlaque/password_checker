let password=document.getElementById("password");
let view=document.getElementById("view");
view.onclick=function(){
if(password.type=="password"){
    password.type="text";
    }
    else{
    password.type="password";
    }
}
function checkPassword(){
    if(password.value.length<8){
        document.getElementById("result").innerHTML="Password must be at least 8 characters long";
    }
    else if(!password.value.match(/[0-9]/)){
        document.getElementById("result").innerHTML="Password must contain at least one number";
    }
    else if(!password.value.match(/[A-Z]/)){
        document.getElementById("result").innerHTML="Password must contain at least one uppercase letter";
    }
    else if(!password.value.match(/[a-z]/)){
        document.getElementById("result").innerHTML="Password must contain at least one lowercase letter";
    }
    else if(!password.value.match(/[^A-Za-z0-9]/)){
        document.getElementById("result").innerHTML="Password must contain at least one special character";
    }
    else{
        document.getElementById("result").innerHTML="Password is strong";
    }
}