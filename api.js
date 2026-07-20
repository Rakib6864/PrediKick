// PrediKick API Mobile Test

const API_KEY = "1db6f76e7e16451244f6a725a02582ab";
const API_URL = "https://v3.football.api-sports.io";


async function testAPI(){

    const resultBox = document.createElement("pre");

    resultBox.style.background = "#111";
    resultBox.style.color = "#00ff00";
    resultBox.style.padding = "15px";
    resultBox.style.whiteSpace = "pre-wrap";
    resultBox.style.fontSize = "12px";


    document.body.appendChild(resultBox);


    try{

        resultBox.innerHTML = "Loading API Data...";


        const response = await fetch(
            `${API_URL}/fixtures?live=all`,
            {
                method:"GET",

                headers:{
                    "x-apisports-key": API_KEY
                }
            }
        );


        const data = await response.json();


        resultBox.innerHTML =
        JSON.stringify(data,null,2);


    }

    catch(error){

        resultBox.innerHTML =
        "API Error:\n" + error;

    }

}


testAPI();
