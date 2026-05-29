Câu A1
Function Declaration
function tinhThueBaoHiem(luong) {
    const thuong = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thuong,
        thuc_nhan: luong - thuong
    };
}
Function Expression
const tinhThueBaoHiem = function(luong) {
    const thuong = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thuong,
        thuc_nhan: luong - thuong
    };
};
Arrow Function
const tinhThueBaoHiem = (luong) => {
    const thuong = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thuong,
        thuc_nhan: luong - thuong
    };
};
Khác nhau về Hoisting
Function Declaration
sayHello();

function sayHello() {
    console.log("Hello");
}

Output:

Hello

Vì Function Declaration được hoisting toàn bộ.

Function Expression
sayHello();

const sayHello = function() {
    console.log("Hello");
};

Output:

ReferenceError
Arrow Function
sayHello();

const sayHello = () => {
    console.log("Hello");
};

Output:

ReferenceError

Kết luận
| Loại hàm             | Hoisting |
| -------------------- | -------- |
| Function Declaration | Có       |
| Function Expression  | Không    |
| Arrow Function       | Không    |

Câu A2
Đoạn 1
console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.getCount());

Output:

1
2
3
2
2
Giải thích

Biến:

let count = 0;

được các hàm arrow giữ lại thông qua Closure.

Diễn biến:

count = 0

increment() => 1
increment() => 2
increment() => 3
decrement() => 2
getCount()  => 2
Đoạn 2
Vòng lặp var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}

Sau khi vòng lặp kết thúc:

i = 3

Output:

var: 3
var: 3
var: 3
Vòng lặp let
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}

Output:

let: 0
let: 1
let: 2
Output cuối cùng

Sau khoảng 200ms:

var: 3
var: 3
var: 3

let: 0
let: 1
let: 2
Tại sao khác nhau?
var

var có phạm vi function scope.

Toàn bộ vòng lặp dùng chung một biến:

i

Khi callback chạy:

i === 3

nên in:

3 3 3
let

let có block scope.

Mỗi vòng lặp tạo một biến riêng:

j = 0
j = 1
j = 2

Callback ghi nhớ giá trị tương ứng nên in:

0 1 2


Câu A3 
const nums = [1,2,3,4,5,6,7,8,9,10];
1. Lấy các số chẵn
nums.filter(n => n % 2 === 0);
2. Nhân mỗi số với 3
nums.map(n => n * 3);
3. Tính tổng tất cả
nums.reduce((sum, n) => sum + n, 0);

Kết quả:

55
4. Tìm số đầu tiên > 7
nums.find(n => n > 7);

Kết quả:

8
5. Kiểm tra có số > 10 không
nums.some(n => n > 10);

Kết quả:

false
6. Kiểm tra tất cả đều > 0
nums.every(n => n > 0);

Kết quả:

true
7. Tạo mảng mô tả chẵn/lẻ
nums.map(
    n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`
);
8. Đảo ngược mảng (không mutate)
[...nums].reverse();

Kết quả:

[10,9,8,7,6,5,4,3,2,1]

Câu A4 
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: {
        ram: 8,
        storage: 256,
        color: "Titan"
    }
};
Destructuring
const {
    name,
    price,
    specs: { ram, color }
} = product;
Output
console.log(name, price, ram, color);

Kết quả:

iPhone 16 25990000 8 Titan
console.log(specs);

Kết quả:

ReferenceError: specs is not defined

Vì chỉ lấy:

ram
color

ra khỏi specs, không tạo biến specs.

Spread
const updated = {
    ...product,
    price: 23990000,
    sale: true
};
Output
console.log(updated.price);
23990000
console.log(updated.sale);
true
console.log(product.price);
25990000

Object gốc không thay đổi.

Spread Gotcha
const copy = { ...product };

copy.specs.ram = 16;
Output
console.log(product.specs.ram);
16
Giải thích

Spread chỉ tạo shallow copy (sao chép nông).

copy.specs và product.specs cùng tham chiếu tới một object:

product.specs
      ↑
      |
copy.specs

Khi sửa:

copy.specs.ram = 16;

thì:

product.specs.ram

cũng đổi thành:

16

Muốn copy sâu:

const copy = structuredClone(product);

hoặc:

const copy =
JSON.parse(JSON.stringify(product));

Câu C1 (10đ) — Refactor Code
Code refactor (≤ 10 dòng)
const processOrders = (orders) =>
    orders
        .filter(({ status, total }) =>
            status === "completed" && total > 100000
        )
        .map(({ id, customer, total }) => ({
            id,
            customer,
            total,
            discount: total * 0.1,
            finalTotal: total * 0.9
        }))
        .sort((a, b) => b.finalTotal - a.finalTotal);
Giải thích
filter()

Lọc đơn hàng:

status === "completed"
&&
total > 100000
map()

Tạo object mới:

{
    id,
    customer,
    total,
    discount,
    finalTotal
}
destructuring
({ id, customer, total })

thay cho:

order.id
order.customer
order.total
sort()

Sắp xếp giảm dần:

b.finalTotal - a.finalTotal
Câu C2 (10đ) — Thiết kế API
miniArray.map()
const miniArray = {

    map(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            result.push(
                fn(arr[i], i, arr)
            );

        }

        return result;
    },
miniArray.filter()
    filter(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            if (
                fn(arr[i], i, arr)
            ) {

                result.push(arr[i]);

            }

        }

        return result;
    },
miniArray.reduce()
    reduce(arr, fn, initialValue) {

        let accumulator =
            initialValue;

        for (let i = 0; i < arr.length; i++) {

            accumulator = fn(
                accumulator,
                arr[i],
                i,
                arr
            );

        }

        return accumulator;
    }

};
Code hoàn chỉnh
const miniArray = {

    map(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            result.push(
                fn(arr[i], i, arr)
            );

        }

        return result;
    },

    filter(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            if (
                fn(arr[i], i, arr)
            ) {

                result.push(arr[i]);

            }

        }

        return result;
    },

    reduce(arr, fn, initialValue) {

        let accumulator =
            initialValue;

        for (let i = 0; i < arr.length; i++) {

            accumulator = fn(
                accumulator,
                arr[i],
                i,
                arr
            );

        }

        return accumulator;
    }

};
Test
console.log(
    miniArray.map(
        [1,2,3],
        x => x * 2
    )
);

Output:

[2,4,6]
console.log(
    miniArray.filter(
        [1,2,3,4],
        x => x > 2
    )
);

Output:

[3,4]
console.log(
    miniArray.reduce(
        [1,2,3,4],
        (a,b) => a + b,
        0
    )
);

Output:

10
Điểm nhấn để lấy trọn điểm C2
Không dùng Array.prototype.map
Không dùng Array.prototype.filter
Không dùng Array.prototype.reduce
Dùng vòng lặp for tự cài đặt
Hỗ trợ callback:
(value, index, array)

giống API thật của JavaScript.

link youtube [https://www.youtube.com/watch?v=UJz2qmy2q18]