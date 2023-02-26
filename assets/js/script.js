"use strict"

let menues=document.querySelectorAll(".list p");
let icons=document.querySelectorAll(".list p i");
let texts=document.querySelectorAll(".about p");


menues.forEach(menu => {
    menu.addEventListener("click",function(){
        document.querySelector(".active").classList.remove("active")
        this.classList.add("active")

        texts.forEach(text => {
            if(this.getAttribute("data-id")==text.getAttribute("data-id")){
             text.classList.remove("d-none")
            }
            else{
             text.classList.add("d-none")
            }
     
         });
         
        icons.forEach(icon => {
            if(this.getAttribute("data-id")==icon.getAttribute("data-id")){
             icon.classList.remove("d-none")
            }
            else{
             icon.classList.add("d-none")
            }
     
         });
    })

   


});