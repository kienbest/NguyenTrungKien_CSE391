-------Câu A1------- 
là viết các CSS trực tiếp trong thuộc tính style của thẻ HTML.
Ví dụ
<!DOCTYPE html>
<html>
<body>

<h1 style="color: red; font-size: 40px;">
    Xin chào
</h1>

</body>
</html>
+ Ưu điểm
Nhanh, đơn giản
Dễ thử giao diện ngay lập tức
Không cần file CSS riêng
+ Nhược điểm
Code bị rối khi viết nhiều
Khó bảo trì
Không tái sử dụng được
Vi phạm nguyên tắc tách giao diện và nội dung
+ Khi nào nên dùng
Test nhanh
Chỉnh một phần tử nhỏ
Email HTML hoặc trường hợp đặc biệt

2. Internal CSS

Là viết CSS trong thẻ <style> bên trong file HTML.

Ví dụ

<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
            font-size: 40px;
        }
    </style>
</head>

<body>
    <h1>Xin chào</h1>
</body>
</html>
+ Ưu điểm
Gọn hơn inline
Dễ quản lý hơn
Áp dụng cho nhiều phần tử cùng lúc
+ Nhược điểm
Chỉ dùng được cho 1 trang HTML
Không tái sử dụng cho nhiều file
File HTML có thể dài và nặng
+ Khi nào nên dùng
Website nhỏ
Trang đơn
Bài tập thực hành
3. External CSS

Là viết CSS trong file riêng .css rồi liên kết với HTML bằng thẻ <link>.

Ví dụ
File HTML
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Xin chào</h1>
</body>
</html>

File style.css

h1 {
    color: green;
    font-size: 40px;
}

+ Ưu điểm
Chuyên nghiệp nhất
Dễ bảo trì
Tái sử dụng cho nhiều trang
Giúp code sạch và gọn
Trình duyệt có thể cache file CSS → tải nhanh hơn
+ Nhược điểm
Cần tạo thêm file CSS
Nếu link sai thì CSS không hoạt động
+ Khi nào nên dùng
Website thật
Dự án lớn
Làm việc nhóm
Web nhiều trang

Câu hỏi thêm
Nếu cùng 1 element có cả 3 cách CSS thì cách nào thắng?

Thứ tự ưu tiên:

Inline CSS > Internal CSS > External CSS
Ví dụ
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
        }
    </style>

    <link rel="stylesheet" href="style.css">
</head>

<body>

<h1 style="color:red;">Hello</h1>

</body>
</html>

Giả sử trong style.css:

h1 {
    color: green;
}

Kết quả chữ sẽ màu đỏ.

Giải thích tại sao

CSS hoạt động theo nguyên tắc:

“Specificity” (độ ưu tiên)

Inline CSS có độ ưu tiên cao nhất vì nó gắn trực tiếp vào element.

Nên:

External bị ghi đè bởi Internal
Internal bị ghi đè bởi Inline
Thứ tự ưu tiên CSS đầy đủ
!important
↓
Inline CSS
↓
ID selector
↓
Class selector
↓
Tag selector
↓
CSS mặc định của trình duyệt

Ví dụ:

h1 {
   color: blue !important;
}

Thì dù inline là đỏ, chữ vẫn có thể thành xanh vì !important mạnh hơn.

##----------Câu A2-----------
1. h1
Chọn ShopTLU

2.h2
Chọn : 25.990.000đ
45.990.000đ
Vì .price chọn tất cả element có class price.
3. #app header
Chọn : <header class="top-bar dark">...</header>

Text content bên trong:

ShopTLU
Home
Products
About

Vì:

#app chọn div có id app
header chọn thẻ <header> nằm bên trong #app
4.nav a:first-child
Chọn : Home
Vì:

chọn thẻ <a>
là phần tử con đầu tiên bên trong <nav>

5 ..product.featured h2
Chọn: MacBook Pro
Vì:

.product.featured yêu cầu element có đồng thời 2 class:
product
featured
bên trong đó chọn thẻ h2

6. article > p

Chọn:

