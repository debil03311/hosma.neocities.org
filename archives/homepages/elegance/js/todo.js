const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Load items from cookies

const todoCookie = document.cookie.get("TODO");

const todoObject = (()=>{
	try {
		return JSON.parse(todoCookie);
	} catch (SyntaxError) {
		return new Object();
	}
})();

const todoObjectKeys = Object.keys(todoObject);

if (todoObjectKeys.length)
	for (const key of todoObjectKeys)
		addTodoItem(key);

todoInput.addEventListener("keydown",(e)=> {
	if (e.key == "Enter" && todoInput.value) {
		const isoTimestamp = new Date().toISOString();
		todoObject[isoTimestamp] = todoInput.value;

		setTodoCookie(todoObject);
		addTodoItem(isoTimestamp);
		todoInput.value = "";
	}
});

function setTodoCookie(object) {
	document.cookie.set({
		name: "TODO",
		value: JSON.stringify(object)
				.replace(/=/g,"＝")
				.replace(/;/g,"；")
	});
}

function addTodoItem(itemKey) {
	todoList.innerHTML += `<div class="todo-item" data-key="${itemKey}" onclick="removeTodoItem(this)">${todoObject[itemKey]}</div>`;
}

function removeTodoItem(sourceElement) {
	delete todoObject[sourceElement.dataset.key];

	setTodoCookie(todoObject);
	sourceElement.remove();
}