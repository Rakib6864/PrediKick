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

/* ==========================================
   PrediKick - script.js
   Part 2
========================================== */

// Reveal Animation
const cards = document.querySelectorAll(
".featured-card, .live-card, .prediction-card"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}else{

entry.target.style.opacity=".3";

}

});

},{
threshold:0.15
});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".6s ease";

observer.observe(card);

});


// Button Ripple Effect

document.querySelectorAll(".btn,.details-btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const x=e.offsetX;
const y=e.offsetY;

ripple.style.left=x+"px";
ripple.style.top=y+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


// Live Badge Blink

setInterval(()=>{

document.querySelectorAll(".score p").forEach(item=>{

item.style.opacity=item.style.opacity=="0.3"?"1":"0.3";

});

},700);


// Console Welcome

console.log("%c⚽ Welcome to PrediKick",
"color:#22c55e;font-size:18px;font-weight:bold;");

console.log("Football Prediction Platform Loaded.");


// Page Loaded

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
