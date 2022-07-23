let data34 = JSON.parse(localStorage.getItem("counter"));
let carting = document.getElementById("cartvar");
let rt = document.createElement("h1");
let mycart = document.createElement("a");
mycart.innerText = `My Cart (${data34} items)`;
mycart.setAttribute("href" ,"Cart.html")
mycart.className = "mycart";
rt.append(mycart)
carting.append(rt);
let data2 = JSON.parse(localStorage.getItem("cart"));
let display2=(data1)=>
{
    let con = document.getElementById("payment");
    let h1 = document.createElement("h3");
    h1.innerText = "Payment Details";
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
    button.innerText = "PLACE ORDER"
    button.addEventListener("click", function(){
        button1(main1,main2,main3,main4,5000,10000,15000,20000)
    });
    button.className="byn"
    con.append(h1,para,h2,gtm,vtm,stm,p,para1,h3,p1,para2,h4,h5,button)
}
display2(data2);
let data=JSON.parse(localStorage.getItem("address"))
data.forEach(function(el){
   let card=document.createElement("div");
   card.id="cards"
   let name=document.createElement("div");
   name.id="namecontainer";
   let circle=document.createElement("div");
   circle.id="circle";
   let check=document.createElement("input");
   check.setAttribute("type","checkbox");
   check.id="checkbox";
   circle.append(check);
   let name1=document.createElement("div");
   name1.innerText= el.name;
   name1.id="name1";
   let where=document.createElement("div");
   where.id="where";
   where.innerText="Home";
   name.append(circle,name1,where)
   let house=document.createElement("div");
   house.id="house"
   house.innerText=el.house+", "+el.local;
   let city=document.createElement("div");
   city.id="city";
   city.innerText=`${el.city},${el.state} - ${el.pin}`
   let mobile=document.createElement("div");
   mobile.id="mobile";
   mobile.innerText="Mobile : "
   let span=document.createElement("span");
   span.innerText=el.mobile;
   span.style.fontWeight="600"
   mobile.append(span)
   let paymethod=document.createElement("div");
   let ul=document.createElement("ul");
   let li=document.createElement("li");
   li.innerText="Pay on Delivery available"
   li.id="paylist";
   ul.append(li);
   paymethod.append(ul);
   card.append(name,house,city,mobile,paymethod);
   let container = document.getElementById("container")
   container.append(card)
})
let id;
let id2;
let id3;
let id4;
let main1=()=>
{
    alert("Your order is being Packed");

}
let main2=()=>
{
    alert("Your order is in transit");
}
let main3=()=>{
    alert("Your order is out for delivery");
}
let main4=()=>{
    alert("Order delivered");
    main5()
}
function main5(){
    window.location.href="index.html"
}
function button1(main1,main2,main3,main4,delay1,delay2,delay3,delay4)
{
    if(id)
    {
        clearTimeout(id)

    }
    if(id2){
        clearTimeout(id2);

    }
    if(id3)
    {
        clearTimeout(id3);

    }
    if(id4)
    {
        clearTimeout(id4);
        

    }
    id = setTimeout(function(){
        main1()
    },delay1)
    id2 = setTimeout(function(){
        main2()
    },delay2)
    id3 = setTimeout(function(){
        main3()
    },delay3)
    id4 = setTimeout(function(){
        main4()
    },delay4)

}
