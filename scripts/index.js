// import footer from "../component/footer.js"
// document.getElementById("footers").innerHTML=footer()
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// second slider

let left=1;
let right=7;
    function show(){
        for(let i=left;i<=right;i++){
            document.getElementById(i).style.display="inline-block"
        }
    }

    function moveleft(){
        if(left<=7 && right<=15){
            document.getElementById(left).style.display="none"
        left+=1;
        right+=1;
        for(let i=left;i<=right;i++){
            document.getElementById(i).style.display="inline-block"
        }

        }else{
            return;
        }
       
    }

    function moveright(){
        if(left>=2 && right>=6){
            document.getElementById(right).style.display="none"
        left-=1;
        right-=1;
        for(let i=left;i<=right;i++){
            document.getElementById(i).style.display="inline-block"
        }

        }else{
            return;
        }

        
    }


  


