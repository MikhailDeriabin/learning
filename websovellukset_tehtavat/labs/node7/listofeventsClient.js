const form = document.querySelector("form");
const startdateInput = form.querySelector("#startingDate");
const enddateInput = form.querySelector("#endingDate");
const submitBtn = form.querySelector("input[type='submit']");
const resultDiv = document.querySelector("#result");

submitBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    findEvents();
})

function findEvents() {
    const startdate = startdateInput.value;
    const enddate= enddateInput.value;

    if (startdate.length === 0) { // fix this and support empty field
        return;
    } else {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                const json = JSON.parse(xmlhttp.responseText);

                if (json.length > 0){ // something found
                    displayEvents(json);
                }
                else {
                    document.getElementById("locationInfo").innerHTML = "<br/>Ei tapahtumatietoja tältä ajalta.";
                }
            }
        };
        xmlhttp.open("GET", "http://localhost:8081/events?start=" + startdate+"&end="+enddate, true);
        xmlhttp.send();
    }
}

function displayEvents(json) {
    resultDiv.innerHTML = "";
    const ul = document.createElement("ul");

    for(let i=0; i<json.length; i++){
        const li = document.createElement("li");
        li.textContent = "Nimi: " + json[i].name + ", päivä: " + json[i].date;
        ul.appendChild(li);
    }

    resultDiv.appendChild(ul);
}

