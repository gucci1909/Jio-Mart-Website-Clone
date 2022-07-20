// var Products = [
//     {
//         image_url: "https://www.jiomart.com/images/product/150x150/591429026/peach-sun-gold-premium-indian-500-g-0-20220518.jpg",
//         name : "Peach Sun Gold Premium Indian Pack 500 g",
//         discount : "25%",
//         price : 149,
//         price1: 210 ,
//         category : "Peach",
//         Stock :"Yes"

//     },{
//         image_url: "https://www.jiomart.com/images/product/150x150/591238255/plum-premium-indian-pack-500-g-0-20220506.jpg",
//         name : "Plum Premium Indian Pack 500 g",
//         discount : "19%",
//         price :181 ,
//         price1: 300,
//         category : "Plum",
//         Stock :"Yes"

//     },{
//         image_url: "https://www.jiomart.com/images/product/150x150/590860298/avocado-premium-indian-1-pc-approx-350-g-425-g-0-20211112.jpg",
//         name : "Avocado Premium Indian 1 Pc (Approx 300 g - 400 g)",
//         discount : "17%",
//         price : 249,
//         price1:350 ,
//         category : "Avocado",
//         Stock :"Yes"

//     },{
//         image_url: "https://www.jiomart.com/images/product/150x150/591238256/plum-prune-premium-indian-pack-500-g-0-20220506.jpg",
//         name : "Plum Prune Premium Indian Pack 500 g",
//         discount : "32%",
//         price :200 ,
//         price1:400 ,
//         category : "Plum",
//         Stock :"Yes"

//     },{
//         image_url: "https://www.jiomart.com/images/product/150x150/591778582/nectarine-white-flesh-premium-imported-1-pc-approx-170-g-220-g-0-20220531.jpg",
//         name : "Nectarine White Flesh Premium Imported 1 Pc (Approx 170 g - 220 g)",
//         discount : "4%",
//         price : 239,
//         price1:500 ,
//         category : "Nectarine",
//         Stock :"No"

//     },{
//         image_url: "https://www.jiomart.com/images/product/150x150/591429030/avocado-hass-premium-imported-1-pc-approx-260-g-320-g-0-20220526.jpg",
//         name : "Avocado Hass Premium Imported 1 Pc (Approx 260 g - 320 g)",
//         discount : "16%",
//         price : 121,
//           price1:231 ,
//         category : "Avocado",
//         Stock :"Yes"

//     },{
//         image_url: "https://www.jiomart.com/images/product/150x150/591778572/avocado-hass-premium-imported-3-pc-approx-780-g-960-g-0-20220531.jpg",
//         name : "Avocado Hass Premium Imported 3 Pc (Approx 780 g - 960 g)",
//         discount : "16%",
//         price : 110,
//         price1: 210,
//         category : "Avocado",
//         Stock :"No"

//     },{
//         image_url: "https://www.jiomart.com/images/product/150x150/591778572/avocado-hass-premium-imported-3-pc-approx-780-g-960-g-0-20220531.jpg",
//         name : "Avocado Hass Premium Imported 6 Pc (Approx 1.55 kg - 1.95 kg)",
//         discount : "16%",
//         price : 774,
//         price1: 1010,
//         category : "Avocado",
//         Stock :"Yes"

//     }
// ]
let search = async() =>{
  let res = await fetch(`https://umang-api.herokuapp.com/`);
  let data = await res.json();
  console.log(data);
  display(data.Products);
  return data.Products;
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
      img1.setAttribute("class","img1");
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