25.990.000đ
Mô tả sản phẩm...
45.990.000đ
Mô tả sản phẩm...

Vì:

> là chọn con trực tiếp
tất cả thẻ <p> là con trực tiếp của <article>
7. a[href="/"]

Chọn:

Home

Vì selector attribute:

[href="/"]

chỉ chọn thẻ có:

href="/"
8. .top-bar.dark h1

Chọn:

ShopTLU

Vì:

.top-bar.dark
= element có cả 2 class:
top-bar
dark
sau đó chọn h1 bên trong
File selectors_test.html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Selectors Test</title>

    <style>
        h1 {
            color: red;
        }

        .price {
            color: blue;
        }

        #app header {
            border: 2px solid black;
        }

        nav a:first-child {
            background: yellow;
        }

        .product.featured h2 {
            color: green;
        }

        article > p {
            font-style: italic;
        }

        a[href="/"] {
            font-weight: bold;
        }

        .top-bar.dark h1 {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<div id="app">
    <header class="top-bar dark">
        <h1>ShopTLU</h1>

        <nav>
            <a href="/" class="active">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
        </nav>
    </header>

    <main>
        <article class="product">
            <h2>iPhone 16</h2>
            <p class="price">25.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>

        <article class="product featured">
            <h2>MacBook Pro</h2>
            <p class="price">45.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>
    </main>
</div>

</body>
</html>


##---------Câu A3---------- 

Trường hợp 1 — content-box (mặc định)
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
Chiều rộng hiển thị

Công thức:

width + padding + border

Tính:

400 + 20*2 + 5*2
= 400 + 40 + 10
= 450px

→ Chiều rộng hiển thị:

450px
Không gian chiếm trên trang

Bao gồm margin:

450 + 10*2
= 470px

→ Không gian chiếm:

470px
Trường hợp 2 — border-box
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
Chiều rộng hiển thị

Với border-box:

width đã bao gồm:
- content
- padding
- border

→ Chiều rộng hiển thị:

400px
Kích thước content thực tế
400 - padding*2 - border*2
= 400 - 40 - 10
= 350px

 Content thực tế:

350px
Không gian chiếm trên trang
400 + 10*2
= 420px

 Không gian chiếm:

420px
Trường hợp 3 — Margin Collapse
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
Khoảng cách giữa 2 box

→ Kết quả:

40px
Vì sao KHÔNG PHẢI 65px?

Do hiện tượng:

Margin Collapse

Vertical margin giữa 2 block không cộng lại.

Browser chỉ lấy:

margin lớn hơn

Giữa:

25px và 40px

 lấy:
40px
Nâng cao — margin âm
.box-a {
    margin-bottom: -10px;
}

.box-b {
    margin-top: 40px;
}

Khoảng cách:

40 + (-10)
= 30px

→ Kết quả:

30px


##-------Câu A4------- 

CSS:

p { color: black; }          /* A */
.price { color: blue; }      /* B */
#main-price { color: red; }  /* C */
p.price { color: green; }    /* D */

Element:

<p class="price" id="main-price">
Tính specificity
Rule A
p
ID: 0
Class: 0
Tag: 1

→

(0,0,1)
Rule B
.price
ID: 0
Class: 1
Tag: 0

→

(0,1,0)
Rule C
#main-price
ID: 1
Class: 0
Tag: 0

→

(1,0,0)
Rule D
p.price
ID: 0
Class: 1
Tag: 1

→

(0,1,1)
Element sẽ có màu gì?

→ Màu:

red

Vì:

#main-price

có specificity cao nhất:

(1,0,0)
Nếu thêm inline style
<p class="price"
   id="main-price"
   style="color: orange;">

→ Màu:

orange

Vì inline CSS mạnh hơn selector thường.

Nếu Rule A thêm !important
p {
   color: black !important;
}

→ Element sẽ màu:

black

Vì:

!important

ưu tiên cao hơn:

ID
class
tag
inline style thường

Nó phá vỡ thứ tự specificity thông thường.

##--------Câu C1---------
1. Tính chiều rộng thực tế
Sidebar
width: 300px
padding: 20px mỗi bên
border: 1px mỗi bên

Vì mặc định là:

content-box

nên:

Chiều rộng thực tế
= width + padding*2 + border*2
= 300 + 40 + 2
= 342px

→ Sidebar thực tế:

342px
Content
width: 660px
padding: 30px mỗi bên
border: 1px mỗi bên

Tính:

660 + 60 + 2
= 722px

→ Content thực tế:

722px
2. Tại sao layout bị vỡ?

Tổng chiều rộng:

342 + 722
= 1064px

Nhưng container chỉ:

960px

→ Hai khối không đủ chỗ nằm cùng hàng.

Nên:

.content bị đẩy xuống dòng mới
3. Cách sửa 1 — Dùng border-box
CSS sửa
* {
    box-sizing: border-box;
}

.container {
    width: 960px;
    margin: 0 auto;
}

.sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
}

