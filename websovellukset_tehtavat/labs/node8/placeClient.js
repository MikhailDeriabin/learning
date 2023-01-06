const form = document.querySelector("form");
const nameInput = form.querySelector("#placeName");
const submitBtn = form.querySelector("input[type='submit']");
const resultDiv = document.querySelector("#result");

submitBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    findEvents();
})

function findEvents() {
    const name = nameInput.value;

    if (name.length === 0) { // fix this and support empty field
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
                    resultDiv.textContent = "Ei löydy mitään.";
                }
            }
        };
        xmlhttp.open("GET", "http://localhost:8081/events?name=" + name, true);
        xmlhttp.send();
    }
}

function displayEvents(json) {
    resultDiv.innerHTML = "";
    const ul = document.createElement("ul");

    for(let i=0; i<json.length; i++){
        const li = document.createElement("li");
        li.textContent = "Nimi: " + json[i].Name + ", osoite: " + json[i].Street_address + " " + json[i].City;
        ul.appendChild(li);
    }

    resultDiv.appendChild(ul);
}

