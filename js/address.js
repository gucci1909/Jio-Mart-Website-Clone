let data = JSON.parse(localStorage.getItem("counter"));
let carting = document.getElementById("cartvar");
let rt = document.createElement("h1");
let mycart = document.createElement("a");
mycart.innerText = `My Cart (${data} items)`;
mycart.setAttribute("href" ,"Cart.html")
mycart.className = "mycart";
rt.append(mycart)
carting.append(rt);
const api = "baa3b5744b47113da352b243b812e26e";
let getData= ()=>
{
    let city = document.getElementById("incity").value;
    app()
    display(city);
}
let yes = ()=>{
    var info = JSON.parse(localStorage.getItem("address")) || [];
    let city = document.getElementById("incity");
    let name = document.getElementById("name");
    let mobile = document.getElementById("mobile");
    let pin = document.getElementById("pin");
    let house = document.getElementById("house");
    let local = document.getElementById("local");
    let state = document.getElementById("instate");
    let inform = new product(city.value,name.value,mobile.value,pin.value,house.value,local.value,state.value);
    info.push(inform);
    alert(`${name.value} Your Address has been Added`)
    localStorage.setItem("address",JSON.stringify(info));
    city.value = null;
    name.value = null;
    mobile.value = null;
    pin.value = null;
    house.value = null;
    local.value = null;
    state.value = null;
    app1()
    getCoordintes()
}

function product(c,n,m,p,h,l,s){
    this.city = c
    this.name = n
    this.mobile = m
    this.pin = p
    this.house = h
    this.local = l
    this.state = s
}
function app(){
    let c = document.getElementById("container");
    c.innerHTML =null;
    let p1 = document.createElement("h3");
    p1.innerText= `DELIVERY LOCATION :`;
    p1.className = "you"
    c.append(p1);
}
function app1(){
    let c = document.getElementById("container");
    c.innerHTML =null;
    let p1 = document.createElement("h3");
    p1.innerText= `YOUR CURRENT LOCATION :`;
    p1.className="you"
    c.append(p1);
}
function display(city)
{
    let c = document.getElementById("container1");
    var xx = document.getElementById("gmap_canvas");
    xx.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    c.append(xx);
}
let getCoordintes=()=> {
    navigator.geolocation.getCurrentPosition(success)
    function success(pos) {
        const crd = pos.coords;
        let lat = crd.latitude.toString();
        let lng = crd.longitude.toString();
        getCity(lat,lng);
  
    }
}
app1()
getCoordintes()
function getCity(lat,lng) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://us1.locationiq.com/v1/reverse.php?key=pk.47a11aa73f2ea1e0f6666b1fd369dd1b&lat=${lat}&lon=${lng}&format=json`);
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            let city = response.address.city;
            display(city)
        }
    }
}
let data2 = JSON.parse(localStorage.getItem("cart"));
let display2=(data1)=>
{
    let con = document.getElementById("payment");
    let h1 = document.createElement("h3");
    h1.innerText = "Payment Details"
    h1.setAttribute("id","foo")
    let sum = 0
    for(var i =0; i<data1.length; i++)
    {
        sum += data1[i].price1


    }
    let sum1 =0;
    for(var i =0 ; i<data1.length ; i++)
    {
        sum1 = sum1+(data1[i].price);
        
    }
    let gtm = document.createElement("p");
        gtm.innerHTML = `&#8377`;
        gtm.className = "gtm";
    let stm = document.createElement("p");
        stm.innerHTML = `- &#8377`;
        stm.className = "stm";
    let vtm = document.createElement("p");
        vtm.innerHTML = `&#8377`;
        vtm.className = "vtm";
    let para = document.createElement("h3");
    para.innerText = "MRP Total";
    para.setAttribute("id","mr")
    let para1 = document.createElement("h3");
    para1.innerText = "Product Discount";
    para1.className="hjl"
    let para2 = document.createElement("h3");
    para2.innerText = "Total Amount";
    para2.className = "name23"
    let p = document.createElement("p");
    p.setAttribute("id","line");
    let p1 = document.createElement("p");
    p1.setAttribute("id","line1");
    let h2 = document.createElement("h3");
    h2.innerText = `${sum}`;
    h2.className="no"
    let h3 = document.createElement("h3");
    h3.innerText = `${Math.abs(sum-sum1)}`;
    h3.className= "no1"
    let h4 = document.createElement("h3");
    h4.innerText = `${sum1}`;
    h4.className = "h89"
    let h5 = document.createElement("p");
    h5.innerHTML = `YOU SAVE : &#8377 ${Math.abs(sum-sum1)}`;
    h5.className ="saving"
    let button = document.createElement("button");
    button.innerText = "MAKE PAYMENT"
    button.addEventListener("click", button1);
    button.className="byn"
    con.append(h1,para,h2,gtm,vtm,stm,p,para1,h3,p1,para2,h4,h5,button)
}
let home = ()=>{
    let home = document.getElementById("home");
    home.style.border = "1px solid #ff3f6c";
    home.style.color = "#ff3f6c";
    let work = document.getElementById("work");
    work.style.border = "1px solid #282c3f";
    work.style.color = "#282c3f";
}
let work = ()=>{
    let work = document.getElementById("work");
    work.style.border = "1px solid #ff3f6c";
    work.style.color = "#ff3f6c";
    let home = document.getElementById("home");
    home.style.border = "1px solid #282c3f";
    home.style.color = "#282c3f";
}
function button1(){
    window.location.href = "Payment.html"
}
display2(data2)