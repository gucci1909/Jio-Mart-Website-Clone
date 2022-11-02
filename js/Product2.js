let search = async() =>{
    let res = await fetch(`https://umang-arora-products.onrender.com/Product2`);
    let data = await res.json();
    console.log(data)
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
  
let ssn = async() =>
{
    let Product2 = await search()
    
     Product2.sort(function (a,b)
    {
      return b.price - a.price;
    })
    display(Product2)
  
}
  let bbn = async() =>
  {
    let Product2 = await search()
   Product2.sort(function (a,b)
     {
      return a.price - b.price;
  
     })
    display(Product2)
  
  }
  let Peach = async() =>
  {
    let Product2 = await search()
    var filterrole = Product2.filter((ele) =>{
    return ele.category == "T-shirts";
    })
    display(filterrole);
  
  }
  let Plum = async() =>
  {
    let Product2 = await search()
    let filterrole = Product2.filter((ele) =>
    {
      return ele.category == "Activewear shirts";
    })
    display(filterrole);
  
  }
  let Avocado = async() =>
  {
    let Product2 = await search()
    let filterrole = Product2.filter((ele) =>
    {
      return ele.category == "Tank Top";
    })
    display(filterrole);
  
  }
  let Nectarine = async() =>
  {
    let Product2 = await search()
    let filterrole = Product2.filter((ele) =>
    {
      return ele.color == "Red";
    })
    display(filterrole);
  
  }
  
  let Black = async() =>
  {
    let Product2 = await search()
    let filterrole = Product2.filter((ele) =>
    {
      return ele.color == "Black";
    })
    display(filterrole);
  
  }
  let Grey = async() =>
  {
    let Product2 = await search()
    let filterrole = Product2.filter((ele) =>
    {
      return ele.color == "Grey";
    })
    display(filterrole);
  
  }
  let Discount = async() =>
  {
    let Product2 = await search()
    window.location.reload()
    display(Product2);
   
  }
  let allP = async() =>{
    let Product2 = await search()
      window.location.reload()
      display(Product2)
  }
  let Stock = async()=>{
    let Product2 = await search()
      let filterrole = Product2.filter((ele) =>
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
  
  