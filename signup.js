let btn=document.getElementById("button")
btn.addEventListener("click", loginVerify)

let OTP=document.getElementById("login_OTP")

let loginVerify=()=>{
    if(OTP.value==890627){
        return;
    }else{
        let msg=document.getElementById("OTP_verify")
        msg.innerText="Wrong OTP Entered"
    }
}