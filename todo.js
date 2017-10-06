var todoList = {
	todos: [],
	addTodo: function (todoText) { // addTodo('hi')
		this.todos.push({
			todoText: todoText, // todoTest: "hi"
			completed: false
		});
	},
	changeTodo: function (position, todoText) {
		this.todos[position].todoText = todoText;
	},
	deleteTodo: function (position) {
		this.todos.splice(position, 1);
	},
	toggleCompleted: function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
	},
	toggleAll: function () {
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		// get number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		// Case1, if everything is true, make everything false
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
			// Case2, otherwise, make everything true
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
	}
}

<<<<<<< HEAD
<<<<<<< Updated upstream
// We want to get access to the display todos button
var displayTodosButton = document.getElementById("displayTodosButton");
var toggleAllButton = document.getElementById("toggleAllButton");

// We want to run displayTodos method, when someone clicks te display todos button
displayTodosButton.addEventListener("click", function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener("click", function() {
  todoList.toggleAll();
})

 























=======
=======
>>>>>>> master
var handlers = {
	addTodo: function () {
		var addTodoTextInput = document.getElementById("addTodoTextInput");
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = "";
		view.displayTodos();
	},
	changeTodo: function () {
		var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
		var changeTodoTextInput = document.getElementById("changeTodoTextInput");
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = "";
		view.displayTodos();
	},
<<<<<<< HEAD
	deleteTodo: function (position) {
		todoList.deleteTodo(position);
=======
	deleteTodo: function () {
		var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = "";
>>>>>>> master
		view.displayTodos();
	},
	toggleCompleted: function () {
		var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = "";
		view.displayTodos();
	},
	toggleAll: function () {
		todoList.toggleAll();
		view.displayTodos();
	}
};

var view = {
	displayTodos: function () {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement('li');
			var todo = todoList.todos[i];
			var todoTextWithCompletion = '';

			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

<<<<<<< HEAD
			todoLi.id = i;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}
	},
	createDeleteButton: function () {
		var deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.className = "deleteButton";
		return deleteButton;
	},
	setUpEventListeners: function () {
		var todoUl = document.querySelector('ul');

		todoUl.addEventListener('click', function (event) {
			// get te element tat was clicked on
			var elementClicked = event.target;
			// check if elementClicked is a delete button
			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();
>>>>>>> Stashed changes

=======
			todoLi.textContent = todoTextWithCompletion;
			todosUl.appendChild(todoLi);
		}
	}
};
>>>>>>> master
