let navbar=()=>
{
    return `<div id="sidebar">
    <a href="#"><img src="./image/img1.PNG" alt=""></a>
     
   </div>
   <div id="homelogo">
     <a href=""><img src="./image/img2.PNG" alt="">
     </a>
   </div>
   <div id="searchbar">
     <form action="">
         <input  type="text" placeholder="Search essentials, groceries, and more ..." id="query">
        
     </form>
     <button><img src="./image/img3.PNG" alt=""></button>
   </div>
   <div id="signupin">
     <div id="signupicon">
        <a href="signin.html"><img src="./image/img4.PNG" alt=""  ></a> 
     </div>
     <div id="inup"> <a href="signin.html">Sign in / sign up</a> </div>
   </div>
   <div id="cart">
     <div id="cartlogo">
         <a href=""><img src="./image/img5.PNG" alt=""></a>
     </div>
             <div id="cartt"><a href="Cart.html">cart</a></div>
   </div>`;
}
export default navbar;