Câu A1
DOM TREE
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   │
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button[type="submit"]
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"

QuerySelector
1. Chọn thẻ <h1>
document.querySelector("h1");
2. Chọn input trong form
document.querySelector("#todoForm input");
3. Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");
4. Chọn link đang active
document.querySelector("a.active");
5. Chọn <li> đầu tiên trong #todoList
document.querySelector("#todoList li:first-child");
6. Chọn tất cả <a> bên trong <nav>
document.querySelectorAll("nav a");


Câu A2 
Sự khác nhau
innerHTML
Đọc hoặc ghi nội dung HTML.
Trình duyệt sẽ parse HTML thành DOM.

Ví dụ:

document.querySelector("#demo").innerHTML =
    "<b>Hello</b>";

Kết quả:

<b>Hello</b>

chữ Hello sẽ in đậm.

textContent
Chỉ xử lý văn bản thuần.
Không parse HTML.

Ví dụ:

document.querySelector("#demo").textContent =
    "<b>Hello</b>";

Kết quả hiển thị:

<b>Hello</b>

nguyên dạng ký tự.

Khi nào dùng?
innerHTML

Khi cần tạo HTML động.

Ví dụ:

list.innerHTML =
    "<li>HTML</li><li>CSS</li>";
textContent

Khi hiển thị dữ liệu người dùng nhập.

Ví dụ:

message.textContent = username;

An toàn hơn.

Tại sao innerHTML gây XSS?

Giả sử người dùng nhập:

<img src=x onerror="alert('Hacked!')">

Code:

const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").innerHTML =
    userInput;

Trình duyệt sẽ tạo thẻ:

<img src=x onerror="alert('Hacked!')">

Khi ảnh lỗi:

alert("Hacked!");

sẽ chạy.

Đây là lỗ hổng:

Cross-Site Scripting (XSS)
Cách sửa

Dùng:

const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").textContent =
    userInput;

Lúc này:

<img src=x onerror="alert('Hacked!')">

được hiển thị dưới dạng văn bản, không thực thi JavaScript.

Câu A3 

Code:

outer
inner
button

Cấu trúc:

outer
└── inner
    └── button

Khi click button:

Event xảy ra ở button
Bubbling lên inner
Bubbling lên outer
Output bình thường
BUTTON
INNER
OUTER
Nếu bỏ comment stopPropagation()
document.querySelector("#btn")
.addEventListener("click", (e) => {

    console.log("BUTTON");

    e.stopPropagation();

});

stopPropagation() chặn event nổi bọt lên các phần tử cha.

Output
BUTTON
Giải thích
Không dùng stopPropagation()
BUTTON
   ↑
INNER
   ↑
OUTER

Output:

BUTTON
INNER
OUTER
Có stopPropagation()
BUTTON
   X
INNER
OUTER

Output:

BUTTON

Vì event bị chặn ngay tại button nên không truyền lên inner và outer.

Câu C1
Các lỗi cần sửa
Lỗi 1
countDisplay.innerHTML = count;

Nên dùng:

countDisplay.textContent = count;

Vì chỉ hiển thị text.

Lỗi 2
addEventListener("onclick", ...)

Sai tên event.

Sửa:

addEventListener("click", ...)
Lỗi 3
countDisplay = count;

Sai vì:

countDisplay là DOM element
khai báo bằng const

Sửa:

countDisplay.textContent = count;
Lỗi 4
historyList.innerHTML = null;

Sửa:

historyList.innerHTML = "";
Lỗi 5
item.remove;

Thiếu dấu ().

Sửa:

item.remove();
Lỗi 6
count = localStorage.getItem("count");

getItem() trả về string.

Sửa:

count = Number(localStorage.getItem("count")) || 0;
Lỗi 7

Load count nhưng không load history.

Thiếu:

historyList.innerHTML =
    localStorage.getItem("history") || "";
Lỗi 8 (cải thiện)

Sau khi load history từ localStorage:

historyList.innerHTML = ...

các <li> mới sẽ không có event click để xóa.

Nên dùng Event Delegation:

historyList.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});
Code đã sửa
const countDisplay =
    document.querySelector(".count");

const historyList =
    document.getElementById("history");

let count = 0;

document.querySelector("#incrementBtn")
.addEventListener("click", () => {

    count++;

    countDisplay.textContent = count;

    const li =
        document.createElement("li");

    li.textContent =
        "Count changed to " + count;

    li.addEventListener("click", function () {
        deleteHistory(this);
    });

    historyList.appendChild(li);

});

document.querySelector("#decrementBtn")
.addEventListener("click", () => {

    count--;

    countDisplay.textContent = count;

});

document.querySelector("#resetBtn")
.addEventListener("click", () => {

    count = 0;

    countDisplay.textContent = count;

    historyList.innerHTML = "";

});

function deleteHistory(element) {

    element.parentNode.removeChild(element);

}

document.querySelector("#clearHistory")
.addEventListener("click", () => {

    const items =
        historyList.querySelectorAll("li");

    items.forEach(item => {
        item.remove();
    });

});

window.addEventListener("beforeunload", () => {

    localStorage.setItem("count", count);

    localStorage.setItem(
        "history",
        historyList.innerHTML
    );

});

window.addEventListener("load", () => {

    count =
        Number(
            localStorage.getItem("count")
        ) || 0;

    countDisplay.textContent = count;

    historyList.innerHTML =
        localStorage.getItem("history")
        || "";

});
Câu A2
Tại sao bind event cho 1000 phần tử là BAD PRACTICE?

Ví dụ:

items.forEach(item => {

    item.addEventListener(
        "click",
        handleClick
    );

});

Nếu có:

1000 phần tử

thì:

1000 event listeners

được tạo.

Hậu quả:

Tốn RAM
Tốn CPU khi khởi tạo
Chậm khi DOM lớn
Khó bảo trì
Phần tử thêm mới phải bind lại
Event Delegation

Thay vì:

1000 phần tử
↓
1000 listeners

Ta làm:

Parent
↓
1 listener

Ví dụ:

document.querySelector("#list")
.addEventListener("click", e => {

    if (
        e.target.matches(".item")
    ) {

        console.log(
            e.target.textContent
        );

    }

});

Nhờ Event Bubbling:

item
↑
parent

chỉ cần 1 listener.

Refactor bằng DocumentFragment
Code cũ
for (let i = 0; i < 1000; i++) {

    const div =
        document.createElement("div");

    div.textContent =
        `Item ${i}`;

    document.body.appendChild(div);

}

Mỗi lần:

appendChild()

có thể gây:

reflow
repaint

1000 lần.

Code tối ưu
const fragment =
    document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {

    const div =
        document.createElement("div");

    div.textContent =
        `Item ${i}`;

    fragment.appendChild(div);

}

document.body.appendChild(fragment);
Tại sao nhanh hơn?
Cách cũ
append
↓
reflow

append
↓
reflow

append
↓
reflow

...
1000 lần
DocumentFragment
Tạo 1000 div
↓
Lưu trong fragment
↓
append fragment
↓
1 lần cập nhật DOM
↓
1 lần reflow
Kết luận
Event Delegation
1000 phần tử → 1 listener
Giảm bộ nhớ
Hỗ trợ phần tử động
DocumentFragment
Giảm số lần thao tác DOM
Giảm reflow/repaint
Tăng hiệu năng khi render số lượng lớn phần tử

=> Đây là hai kỹ thuật tối ưu DOM rất phổ biến trong JavaScript.




link youtube [https://www.youtube.com/watch?v=PKpcmdb6KcA]