/* =====================================
   PrediKick - prediction.js
===================================== */


const predictionList = document.getElementById("predictionList");


// Demo Prediction Data
// পরে এখানে Football Prediction API যুক্ত হবে

const predictions = [

{
home:"Manchester City",
away:"Arsenal",
league:"Premier League",
prediction:"Home Win",
probability:"65%",
btts:"Yes",
over:"Over 2.5",
score:"2-1"
},


{
home:"Barcelona",
away:"Atletico Madrid",
league:"La Liga",
prediction:"BTTS Yes",
probability:"72%",
btts:"Yes",
over:"Over 2.5",
score:"2-2"
},


{
home:"Bayern Munich",
away:"Dortmund",
league:"Bundesliga",
prediction:"Home Win",
probability:"60%",
btts:"Yes",
over:"Over 3.5",
score:"3-1"
}


];



function showPredictions(data){


if(!predictionList) return;


let html="";


data.forEach(match=>{


html += `


<div class="prediction-card">


<h3>
${match.home} vs ${match.away}
</h3>


<p>
🏆 League: ${match.league}
</p>


<p>
✅ Prediction: ${match.prediction}
</p>


<p>
📊 Win Probability: ${match.probability}
</p>


<p>
⚽ BTTS: ${match.btts}
</p>


<p>
🔥 ${match.over}
</p>


<p>
🎯 Correct Score: ${match.score}
</p>


<a href="match.html">
View Details →
</a>


</div>


`;


});


predictionList.innerHTML = html;


}



showPredictions(predictions);





// Search Prediction

const searchPrediction = document.getElementById("searchPrediction");


if(searchPrediction){


searchPrediction.addEventListener("keyup",()=>{


let value = searchPrediction.value.toLowerCase();



let filtered = predictions.filter(match=>{


return (

match.home.toLowerCase().includes(value)

||

match.away.toLowerCase().includes(value)

||

match.league.toLowerCase().includes(value)

);


});



showPredictions(filtered);



});


}
