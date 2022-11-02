let search = async() =>{
  let res = await fetch(`https://umang-arora-products.onrender.com/Products`);
  let data = await res.json();
  console.log(data);
  display(data);
  return data;
}
search()
function display(data)
  {
    let container = document.getElementById("products") 
    container.innerHTML=null;
    let h6 = document.createElement("p");
    h6.innerText="ALL PRODUCTS"
   
    data.forEach(function (elem)
    {
      let h1 = document.createElement("h1");
      h1.innerText = `${elem.discount}`;
      h1.setAttribute("class","h1");
      let h2 = document.createElement("h1");
      h2.innerText = "OFF";
      h2.setAttribute("class" , "h2");
      let img1 = document.createElement("img");
      img1.setAttribute("src","https://www.jiomart.com/assets/version1657814599/smartweb/images/icons/offer_bg.svg")
      img1.setAttribute("class","img145");
      let div = document.createElement("div");
      div.className="class"
      let img = document.createElement("img");
      img.src = elem.image_url;
      img.className="image";
      let  name = document.createElement("h3");
      name.innerText=elem.name;
      name.className="name";
      let p1 = document.createElement("p");
      p1.innerText= "M.R.P";
      p1.className="pr"
      let cprice = document.createElement("p");
      cprice.innerHTML = `&#8377`;
      cprice.setAttribute("class","pricing")
      let ccprice = document.createElement("p");
      ccprice.innerHTML = elem.price1;
      ccprice.setAttribute("class","pricing1")
      let rupees = document.createElement("p");
      rupees.innerHTML="&#8377";
      rupees.className="pricing2";
      let price = document.createElement("p");
      price.innerHTML= `${elem.price}.00`;
      price.className="pricing3";
      let button = document.createElement("button");
      button.className= "button"
      button.innerText = "ADD TO CART";
      button.addEventListener("click",clc)
      button.addEventListener("click",function(){
        addcarfun(elem)
    })
      div.append(h1,h2,img1,img,name,p1,cprice,ccprice,rupees,price,button);
      container.append(div)
      

    })

}
// display(Products)

 let ssn = async() =>
{
  let Products = await search()
  
   Products.sort(function (a,b)
  {
    return b.price - a.price;
  })
  display(Products)

}
let bbn = async() =>
{
  let Products = await search()
 Products.sort(function (a,b)
   {
    return a.price - b.price;

   })
  display(Products)

}
let Peach = async() =>
{
  let Products = await search()
  var filterrole = Products.filter((ele) =>{
  return ele.category == "Peach";
  })
  display(filterrole);

}
let Plum = async() =>
{
  let Products = await search()
  let filterrole = Products.filter((ele) =>
  {
    return ele.category == "Plum";
  })
  display(filterrole);

}
let Avocado = async() =>
{
  let Products = await search()
  let filterrole = Products.filter((ele) =>
  {
    return ele.category == "Avocado";
  })
  display(filterrole);

}
let Nectarine = async() =>
{
  let Products = await search()
  let filterrole = Products.filter((ele) =>
  {
    return ele.category == "Nectarine";
  })
  display(filterrole);

}
let Discount = async() =>
{
  let Products = await search()
  window.location.reload()
  display(Products);
 
}
let allP = async() =>{
  let Products = await search()
    window.location.reload()
    display(Products)
}
let Stock = async()=>{
  let Products = await search()
    let filterrole = Products.filter((ele) =>
  {
    return ele.Stock == "Yes";
  })
  display(filterrole);
}

let count = localStorage.getItem("counter") || 0;
function clc()
{
  count++;
  localStorage.setItem("counter" , count);
  if(count==1){
    alert(`${count} item has been added to cart`)


  }
  else{
    alert(`${count} items has been added to cart`)

  }
}
let cart=JSON.parse(localStorage.getItem("cart"))  || []
let addcarfun = (ele)=>
{
  cart.push(ele)
  localStorage.setItem("cart",JSON.stringify(cart))
}

