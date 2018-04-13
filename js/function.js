/*
var nuevaTarea = document.createElement('li');

function nuevaTarea {
 	document.#pendientes.appendChild(nuevaTarea);
}


var changeToOtherList = ;

function changeToOtherList {

}
*/

var formulario = document.getElementById("inputTaskForm");
formulario.addEventListener("submit", addTask);

function addTask(e) {
	e.preventDefault();
	var taskText = document.getElementById('inputTask').value;
	var liElement = document.createElement('li');
	var taskText = document.createTextNode(taskText);
	liElement.appendChild(taskText);
	document.getElementById('todo-list').appendChild(liElement);
	liElement.addEventListener("click", changeToOtherList)
}

// var evenTarget = document.getElementById("removeLi")
// eventTarget.removeEventListener("todo-list").

function changeToOtherList(e) {
	var changeList = document.getElementById('todo-list');
	var liElement = document.createElement('li');
	var changeList = document.createTextNode(changeList);
	liElement.appendChild(changeList);
	document.getElementById('done-list').appendChild(liElement);
	console.log("prueba");
}
