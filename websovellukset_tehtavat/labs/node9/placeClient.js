const form = document.querySelector("form");
const nameInput = form.querySelector("#placeName");
const addressInput = form.querySelector("#address");
const eventDateInput = form.querySelector("#eventDate");
const submitBtn = form.querySelector("input[type='submit']");
const resultDiv = document.querySelector("#result");
const showLastBtn = document.querySelector("#showLast");

submitBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    saveEvent();
});

showLastBtn.addEventListener("click", (evt) => {
    findEvents();
});

async function saveEvent() {
    const name = nameInput.value;
    const address = addressInput.value;
    const eventDate = eventDateInput.value;

    const sendingData = {
        name: name,
        address: address,
        eventDate: eventDate
    };

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sendingData)
    };

    const res = await fetch("/events", fetchOptions);
    const json = await res.json();
    console.log(json);
}

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

