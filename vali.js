var Uname = document.querySelector(".Username")
var Lname = document.querySelector(".Lastname")
var Pword = document.querySelector(".Password")
var cword = document.querySelector(".Confirm Password")
var email = document.querySelector(".Email")
var address = document.querySelector(".Address")
var pnumber = document.querySelector(".Phone")
var msg1 = document.querySelector(".message1")
var msg2 = document.querySelector(".message2")
var msg3 = document.querySelector(".message3")
var msg4 = document.querySelector(".message4")
var msg5 = document.querySelector(".message5")
var msg6 = document.querySelector(".message6")
var msg7 = document.querySelector(".message7")


function reg(){
    alert("hi")
    if(Uname.value == ""){
        msg1.innerHTML = "enter name";
        Uname.style.color="red";
        return false;
    }
        
    else {
        var exp1=/^[a-zA-Z]{3,8}$/
        if(exp1.test(Uname.value) == false){
            msg1.innerHTML = "invalide";
            return false;
        }
    }
    if(Lname.value == ""){
        Lname.style.color="red";
        msg2.innerHTML = "Enter name";
        return false;
    }
    if(Pword.value == ""){
        Pword.style.color="red";
        msg3.innerHTML = "invalide";
        return false;
    }
    if(cword.value == ""){
        cword.style.color="red";
        msg4.innerHTML = "invalide";
        return false;
    }
    else {
        if (Pword.value != cword.value){
            msg4.innerHTML = "invalide";
            return false;
        }
    }
    if(email.value == ""){
        email.style.color="red";
        msg5.innerHTML = "invalide";
        return false;
    }
    
    else {
        if (exp2.test(email.value) == false){
            msg5.innerHTML = "invalide";
            return false;
        }
    }
    if(address.value == ""){
        address.style.color="red";
        return false;
    }
   
    else{
        var  exp3 = /^[a-zA-Z]{120}$/
        if (exp3.test(address.value) == false){
            msg6.innerHTML = "invalide";
            return false;
        }
    }
    if(pnumber.value == ""){
        pnumber.style.color="red";
        msg6.innerHTML = "invalide";
        return false;
    }
    else{
        var exp4 = /^[6-9]{1}[0-9]{9}$/
        if(exp4.test(pnumber.value) == false){
            msg7.innerHTML = "invalide";
            return false;
        }
    }   
}
