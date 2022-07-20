document.querySelector("form").addEventListener("submit",myserch);
function myserch(event)
{
    event.preventDefault();
    let query=document.getElementById("query").value;
    console.log(query);
    
} 