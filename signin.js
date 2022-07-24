import footer from "./component/footer.js"
document.getElementById("footers").innerHTML=footer()

let loginData=JSON.parse(localStorage.getItem("loginData")) || []

let second_check=false

let checkData=()=>{
    let number=document.getElementById("login_number").value
    if(loginData.length==0){
        if(number==""){
            document.getElementById("msg").innerText="Please enter your Mobile Number!"
        }else{
            localStorage.setItem("loginNumber", number)
            window.location.href="./signup.html"
        }
    }else{
        if(number==""){
            document.getElementById("msg").innerText="Please enter your Mobile Number!"
        }else{
            let userData=loginData.filter((el)=>{
                return el.loginNumber==number
            })
            if(userData.length==0){
                localStorage.setItem("loginNumber", number)
                window.location.href="./signup.html"
            }else{
                if(second_check==false){
                    let passwordInput=document.createElement("input")
                    passwordInput.type="password"
                    passwordInput.placeholder="Enter Your Password"
                    passwordInput.setAttribute("id", "password")
                    document.getElementById("new_input").append(passwordInput)
                    second_check=true
                }else{
                    let password=document.getElementById("password").value
                    if(userData[0].loginPassword==password){
                        window.location.href="./index.html"
                    }else{
                        document.getElementById("psswrd_msg").innerText="Wrong Password!"
                    }
                }
            }
        }
    }
}

let btn=document.getElementById("button")
btn.addEventListener("click", checkData)