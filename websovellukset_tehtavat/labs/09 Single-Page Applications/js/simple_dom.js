console.log(document);

const userInputs = document.querySelectorAll("#userForm input");
const infoElems = document.querySelectorAll("#summary *");

for(let i=0; i<userInputs.length; i++){
	userInputs[i].addEventListener("keyup", () => {
		const inputValue = userInputs[i].value;
		showInputContent(userInputs[i].id, inputValue);
	});

}

function showInputContent(inputId, inputValue){
	for(let i=0; i<infoElems.length; i++){
		if(infoElems[i].dataset.input === inputId){
			infoElems[i].textContent = inputValue;
			break;
		}
	}
}

const eventsDiv = document.querySelector("#eventsDiv");
const keydownInput = eventsDiv.querySelector("#keydownInput");
const keyupInput = eventsDiv.querySelector("#keyupInput");
const mouseoverInput = eventsDiv.querySelector("#mouseoverInput");
const mouseoutInput = eventsDiv.querySelector("#mouseoutInput");
const changeInput = eventsDiv.querySelector("#changeInput");
const clickInput = eventsDiv.querySelector("#clickInput");
const resultP = eventsDiv.querySelector("#resultP");

keydownInput.addEventListener("keydown", () => {
	resultP.textContent = "keydown event happened!";
});

keyupInput.addEventListener("keyup", () => {
	resultP.textContent = "keyup event happened!";
});

mouseoverInput.addEventListener("mouseover", () => {
	resultP.textContent = "mouseover event happened!";
});

mouseoutInput.addEventListener("mouseout", () => {
	resultP.textContent = "mouseout event happened!";
});

changeInput.addEventListener("change", () => {
	resultP.textContent = "change event happened!";
});

clickInput.addEventListener("click", () => {
	resultP.textContent = "click event happened!";
});