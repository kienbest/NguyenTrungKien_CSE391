// ======================
// DOM ELEMENTS
// ======================

const openModalBtn =
    document.getElementById("openModalBtn");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const cancelBtn =
    document.getElementById("cancelBtn");

const modal =
    document.getElementById("modal");

const studentForm =
    document.getElementById("studentForm");

const studentTableBody =
    document.getElementById("studentTableBody");

const message =
    document.getElementById("message");

const totalStudents =
    document.getElementById("totalStudents");

const averageScore =
    document.getElementById("averageScore");

const formTitle =
    document.getElementById("formTitle");

const submitBtn =
    document.getElementById("submitBtn");

// INPUTS

const studentIdInput =
    document.getElementById("studentId");

const studentNameInput =
    document.getElementById("studentName");

const studentBirthdayInput =
    document.getElementById("studentBirthday");

const studentClassInput =
    document.getElementById("studentClass");

const studentScoreInput =
    document.getElementById("studentScore");

const studentEmailInput =
    document.getElementById("studentEmail");


// ======================
// DATA
// ======================

let students = [];

let editIndex = null;


// ======================
// LOAD DATA
// ======================

loadStudents();

renderStudents();

updateStatistics();


// ======================
// OPEN MODAL
// ======================

openModalBtn.addEventListener(
    "click",
    function () {

        modal.style.display = "flex";

        formTitle.innerText = "Thêm sinh viên";

        submitBtn.innerText = "Lưu sinh viên";

        resetForm();

        editIndex = null;

    }
);


// ======================
// CLOSE MODAL
// ======================

closeModalBtn.addEventListener(
    "click",
    closeModal
);

cancelBtn.addEventListener(
    "click",
    closeModal
);


// ======================
// CLOSE MODAL FUNCTION
// ======================

function closeModal() {

    modal.style.display = "none";

    resetForm();

}


// ======================
// SUBMIT FORM
// ======================

studentForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        // LẤY DỮ LIỆU

        const id =
            studentIdInput.value.trim();

        const name =
            studentNameInput.value.trim();

        const birthday =
            studentBirthdayInput.value;

        const className =
            studentClassInput.value.trim();

        const score =
            studentScoreInput.value;

        const email =
            studentEmailInput.value.trim();

        // VALIDATION

        if (
            id === "" ||
            name === "" ||
            birthday === "" ||
            className === "" ||
            score === "" ||
            email === ""
        ) {

            showMessage(
                "Vui lòng nhập đầy đủ thông tin",
                "red"
            );

            return;
        }

        // TẠO OBJECT

        const student = {
            id,
            name,
            birthday,
            className,
            score,
            email
        };

        // THÊM HOẶC SỬA

        if (editIndex === null) {

            // THÊM

            students.push(student);

            showMessage(
                "Thêm sinh viên thành công",
                "green"
            );

        } else {

            // UPDATE

            students[editIndex] = student;

            showMessage(
                "Cập nhật sinh viên thành công",
                "green"
            );

        }

        // LƯU LOCAL

        saveStudents();

        // RENDER

        renderStudents();

        // UPDATE THỐNG KÊ

        updateStatistics();

        // RESET

        resetForm();

        // ĐÓNG MODAL

        closeModal();

        // RESET EDIT MODE

        editIndex = null;

    }
);


// ======================
// RENDER STUDENTS
// ======================

function renderStudents() {

    studentTableBody.innerHTML = "";

    // KHÔNG CÓ DỮ LIỆU

    if (students.length === 0) {

        studentTableBody.innerHTML = `
            <tr>
                <td
                    colspan="7"
                    class="empty-row"
                >
                    Chưa có sinh viên nào
                </td>
            </tr>
        `;

        return;
    }

    // RENDER DỮ LIỆU

    students.forEach(function (student, index) {

        const row = `
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.birthday}</td>

                <td>${student.className}</td>

                <td>${student.score}</td>

                <td>${student.email}</td>

                <td>

                    <button
                        class="edit-btn"
                        data-index="${index}"
                    >
                        Sửa
                    </button>

                    <button
                        class="delete-btn"
                        data-index="${index}"
                    >
                        Xóa
                    </button>

                </td>

            </tr>
        `;

        studentTableBody.innerHTML += row;

    });

}


// ======================
// EVENT DELEGATION
// ======================

studentTableBody.addEventListener(
    "click",
    function (event) {

        // ======================
        // DELETE
        // ======================

        if (
            event.target.classList.contains(
                "delete-btn"
            )
        ) {

            const index =
                event.target.dataset.index;

            const isConfirm = confirm(
                "Bạn có chắc muốn xóa sinh viên này?"
            );

            if (isConfirm) {

                students.splice(index, 1);

                saveStudents();

                renderStudents();

                updateStatistics();

                showMessage(
                    "Xóa sinh viên thành công",
                    "red"
                );

            }

        }

        // ======================
        // EDIT
        // ======================

        if (
            event.target.classList.contains(
                "edit-btn"
            )
        ) {

            const index =
                event.target.dataset.index;

            const student =
                students[index];

            // ĐƯA DỮ LIỆU LÊN FORM

            studentIdInput.value =
                student.id;

            studentNameInput.value =
                student.name;

            studentBirthdayInput.value =
                student.birthday;

            studentClassInput.value =
                student.className;

            studentScoreInput.value =
                student.score;

            studentEmailInput.value =
                student.email;

            // EDIT MODE

            editIndex = index;

            // ĐỔI TITLE

            formTitle.innerText =
                "Cập nhật sinh viên";

            submitBtn.innerText =
                "Cập nhật";

            // MỞ MODAL

            modal.style.display = "flex";

        }

    }
);


// ======================
// SAVE LOCAL STORAGE
// ======================

function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}


// ======================
// LOAD LOCAL STORAGE
// ======================

function loadStudents() {

    const data =
        localStorage.getItem("students");

    if (data) {

        students = JSON.parse(data);

    }

}


// ======================
// RESET FORM
// ======================

function resetForm() {

    studentIdInput.value = "";

    studentNameInput.value = "";

    studentBirthdayInput.value = "";

    studentClassInput.value = "";

    studentScoreInput.value = "";

    studentEmailInput.value = "";

}


// ======================
// UPDATE STATISTICS
// ======================

function updateStatistics() {

    // TỔNG SINH VIÊN

    totalStudents.innerText =
        students.length;

    // TÍNH ĐIỂM TB

    let total = 0;

    students.forEach(function (student) {

        total += Number(student.score);

    });

    let average = 0;

    if (students.length > 0) {

        average =
            total / students.length;

    }

    averageScore.innerText =
        average.toFixed(2);

}


// ======================
// SHOW MESSAGE
// ======================

function showMessage(text, color) {

    message.innerText = text;

    message.style.color = color;

    // TỰ ẨN SAU 3 GIÂY

    setTimeout(function () {

        message.innerText = "";

    }, 3000);

}


// ======================
// ĐÓNG MODAL KHI CLICK RA NGOÀI
// ======================

window.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            closeModal();

        }

    }
);