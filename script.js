/* ==========================================
   PrediKick - script.js
   Part 1
========================================== */

// Current Year
const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML = `© ${year} PrediKick. All Rights Reserved.`;
}


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// Search Box

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

document.querySelectorAll(".prediction-card").forEach(card=>{

let text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}


// Featured Card Hover Effect

const featured = document.querySelector(".featured-card");

if(featured){

featured.addEventListener("mouseenter",()=>{

featured.style.transform="translateY(-6px)";
featured.style.transition=".3s";

});

featured.addEventListener("mouseleave",()=>{

featured.style.transform="translateY(0px)";

});

}


