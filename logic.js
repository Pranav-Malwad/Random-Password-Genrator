const passwordBox = document.getElementById("Password");
const length = 8;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number ="0123456789"
const symbol = "@#$%^&*()_+~{}:=-[];''.,/"

const allchars = uppercase+lowercase+number+symbol;

function createPassword(){
    let password = "";
    password += uppercase[Math.round(Math.random()*uppercase.length)];
    password += lowercase[Math.round(Math.random()*lowercase.length)];
    password += number[Math.round(Math.random()*number.length)];
    password += symbol[Math.round(Math.random()*symbol.length)];

    while(length>password.length){
    password += allchars[Math.round(Math.random()*allchars.length)];
    }
    passwordBox.value=password;
}

function copy_password ()
{
passwordBox.select();
document.execCommand("copy");
}