const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");

const submitBtn = document.querySelector("#submitBtn");

const strengthBar =
document.querySelector("#strengthBar");

const modal =
document.querySelector("#modal");

const result =
document.querySelector("#result");

let valid = {
    name:false,
    email:false,
    password:false,
    confirm:false,
    phone:false
};

nameInput.addEventListener("input",()=>{

    const value =
    nameInput.value.trim();

    if(
        value.length >= 2 &&
        value.length <= 50
    ){
        valid.name = true;
        nameMsg.textContent = "✅ Hợp lệ";
    }else{
        valid.name = false;
        nameMsg.textContent =
        "❌ Tên từ 2-50 ký tự";
    }

    updateSubmit();

});

emailInput.addEventListener("input",()=>{

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(
        regex.test(emailInput.value)
    ){
        valid.email = true;
        emailMsg.textContent = "✅ Email hợp lệ";
    }else{
        valid.email = false;
        emailMsg.textContent =
        "❌ Email không đúng định dạng";
    }

    updateSubmit();

});

passwordInput.addEventListener("input",()=>{

    const password =
    passwordInput.value;

    let strength = 0;

    if(password.length >= 8)
        strength++;

    if(
        /[A-Za-z]/.test(password)
        &&
        /\d/.test(password)
    )
        strength++;

    if(
        /[A-Z]/.test(password)
        &&
        /[a-z]/.test(password)
        &&
        /\d/.test(password)
        &&
        /[^A-Za-z0-9]/.test(password)
    )
        strength++;

    if(strength === 1){

        strengthBar.style.width =
        "33%";

        strengthBar.style.background =
        "red";

        passwordMsg.textContent =
        "Yếu";

        valid.password = false;
    }

    if(strength === 2){

        strengthBar.style.width =
        "66%";

        strengthBar.style.background =
        "orange";

        passwordMsg.textContent =
        "Trung bình";

        valid.password = true;
    }

    if(strength === 3){

        strengthBar.style.width =
        "100%";

        strengthBar.style.background =
        "green";

        passwordMsg.textContent =
        "Mạnh";

        valid.password = true;
    }

    if(strength === 0){

        strengthBar.style.width =
        "0%";

        passwordMsg.textContent = "";

        valid.password = false;
    }

    checkConfirm();
    updateSubmit();

});

confirmInput.addEventListener(
"input",
checkConfirm
);

function checkConfirm(){

    if(
        confirmInput.value ===
        passwordInput.value
        &&
        confirmInput.value !== ""
    ){

        valid.confirm = true;

        confirmMsg.textContent =
        "✅ Khớp mật khẩu";

    }else{

        valid.confirm = false;

        confirmMsg.textContent =
        "❌ Không khớp";

    }

    updateSubmit();

}

phoneInput.addEventListener(
"input",
()=>{

    let value =
    phoneInput.value.replace(/\D/g,"");

    value =
    value.substring(0,10);

    if(value.length > 4){
        value =
        value.slice(0,4)
        + "-"
        + value.slice(4);
    }

    if(value.length > 8){
        value =
        value.slice(0,8)
        + "-"
        + value.slice(8);
    }

    phoneInput.value = value;

    const digits =
    value.replace(/\D/g,"");

    if(digits.length === 10){

        valid.phone = true;

        phoneMsg.textContent =
        "✅ Hợp lệ";

    }else{

        valid.phone = false;

        phoneMsg.textContent =
        "❌ Cần 10 số";

    }

    updateSubmit();

});

function updateSubmit(){

    submitBtn.disabled =

        !valid.name ||
        !valid.email ||
        !valid.password ||
        !valid.confirm ||
        !valid.phone;

}

form.addEventListener(
"submit",
(e)=>{

    e.preventDefault();

    result.innerHTML = `
        <b>Họ tên:</b> ${nameInput.value}<br>
        <b>Email:</b> ${emailInput.value}<br>
        <b>Phone:</b> ${phoneInput.value}
    `;

    modal.classList.remove(
        "hidden"
    );

});

document
.querySelector("#closeModal")
.addEventListener(
"click",
()=>{

    modal.classList.add(
        "hidden"
    );

});