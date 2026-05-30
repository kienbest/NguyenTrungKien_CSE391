Câu A1
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
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
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"

2. Viết querySelector
a) Chọn thẻ <h1>
document.querySelector("h1");
b) Chọn input trong form
document.querySelector("#todoForm input");

hoặc

document.querySelector("#todoInput");
c) Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");
d) Chọn link đang active
document.querySelector("a.active");
e) Chọn <li> đầu tiên trong #todoList
document.querySelector("#todoList li:first-child");
f) Chọn tất cả <a> bên trong <nav>
document.querySelectorAll("nav a");

Câu A2
| innerHTML               | textContent         |
| ----------------------- | ------------------- |
| Đọc/Ghi cả HTML         | Chỉ đọc/ghi văn bản |
| Có thể tạo thẻ HTML mới | Không tạo HTML      |
| Chậm hơn                | Nhanh hơn           |
| Có nguy cơ XSS          | An toàn hơn         |

Ví dụ innerHTML
document.querySelector("#demo").innerHTML =
    "<b>Hello World</b>";

Kết quả:

<b>Hello World</b>

chữ sẽ được in đậm.

Ví dụ textContent
document.querySelector("#demo").textContent =
    "<b>Hello World</b>";

Kết quả hiển thị:

<b>Hello World</b>

chỉ là văn bản bình thường.

Khi nào dùng?
Dùng innerHTML

Khi muốn:

Thêm HTML động
Tạo thẻ mới từ JavaScript

Ví dụ:

list.innerHTML += "<li>New Item</li>";
Dùng textContent

Khi muốn:

Hiển thị dữ liệu người dùng nhập
Hiển thị text thông thường
Tránh lỗi bảo mật

Ví dụ:

result.textContent = username;
2. Vì sao innerHTML gây XSS?

innerHTML sẽ phân tích chuỗi thành HTML.

Nếu người dùng nhập mã độc:

<img src=x onerror="alert('Hacked!')">

thì trình duyệt sẽ tạo thẻ <img> thật và thực thi JavaScript trong onerror.

Ví dụ:

const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").innerHTML =
    userInput;

Nếu user nhập:

<img src=x onerror="alert('Hacked!')">

sẽ hiện popup:

Hacked!

Đây chính là lỗ hổng XSS (Cross-Site Scripting).

Cách sửa

Dùng textContent

const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").textContent =
    userInput;

Lúc này trình duyệt chỉ hiển thị:

<img src=x onerror="alert('Hacked!')">

và không thực thi JavaScript.

Câu A3
HTML:

<div id="outer">
    <div id="inner">
        <button id="btn">Click me</button>
    </div>
</div>

JS:

outer.addEventListener("click", () => {
    console.log("OUTER");
});

inner.addEventListener("click", () => {
    console.log("INNER");
});

btn.addEventListener("click", () => {
    console.log("BUTTON");
});
Khi click vào button

Sự kiện nổi bọt (bubbling):

BUTTON
INNER
OUTER

Giải thích:

Click xảy ra ở button
Nổi bọt lên inner
Nổi bọt tiếp lên outer
Nếu dùng stopPropagation()
btn.addEventListener("click", (e) => {
    console.log("BUTTON");
    e.stopPropagation();
});

Output:

BUTTON

Giải thích:

stopPropagation() chặn sự kiện lan truyền lên các phần tử cha.
Vì vậy INNER và OUTER không được thực thi.

kết quá cuối cùng

| Trường hợp                     | Output                 |
| ------------------------------ | ---------------------- |
| Không dùng `stopPropagation()` | BUTTON → INNER → OUTER |
| Có `stopPropagation()`         | BUTTON                 |

