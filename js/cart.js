let data = JSON.parse(localStorage.getItem("counter"));
let carting = document.getElementById("cartva");
let mycart = document.createElement("h1");
mycart.innerText = `My Cart (${data})`;
mycart.className = "mycart";
carting.append(mycart);
let data2 = JSON.parse(localStorage.getItem("cart"));
let display=(dat)=>
{
    let count = JSON.parse(localStorage.getItem("counter"));
    let container = document.getElementById("cartitems");
    let h1 = document.createElement("h2");
    h1.innerText = `Your Basket`;
    h1.setAttribute("id","fb")
    let h10 = document.createElement("h2");
    h10.innerText = `(${count} items)`;
    h10.setAttribute("id","ci")

    let sum =0;
    for(var i =0 ; i<dat.length ; i++)
    {
        sum = sum+(dat[i].price);
        
    }
    let h2 = document.createElement("h3");
    h2.innerHTML = "&#8377";
    h2.setAttribute("id","re")
    let h3 = document.createElement("h3");
    h3.innerText = `${sum}.00`;
    h3.setAttribute("id","sum")
    container.append(h1,h10,h2,h3)
    dat.forEach(function(ele){
        let con = document.createElement("div");
        con.setAttribute("id","div1")
        let img = document.createElement("img");
        img.src = ele.image_url;
        let h4 = document.createElement("h4");
        h4.innerText = ele.name;
        h4.className = "bbn"
        let h5 = document.createElement("h4");
        h5.innerText = ele.price;
        h5.className = "h68"
        let p1 = document.createElement("p");
        p1.innerText= "M.R.P";
        p1.className="pr";
        let htm = document.createElement("p");
        htm.innerHTML = `&#8377`;
        htm.className = "htm"
        let save = document.createElement("p");
        save.innerHTML = `YOU SAVE &#8377 ${Math.abs(ele.price1-ele.price)}`;
        save.className = "save";
        let cprice = document.createElement("p");
        cprice.innerHTML = `&#8377`;
        cprice.setAttribute("class","pricing")
        let ccprice = document.createElement("p");
        ccprice.innerHTML = ele.price1;
        let cat = document.createElement("p");
        cat.innerText = `Category : ${ele.category}`;
        cat.className = "cat"
        ccprice.setAttribute("class","pricing1");
        let dis = document.createElement("p");
        dis.innerText =`Discount : ${ele.discount}` ;
        dis.className="dis"
        con.append(img,h4,h5,cat,htm,save,p1,cprice,ccprice,dis);
        container.append(con)

    })




}
display(data2)
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
    button.innerText = "Place Order"
    button.addEventListener("click", button1);
    button.className="byn"
    con.append(h1,para,h2,gtm,vtm,stm,p,para1,h3,p1,para2,h4,h5,button)
}
display2(data2)
function button1(){
    window.location.href = "Address.html"
}