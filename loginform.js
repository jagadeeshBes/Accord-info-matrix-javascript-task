

function Validate(){

    const emailid = document.querySelector(".email")
    const ps = document.querySelector(".pass")
    const text1 = document.querySelector(".t1")
    const text2 = document.querySelector(".t2")
    const form1 = document.querySelector("#form")

    exp1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    exp2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/


    if(emailid.value === ""){
        text1.innerHTML="Enter email"
    }
    else if(exp1.test(emailid.value) == false){
        text1.innerHTML="Invalied email"
        emailid.focus()
        return false
    }

    if(ps.value === ""){
        text2.innerHTML="Enter password"
        ps.style.color="red"
    }
    else if(exp2.test(ps.value) == false){
        text2.innerHTML="Invalied password"
        ps.focus()
        return false
    }
}