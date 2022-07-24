import footer from "./component/footer.js"
document.getElementById("footers").innerHTML=footer()

let loginData=JSON.parse(localStorage.getItem("loginData")) || []
let loginNumber=localStorage.getItem("loginNumber")

let OTP=document.getElementById("login_OTP")

let loginVerify=()=>{
    if(OTP.value==890627){
        let firstName=document.getElementById("first_name").value
        let lastName=document.getElementById("last_name").value
        let email=document.getElementById("login_email").value
        let password=document.getElementById("login_password").value
        let password2=document.getElementById("login_password_check").value
        if(firstName=="" || lastName=="" || email=="" || password=="" || password2==""){
            alert("Please fill in all the fields")
        }else{
            if(password==password2){                                   // Login Data saving process starts here
                let person=new User(firstName, lastName, email, loginNumber, password)
                if(loginData.length==0){
                    loginData.push(person)
                    localStorage.setItem("loginData", JSON.stringify(loginData))
                    window.location.href="./index.html"
                }else{
                    loginData.forEach((elem)=>{
                        elem.loginStatus=false
                    })
                    loginData.push(person)
                    localStorage.setItem("loginData", JSON.stringify(loginData))
                    window.location.href="./index.html"
                }
            }else{
                let msg2=document.getElementById("txt4")
                msg2.innerText="Confirm password you entered does not match to your original password"
            }
        }
    }else{
        let msg=document.getElementById("OTP_verify")
        msg.innerText="Wrong OTP Entered"
    }
}

let btn=document.getElementById("button")
btn.addEventListener("click", loginVerify)


class User{
    constructor(fname, lname, email, number, password){
        this.firstName=fname;
        this.lastName=lname;
        this.loginEmail=email;
        this.loginNumber=number;
        this.loginPassword=password;
        this.loginStatus=true;
    }
}