.content {
    width: 660px;
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
}
Vì sao sửa được?

Khi dùng:

box-sizing: border-box;

thì:

width đã bao gồm:
- content
- padding
- border

Nên:

sidebar = 300px
content = 660px

Tổng:

300 + 660 = 960px

→ Fit container.

4. Cách sửa 2 — Không dùng border-box

Giữ:

content-box

thì phải giảm width.

Tính lại width

Sidebar đang chiếm:

padding + border
= 40 + 2
= 42px

Content:

60 + 2
= 62px

Tổng extra:

42 + 62 = 104px

Container:

960px

Nên:

width thực của content + sidebar
= 960 - 104
= 856px

Ví dụ sửa:

.sidebar {
    width: 260px;
}

.content {
    width: 596px;
}

Tính:

260 + 42 = 302
596 + 62 = 658

302 + 658 = 960

→ Không vỡ layout.

##-------------------Bài B2-----------------


## PHẦN 1 — Content-box vs Border-box

### Hộp 1 — content-box

CSS:

width: 300px
padding: 20px
border: 5px solid

Chiều rộng thực tế:

300 + 20 + 20 + 5 + 5
= 350px

### Hộp 2 — border-box

CSS:

width: 300px
padding: 20px
border: 5px solid

Chiều rộng thực tế:

= 300px

### Giải thích

- Với content-box:
  width CHỈ tính phần content.
  Padding và border được cộng thêm vào ngoài width.

- Với border-box:
  width bao gồm luôn:
  content + padding + border.

=> border-box giúp tính layout dễ hơn và tránh vỡ giao diện.


---

# PHẦN 2 — Layout 3 cột

## KHÔNG dùng border-box

Tổng thực tế:

Sidebar:
250 + 15 + 15 = 280px

Content:
500 + 20 + 20 = 540px

Ads:
250 + 15 + 15 = 280px

Tổng:
280 + 540 + 280
= 1100px

=> LỚN HƠN container 1000px
=> Layout bị vỡ.


## DÙNG border-box

Chiều rộng thực tế:

250 + 500 + 250
= 1000px

=> Layout hoạt động chính xác.


---

# BÀI B3 

## 10 Rules + Specificity

1. p
Specificity: 0,0,1

2. .text
Specificity: 0,1,0

3. .highlight
Specificity: 0,1,0

4. p.text
Specificity: 0,1,1

5. p.highlight
Specificity: 0,1,1

6. .text.highlight
Specificity: 0,2,0

7. #demo
Specificity: 1,0,0

8. p#demo
Specificity: 1,0,1

9. #demo.highlight
Specificity: 1,1,0

10. p#demo.text.highlight
Specificity: 1,2,1

 Kết quả cuối cùng

Phần tử hiển thị màu:

BLACK

Vì rule:

p#demo.text.highlight

có specificity cao nhất:
1,2,1

=> Nó ghi đè toàn bộ các rule còn lại.


 Nếu đổi thứ tự rules thì sao?

- Nếu specificity KHÁC nhau:
  => KHÔNG ảnh hưởng.
  Rule specificity cao hơn luôn thắng.

- Nếu specificity BẰNG nhau:
  => Rule viết SAU sẽ thắng.

  link D "[https://youtu.be/01qhNuiUeh8]