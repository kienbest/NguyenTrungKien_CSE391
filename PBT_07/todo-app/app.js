const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");

const todoList = document.querySelector("#todoList");

const countDisplay = document.querySelector("#count");

const clearCompletedBtn =
    document.querySelector("#clearCompleted");

const filterButtons =
    document.querySelectorAll(".filter");

let todos =
    JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

renderTodos();

/* -------------------- ADD -------------------- */

todoForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const text = todoInput.value.trim();

    if (!text) return;

    todos.push({
        id: Date.now(),
        text,
        completed:false
    });

    todoInput.value = "";

    saveTodos();
    renderTodos();
});

/* -------------------- FILTER -------------------- */

filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        currentFilter = btn.dataset.filter;

        filterButtons.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        renderTodos();
    });

});

/* -------------------- EVENT DELEGATION -------------------- */

todoList.addEventListener("click", (e) => {

    const li = e.target.closest("li");

    if (!li) return;

    const id = Number(li.dataset.id);

    /* DELETE */

    if (e.target.classList.contains("delete-btn")) {

        todos = todos.filter(todo =>
            todo.id !== id
        );

        saveTodos();
        renderTodos();

        return;
    }

    /* TOGGLE */

    if (e.target.classList.contains("todo-text")) {

        const todo = todos.find(t =>
            t.id === id
        );

        todo.completed = !todo.completed;

        saveTodos();
        renderTodos();
    }

});

/* -------------------- EDIT -------------------- */

todoList.addEventListener("dblclick", (e) => {

    if (!e.target.classList.contains("todo-text"))
        return;

    const li = e.target.closest("li");

    const id = Number(li.dataset.id);

    const oldText = e.target.textContent;

    const input =
        document.createElement("input");

    input.value = oldText;

    input.className = "edit-input";

    e.target.replaceWith(input);

    input.focus();

    input.addEventListener("keydown", ev => {

        if (ev.key === "Enter") {

            const todo =
                todos.find(t => t.id === id);

            todo.text = input.value.trim();

            saveTodos();
            renderTodos();
        }

    });

});

/* -------------------- CLEAR COMPLETED -------------------- */

clearCompletedBtn.addEventListener("click", () => {

    todos = todos.filter(todo =>
        !todo.completed
    );

    saveTodos();
    renderTodos();

});

/* -------------------- SAVE -------------------- */

function saveTodos() {

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

}

/* -------------------- COUNT -------------------- */

function updateCount() {

    const activeCount =
        todos.filter(todo =>
            !todo.completed
        ).length;

    countDisplay.textContent =
        `${activeCount} items left`;

}

/* -------------------- RENDER -------------------- */

function renderTodos() {

    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {

        filteredTodos =
            todos.filter(todo =>
                !todo.completed
            );

    }

    if (currentFilter === "completed") {

        filteredTodos =
            todos.filter(todo =>
                todo.completed
            );

    }

    filteredTodos.forEach(todo => {

        const li =
            document.createElement("li");

        li.className =
            "todo-item";

        if (todo.completed) {
            li.classList.add("completed");
        }

        li.dataset.id = todo.id;

        const span =
            document.createElement("span");

        span.className =
            "todo-text";

        span.textContent =
            todo.text;

        const deleteBtn =
            document.createElement("button");

        deleteBtn.className =
            "delete-btn";

        deleteBtn.textContent =
            "❌";

        li.appendChild(span);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);

    });

    updateCount();
}
