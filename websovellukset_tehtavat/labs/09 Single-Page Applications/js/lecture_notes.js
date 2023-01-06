const addPage = document.querySelector("#addPage");
const editPage = document.querySelector("#editPage");

let notes = [];

window.onload = () => {
	/*
 	* displays the 'add' screen if this has been bookmarked by user
	*/
	if (window.location.hash == '#add' || notes.length === 0) {
		addPage.classList.remove("hidden");
		editPage.classList.add("hidden");
	} else if(window.location.hash == '#edit' && notes.length !== 0){
		editPage.classList.remove("hidden");
		addPage.classList.add("hidden");
		loadList();
	}

	editPage.querySelector("input[type='text']").onchange = () => {
		updateNote();
		loadList();
	}

	editPage.querySelector("textarea").onchange = () => {
		updateNote();
	}
}

/*
 * handles navigation between the add and edit 'screens'
 */
document.querySelector('#addPageA').onclick = function() {
	addPage.classList.remove("hidden");
	editPage.classList.add("hidden");
};

document.querySelector('#editPageA').onclick = function() {
	editPage.classList.remove("hidden");
	addPage.classList.add("hidden");
	loadList();
};

document.querySelector('#addPage button').onclick = function() {
	const titleInput = document.querySelector('#addPage input');
	const noteInput = document.querySelector('#addPage textarea');
	const title = titleInput.value;
	const note = noteInput.value;
	titleInput.value = "";
	noteInput.value = "";

	let notesObj = {};
	notesObj.title = title;
	notesObj.note = note;
	notes.push(notesObj);
};

function updateNote() {
	const title = document.querySelector('#editPage input').value;
	const note = document.querySelector('#editPage textarea').value;
	const id = parseInt(document.querySelector('#editPage p').innerHTML, 10);

	const updated = {title: title, note: note};
	notes[id] = {title: title, note: note};
}

function display(element) {
	console.log(element.parentNode.parentNode.id);
	const details = document.getElementById('details');
	const id = element.parentNode.parentNode.id;
	document.querySelector('#editPage input').value = notes[id].title;
	document.querySelector('#editPage textarea').value = notes[id].note;
	document.querySelector('#editPage p').innerHTML = id;
}

function rem(element) {
	console.log('remove');
	var id = element.parentNode.parentNode.id;
	console.log(id);
	notes.splice(id, 1);
	loadList();
	var editId = parseInt(document.querySelector('#editPage p').innerHTML, 10);
	console.log('id: '+id);
	console.log('editId: '+editId);
	if (id == editId) {
		console.log('deleted document being edited!');
		document.querySelector('#editPage input').value = '';
		document.querySelector('#editPage textarea').value = '';
	}
}

function loadList() {
	const table = document.getElementById('list');
	table.innerHTML = '';
	for (let i=0; i<notes.length; i++) {
		const row = document.createElement('tr');
		row.id = i;
		row.innerHTML = '<td><a onclick="display(this)" href="#">'+notes[i].title+'</a></td><td><a onclick="rem(this)" class="delete" href="#">delete</a></td>';
		table.appendChild(row);
	}
}