Câu C1
Có ít nhất 8 lỗi trong đoạn code:
| STT | Lỗi                                                  | Sửa thành                                  |
| --- | ---------------------------------------------------- | ------------------------------------------ |
| 1   | `countDisplay` khai báo `const` nhưng sau đó gán lại | Không gán lại biến, cập nhật `textContent` |
| 2   | Dùng `innerHTML` để hiển thị số đếm                  | Nên dùng `textContent`                     |
| 3   | `addEventListener("onclick",...)` sai tên event      | `"click"`                                  |
| 4   | `countDisplay = count`                               | `countDisplay.textContent = count`         |
| 5   | `historyList.innerHTML = null`                       | `historyList.innerHTML = ""`               |
| 6   | `item.remove` thiếu `()`                             | `item.remove()`                            |
| 7   | `localStorage.getItem()` trả về string               | Dùng `Number(...)` hoặc `parseInt(...)`    |
| 8   | Chỉ load count, không load history                   | Phải load cả history                       |


Code đã sửa
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

// Increment
document.querySelector("#incrementBtn").addEventListener("click", () => {
    count++;

    countDisplay.textContent = count;

    const li = document.createElement("li");
    li.textContent = `Count changed to ${count}`;

    li.addEventListener("click", function () {
        deleteHistory(this);
    });

    historyList.appendChild(li);
});

// Decrement
document.querySelector("#decrementBtn").addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});

// Reset
document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
    historyList.innerHTML = "";
});

function deleteHistory(element) {
    element.parentNode.removeChild(element);
}

// Clear History
document.querySelector("#clearHistory").addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");

    items.forEach(item => {
        item.remove();
    });
});

// Save
window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("history", historyList.innerHTML);
});

// Load
window.addEventListener("load", () => {
    count = Number(localStorage.getItem("count")) || 0;

    countDisplay.textContent = count;

    historyList.innerHTML =
        localStorage.getItem("history") || "";
});
Có thể cải thiện thêm

Thay vì gắn event cho từng <li>:

li.addEventListener("click", ...)

nên dùng Event Delegation:

historyList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});

=> tối ưu hơn khi có nhiều lịch sử.

Cấu C2
1. Tại sao bind event lên 1000 phần tử là BAD PRACTICE?

Ví dụ:

items.forEach(item => {
    item.addEventListener("click", handler);
});

Nếu có 1000 phần tử:

Tạo 1000 listener
Tốn RAM
Tốn CPU khi khởi tạo
Khó bảo trì
Nếu thêm phần tử mới phải gắn listener tiếp
Event Delegation giải quyết thế nào?

Thay vì:

1000 elements
↓
1000 listeners

Ta làm:

Parent
↓
1 listener
↓
Bắt sự kiện bubbling

Ví dụ:

document.querySelector("#list")
.addEventListener("click", (e) => {

    if (e.target.matches(".item")) {
        console.log(e.target.textContent);
    }

});

Cho dù có:

100 phần tử
1000 phần tử
10000 phần tử

vẫn chỉ có 1 event listener.

2. Vấn đề của đoạn code
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    document.body.appendChild(div);
}

Mỗi lần:

appendChild()

trình duyệt có thể phải:

Cập nhật DOM
Tính lại layout
Reflow
Repaint

=> lặp 1000 lần.

Refactor bằng DocumentFragment
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");

    div.textContent = `Item ${i}`;

    fragment.appendChild(div);
}

document.body.appendChild(fragment);
Vì sao nhanh hơn?
Cách cũ
appendChild
↓
reflow

appendChild
↓
reflow

appendChild
↓
reflow
...
1000 lần
Dùng DocumentFragment
Tạo 1000 phần tử
↓
Lưu trong bộ nhớ tạm (Fragment)
↓
appendChild(fragment)
↓
1 lần cập nhật DOM
↓
1 lần reflow
Kết luận
Event Delegation
1000 phần tử → chỉ cần 1 listener.
Tiết kiệm bộ nhớ.
Tự hỗ trợ phần tử tạo động.
DocumentFragment
Tránh cập nhật DOM liên tục.
Giảm số lần reflow/repaint.
Với danh sách lớn (1000+ phần tử) nhanh hơn đáng kể.

link youtube [https://www.youtube.com/watch?v=fRSiNJ3TxMg]