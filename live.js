/* =====================================
   PrediKick - live.js
===================================== */


const liveContainer = document.getElementById("liveMatches");


// Demo Live Data
// পরে এখানে Football API যুক্ত হবে

const liveMatches = [

{
league:"Premier League",
home:"Arsenal",
away:"Chelsea",
homeLogo:"https://placehold.co/60x60",
awayLogo:"https://placehold.co/60x60",
score:"1 - 0",
minute:"67'"
},


{
league:"La Liga",
home:"Barcelona",
away:"Sevilla",
homeLogo:"https://placehold.co/60x60",
awayLogo:"https://placehold.co/60x60",
score:"2 - 1",
minute:"81'"
},


{
league:"Serie A",
home:"Inter",
away:"Juventus",
homeLogo:"https://placehold.co/60x60",
awayLogo:"https://placehold.co/60x60",
score:"0 - 0",
minute:"34'"
}

];



function showLiveMatches(matches){

if(!liveContainer) return;


let html="";


matches.forEach(match=>{


html += `

<div class="live-card">


<div class="league">
${match.league}
</div>


<div class="live-teams">


<div class="team">

<img src="${match.homeLogo}">

<h3>${match.home}</h3>

</div>


<div class="score">

<h2>${match.score}</h2>

<p>${match.minute}</p>

</div>


<div class="team">

<img src="${match.awayLogo}">

<h3>${match.away}</h3>

</div>


</div>


</div>

`;

});


liveContainer.innerHTML = html;


}



showLiveMatches(liveMatches);



// Search Function

const searchLive = document.getElementById("searchLive");


if(searchLive){


searchLive.addEventListener("keyup",()=>{


let value = searchLive.value.toLowerCase();


let filtered = liveMatches.filter(match=>{


return (

match.home.toLowerCase().includes(value)

||

match.away.toLowerCase().includes(value)

);


});


showLiveMatches(filtered);


});


}
