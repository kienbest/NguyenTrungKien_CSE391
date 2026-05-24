const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const taskModal = document.getElementById("taskModal");

const taskForm = document.getElementById("taskForm");

const taskList = document.getElementById("taskList");

const modalTitle = document.getElementById("modalTitle");

const messageBox = document.getElementById("messageBox");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/* =========================
    MODAL
========================= */

openModalBtn.addEventListener("click", () => {
    openModal();
});

closeModalBtn.addEventListener("click", () => {
    closeModal();
});

function openModal() {
    taskModal.classList.add("active");
}

function closeModal() {
    taskModal.classList.remove("active");
    taskForm.reset();

    document.getElementById("taskId").value = "";

    modalTitle.textContent = "Thêm công việc";
}

/* =========================
    SAVE LOCAL STORAGE
========================= */

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* =========================
    SHOW MESSAGE
========================= */

function showMessage(message) {
    messageBox.textContent = message;

    messageBox.style.display = "block";

    setTimeout(() => {
        messageBox.style.display = "none";
    }, 2000);
}

/* =========================
    UPDATE SUMMARY
========================= */

function updateTaskSummary() {

    totalTasks.textContent = tasks.length;

    const completed = tasks.filter(task => task.completed).length;

    completedTasks.textContent = completed;

    pendingTasks.textContent = tasks.length - completed;
}

/* =========================
    RENDER TASKS
========================= */

function renderTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty">
                Chưa có công việc nào
            </div>
        `;
        updateTaskSummary();
        return;
    }

    tasks.forEach(task => {

        const priorityClass =
            task.priority === "Cao"
            ? "high"
            : task.priority === "Trung bình"
            ? "medium"
            : "low";

        const taskCard = document.createElement("div");

        taskCard.className = `
            task-card
            ${task.completed ? "completed-task" : ""}
        `;

        taskCard.innerHTML = `
            <h3>${task.title}</h3>

            <p>${task.description}</p>

            <p>
                <strong>Hạn:</strong>
                ${task.deadline}
            </p>

            <span class="priority ${priorityClass}">
                ${task.priority}
            </span>

            <p>
                Trạng thái:
                <strong>
                    ${task.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
                </strong>
            </p>

            <div class="task-actions">

                <button
                    class="status-btn"
                    onclick="toggleTask(${task.id})"
                >
                    ${task.completed ? "Hoàn tác" : "Hoàn thành"}
                </button>

                <button
                    class="edit-btn"
                    onclick="editTask(${task.id})"
                >
                    Sửa
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})"
                >
                    Xóa
                </button>

            </div>
        `;

        taskList.appendChild(taskCard);
    });

    updateTaskSummary();
}

/* =========================
    ADD / UPDATE TASK
========================= */

taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const id = document.getElementById("taskId").value;

    const title = document.getElementById("title").value;

    const description =
        document.getElementById("description").value;

    const deadline =
        document.getElementById("deadline").value;

    const priority =
        document.getElementById("priority").value;

    if (id) {

        // UPDATE

        const task = tasks.find(task => task.id == id);

        task.title = title;
        task.description = description;
        task.deadline = deadline;
        task.priority = priority;

        showMessage("Cập nhật công việc thành công");

    } else {

        // ADD

        const newTask = {
            id: Date.now(),
            title,
            description,
            deadline,
            priority,
            completed: false
        };

        tasks.push(newTask);

        showMessage("Thêm công việc thành công");
    }

    saveTasks();

    renderTasks();

    closeModal();
});

/* =========================
    EDIT TASK
========================= */

function editTask(id) {

    const task = tasks.find(task => task.id === id);

    document.getElementById("taskId").value = task.id;

    document.getElementById("title").value = task.title;

    document.getElementById("description").value =
        task.description;

    document.getElementById("deadline").value =
        task.deadline;

    document.getElementById("priority").value =
        task.priority;

    modalTitle.textContent = "Cập nhật công việc";

    openModal();
}

/* =========================
    DELETE TASK
========================= */

function deleteTask(id) {

    const confirmDelete =
        confirm("Bạn có chắc muốn xóa công việc này?");

    if (!confirmDelete) return;

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();

    renderTasks();

    showMessage("Xóa công việc thành công");
}

/* =========================
    TOGGLE STATUS
========================= */

function toggleTask(id) {

    const task = tasks.find(task => task.id === id);

    task.completed = !task.completed;

    saveTasks();

    renderTasks();

    showMessage("Cập nhật trạng thái thành công");
}

/* =========================
    INIT
========================= */

renderTasks();