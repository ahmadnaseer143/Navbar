const button=document.querySelector(".bar");
const navBar=document.querySelector(".links");
const date=document.getElementById("date");
date.innerHTML=new Date().getFullYear();
button.addEventListener("click",function(){
    navBar.classList.toggle("show-links");
   /* if(navBar.classList.contains("show-links")){
        navBar.classList.remove("show-links");
    }
    else{
        navBar.classList.add("show-links");
    }
    */
});

const scrollLinks=document.querySelectorAll(".scroll-links");
scrollLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        //to remove the links when clicked
         navBar.classList.toggle("show-links");
         //to go to the exact same id where clicked
         //first have to remove the default scroll
         e.preventDefault();
         //now buttons wont work
        //now navigate to specific spot
        const id=e.currentTarget.getAttribute("href").slice(1);
        const element=document.getElementById(id);
        let position=element.offsetTop -60;
        //60 is navheight
        window.scrollTo({
            left:0,
            top:position,
        });
    
    });
});