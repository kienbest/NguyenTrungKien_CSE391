// ================= DOM =================

const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");

const nameStatus = document.querySelector("#nameStatus");
const emailError = document.querySelector("#emailError");
const confirmError = document.querySelector("#confirmError");

const strengthFill = document.querySelector("#strengthFill");
const strengthText = document.querySelector("#strengthText");

const submitBtn = document.querySelector("#submitBtn");

const modal = document.querySelector("#modal");

// ================= VALIDATE NAME =================

function validateName() {
    const value = nameInput.value.trim();

    if (value.length >= 2 && value.length <= 50) {
        nameStatus.textContent = "✅";
        return true;
    }

    nameStatus.textContent = "❌";
    return false;
}

// ================= VALIDATE EMAIL =================

function validateEmail() {

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const value = emailInput.value.trim();

    if (emailRegex.test(value)) {

        emailError.textContent = "";
        return true;

    }

    if (value === "") {
        emailError.textContent = "Email không được để trống";
    } else {
        emailError.textContent = "Email không hợp lệ";
    }

    return false;
}

// ================= PASSWORD STRENGTH =================

function updatePasswordStrength() {

    const password = passwordInput.value;

    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    if (password.length < 8) {

        strengthFill.style.width = "33%";
        strengthFill.style.background = "red";

        strengthText.textContent = "Yếu";

        return false;
    }

    if (
        hasUpper &&
        hasLower &&
        hasNumber &&
        hasSpecial
    ) {

        strengthFill.style.width = "100%";
        strengthFill.style.background = "green";

        strengthText.textContent = "Mạnh";

        return true;
    }

    strengthFill.style.width = "66%";
    strengthFill.style.background = "orange";

    strengthText.textContent = "Trung bình";

    return true;
}

// ================= CONFIRM PASSWORD =================

function validateConfirm() {

    if (confirmInput.value === "") {

        confirmError.textContent = "";
        return false;

    }

    if (
        passwordInput.value ===
        confirmInput.value
    ) {

        confirmError.textContent = "";
        return true;

    }

    confirmError.textContent =
        "Mật khẩu không khớp";

    return false;
}

// ================= PHONE =================

function formatPhone() {

    let value =
        phoneInput.value.replace(/\D/g, "");

    value = value.substring(0, 10);

    if (value.length > 4) {
        value =
            value.replace(
                /(\d{4})(\d+)/,
                "$1-$2"
            );
    }

    if (value.length > 8) {
        value =
            value.replace(
                /(\d{4})-(\d{3})(\d+)/,
                "$1-$2-$3"
            );
    }

    phoneInput.value = value;
}

function validatePhone() {

    const digits =
        phoneInput.value.replace(/\D/g, "");

    return digits.length === 10;
}

// ================= SUBMIT BUTTON =================

function updateSubmitButton() {

    const valid =

        validateName() &&
        validateEmail() &&
        updatePasswordStrength() &&
        validateConfirm() &&
        validatePhone();

    submitBtn.disabled = !valid;
}

// ================= EVENTS =================

nameInput.addEventListener("input", () => {

    validateName();
    updateSubmitButton();

});

emailInput.addEventListener("input", () => {

    validateEmail();
    updateSubmitButton();

});

passwordInput.addEventListener("input", () => {

    updatePasswordStrength();
    validateConfirm();
    updateSubmitButton();

});

confirmInput.addEventListener("input", () => {

    validateConfirm();
    updateSubmitButton();

});

phoneInput.addEventListener("input", () => {

    formatPhone();
    updateSubmitButton();

});

// ================= SUBMIT =================

form.addEventListener("submit", (e) => {

    e.preventDefault();

    modal.innerHTML = `

        <div class="modal-overlay">

            <div class="modal-content">

                <h2>🎉 Đăng ký thành công!</h2>

                <p>
                    <strong>Họ tên:</strong>
                    ${nameInput.value}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${emailInput.value}
                </p>

                <p>
                    <strong>SĐT:</strong>
                    ${phoneInput.value}
                </p>

                <button id="closeModal">
                    Đóng
                </button>

            </div>

        </div>

    `;

});

// ================= CLOSE MODAL =================

modal.addEventListener("click", (e) => {

    if (
        e.target.id === "closeModal" ||
        e.target.classList.contains("modal-overlay")
    ) {

        modal.innerHTML = "";

    }

});

// ================= INIT =================

updateSubmitButton();