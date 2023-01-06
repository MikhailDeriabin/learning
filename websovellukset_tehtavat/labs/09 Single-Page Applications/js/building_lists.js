const request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
const data = JSON.parse(request.responseText);
console.log(data);

const books = data.books;

const table = document.createElement('table');
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
table.appendChild(thead);
table.appendChild(tbody);

const ths = [];
const trs = [];
for(const key in books){
	const th = document.createElement("th");
	thead.appendChild(th);
	ths.push(th);

	const tr = document.createElement("tr");
	tr.addEventListener("click", (evt) => {
		displayBookTitle(evt.target.parentElement.children[0].textContent);
	});
	tbody.appendChild(tr);
	trs.push(tr);
}

let n = 0;
for (const key in books[0]) {
	ths[n].textContent = key;
	n++;
}

for (let i=0; i < books.length; i++) {
	const bookInfo = books[i];

	for (const key in bookInfo){
		const td = document.createElement("td");
		td.textContent = bookInfo[key];
		trs[i].appendChild(td);
	}
}

document.body.appendChild(table);

function displayBookTitle(title){
	document.querySelector("#bookTitleH").textContent = title;
}