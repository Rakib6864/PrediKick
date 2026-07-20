/* =====================================
   PrediKick - api.js
===================================== */


// Football API Configuration

const API_KEY = "1db6f76e7e16451244f6a725a02582ab";

const API_URL = "https://v3.football.api-sports.io";



// API Request Function

async function fetchFootball(endpoint){


try{


const response = await fetch(
API_URL + endpoint,
{

method:"GET",

headers:{

"x-apisports-key": API_KEY

}

}

);



const data = await response.json();


return data;



}catch(error){


console.log(
"API Error:",
error
);


return null;


}


}




// Get Live Matches

async function getLiveMatches(){


const matches = await fetchFootball(
"/fixtures?live=all"
);


return matches;


}




// Get Today's Matches

async function getTodayMatches(){


const today = new Date()
.toISOString()
.split("T")[0];



const matches = await fetchFootball(
`/fixtures?date=${today}`
);



return matches;


}





// Get League Fixtures

async function getLeagueMatches(league,season){


const matches = await fetchFootball(

`/fixtures?league=${league}&season=${season}`

);



return matches;


}




// Export

console.log(
"PrediKick API Ready ⚽"
);
