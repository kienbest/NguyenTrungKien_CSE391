Câu A1
1. Thẻ meta viewport chuẩn
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Giải thích từng thuộc tính
Thuộc tính	                      Ý nghĩa
name="viewport"	           Khai báo thiết lập  viewport cho thiết bị di động
width=device-width	       Chiều rộng viewport bằng chiều rộng thật của thiết bị
initial-scale=1.0	       Mức zoom ban đầu = 100%
Nếu thiếu thẻ này thì sao?

Trên iPhone:

Browser sẽ giả lập trang như desktop (~980px)
Website bị thu nhỏ
Chữ rất nhỏ
Responsive hoạt động sai
Media queries mobile có thể không đúng

Ví dụ:

Layout 4 cột vẫn giữ nguyên trên điện thoại
Người dùng phải zoom mới đọc được
2. Mobile-First vs Desktop-First
Mobile-First	Desktop-First
Thiết kế mobile trước	Thiết kế desktop trước
Dùng min-width	Dùng max-width
Mở rộng dần lên màn hình lớn	Thu nhỏ dần xuống mobile
Tối ưu performance mobile	CSS thường nặng hơn
Ví dụ Mobile-First
/* Mobile */

.container{
    width:100%;
}

/* Tablet trở lên */

@media (min-width:768px){

    .container{
        width:720px;
    }

}
Ví dụ Desktop-First
/* Desktop */

.container{
    width:1200px;
}

/* Tablet trở xuống */

@media (max-width:768px){

    .container{
        width:100%;
    }

}
Tại sao Mobile-First được khuyên dùng?
Vì:
1. Mobile hiện nay chiếm đa số traffic
Người dùng chủ yếu dùng điện thoại
2. Performance tốt hơn
CSS mobile nhẹ hơn
Tải nhanh hơn
3. Dễ mở rộng
Bắt đầu từ layout đơn giản
Sau đó thêm tính năng cho màn hình lớn
4. Google ưu tiên Mobile-Friendly
SEO tốt hơn

Câu A2
Breakpoints phổ biến (Bootstrap)
Breakpoint           Pixel           Thiết bị           Số cột gợi ý
Extra Small          <576px         Điện thoại nhỏ         1 cột
Small                 ≥576px        Điện thoại lớn         1-2 cột
Medium                ≥768px        Tablet                 2 cột
Large                 ≥992px        Laptop                 3 cột
Extra Large           ≥1200px       Desktop lớn            4 cột
XXL                   ≥1400px       Màn hình rất lớn       5-6 cột  

Câu A3 — Media Queries
CSS
.container { width: 100%; padding: 10px; }

@media (min-width: 576px) {
    .container { width: 540px; }
}

@media (min-width: 768px) {
    .container { width: 720px; }
}

@media (min-width: 992px) {
    .container { width: 960px; }
}

@media (min-width: 1200px) {
    .container { width: 1140px; }
}
Bảng kết quả
Chiều rộng màn hình	.container width
375px (iPhone SE)	100%
600px	540px
800px	720px
1000px	960px
1400px	1140px
Giải thích
375px
Không đạt 576px
→ dùng:
width:100%;
600px
≥576px
→ width = 540px
800px
≥768px
→ width = 720px
1000px
≥992px
→ width = 960px
1400px
≥1200px
→ width = 1140px
Câu A4 — SCSS Basics
1. Variables
Dùng để:
lưu màu
font
spacing
tái sử dụng code
Ví dụ
$primary-color: blue;

.button{
    background:$primary-color;
}
2. Nesting
Cho phép viết CSS lồng nhau
Ví dụ
.navbar{

    background:black;

    a{
        color:white;
    }

}
Sau compile thành CSS
.navbar{
    background:black;
}

.navbar a{
    color:white;
}
3. Mixins
Dùng để tái sử dụng nhiều đoạn CSS
Ví dụ
@mixin flexCenter{
    display:flex;
    justify-content:center;
    align-items:center;
}

.box{
    @include flexCenter;
}
4. @extend / Inheritance
Dùng để kế thừa style
Ví dụ
.button{
    padding:10px;
    border-radius:5px;
}

.primary-btn{
    @extend .button;
    background:blue;
}
Tại sao trình duyệt không đọc được .scss?

Vì:

.scss không phải CSS chuẩn
Browser chỉ hiểu:
.css

SCSS là:

preprocessor language
Cần làm gì để SCSS → CSS?
Phải compile/transpile

Ví dụ:

Sass compiler
Live Sass Compiler
webpack
vite
Ví dụ command
sass style.scss style.css

Sau đó:

Browser sẽ đọc file style.css đã compile.

Câu C1 — Phân tích trang web thực
Chọn website: YouTube
1. Mobile (375px)
Navigation thay đổi thế nào?
Desktop:
Có sidebar đầy đủ
Có thanh tìm kiếm dài
Có nhiều icon/menu
Mobile:
Sidebar bị ẩn
Xuất hiện hamburger menu
Thanh search nhỏ hơn
Bottom navigation xuất hiện
Lưới content thay đổi thế nào?
Mobile:
1 video mỗi hàng
| Video 1 |
| Video 2 |
| Video 3 |
Elements bị ẩn trên mobile
Sidebar đầy đủ
Một số menu text
Các recommendation phụ
Một số filter buttons
Font size
Font nhỏ hơn desktop
Padding nhỏ hơn
Thumbnail co lại
2. Tablet (768px)
Navigation
Sidebar thu gọn
Search bar lớn hơn mobile
Một phần menu hiện lại
Grid content
Tablet:
2–3 cột video
| V1 | V2 |
| V3 | V4 |
Elements bị ẩn
Sidebar vẫn rút gọn
Một số text labels chưa hiện đủ
Font size
Lớn hơn mobile
Khoảng cách rộng hơn
3. Desktop (1440px)
Navigation
Sidebar đầy đủ
Search bar full
Notification + avatar + upload
Grid content
Desktop:
4–6 cột video tùy màn hình
|V1|V2|V3|V4|
|V5|V6|V7|V8|
Elements hiển thị thêm
Sidebar đầy đủ
More recommendations
Full category menu
Font size
Lớn hơn
Spacing rộng hơn
Layout thoáng hơn
Media Queries tìm được trong DevTools
Ví dụ 1
@media (max-width: 768px){
    .sidebar{
        display:none;
    }
}
Ví dụ 2
@media (min-width: 1024px){
    .video-grid{
        grid-template-columns:
        repeat(4, 1fr);
    }
}
Nhận xét tổng kết

YouTube dùng:

Mobile-First responsive
CSS Grid cho video layout
Flexbox cho navbar/sidebar
Media queries để:
ẩn hiện sidebar
đổi số cột
thay đổi spacing/font

Câu C2 — Responsive Strategy
1. Mobile Wireframe (375px)
Layout
┌──────────────┐
│ LOGO + CALL  │
├──────────────┤
│ HERO IMAGE   │
├──────────────┤
│ FOOD 1       │
│ FOOD 2       │
│ FOOD 3       │
│ FOOD 4       │
│ FOOD 5       │
│ FOOD 6       │
├──────────────┤
│ BOOKING FORM │
├──────────────┤
│ GOOGLE MAP   │
├──────────────┤
│ FOOTER       │
└──────────────┘
Những gì bị ẩn trên mobile
Không có sidebar
Có thể ẩn map preview lớn
Navigation rút gọn hamburger
Form nằm đâu?
Nằm dưới gallery ảnh
Full width
2. Tablet Wireframe (768px)
┌──────────────────────┐
│ HEADER               │
├──────────────────────┤
│ HERO IMAGE           │
├──────────┬───────────┤
│ FOOD 1   │ FOOD 2    │
├──────────┼───────────┤
│ FOOD 3   │ FOOD 4    │
├──────────┼───────────┤
│ FOOD 5   │ FOOD 6    │
├──────────────────────┤
│ BOOKING FORM         │
├──────────────────────┤
│ MAP                  │
├──────────────────────┤
│ FOOTER               │
└──────────────────────┘
Grid ảnh
2 cột
Map nằm đâu?
Dưới booking form
Full width
3. Desktop Wireframe (1440px)
┌──────────────────────────────────────┐
│ HEADER                               │
├──────────────────────────────────────┤
│ HERO IMAGE                           │
├──────────────────────────────────────┤
│ FOOD GRID        │ BOOKING + MAP     │
│                  │                   │
│ 3 COLUMNS        │ Sidebar style     │
│                  │                   │
├──────────────────────────────────────┤
│ FOOTER                               │
└──────────────────────────────────────┘
Desktop Layout
2 cột chính:
content
booking/map sidebar
Sidebar có không?
Có
Booking form + map ở cột phải
CSS Skeleton (Mobile-First)
/* Mobile First */

.layout{
    display:grid;

    grid-template-columns:1fr;

    gap:20px;
}

.gallery{
    display:grid;

    grid-template-columns:1fr;

    gap:16px;
}

/* Tablet */

@media (min-width:768px){

    .gallery{
        grid-template-columns:
        repeat(2, 1fr);
    }

}

/* Desktop */

@media (min-width:1024px){

    .layout{
        grid-template-columns:
        2fr 1fr;
    }

    .gallery{
        grid-template-columns:
        repeat(3, 1fr);
    }

}
HTML Layout Skeleton
<div class="layout">

    <header>Header</header>

    <section class="hero">
        Hero Banner
    </section>

    <section class="gallery">
        <!-- food cards -->
    </section>

    <aside class="booking">
        Booking Form + Map
    </aside>

    <footer>Footer</footer>

</div>
Giải thích Responsive Strategy
Thiết bị	Layout
Mobile	1 cột
Tablet	Gallery 2 cột
Desktop	Main + sidebar
Công nghệ sử dụng
Thành phần	Công nghệ
Tổng layout	CSS Grid
Navbar	Flexbox
Gallery	Grid
Responsive	Media Queries
Mobile-first	min-width

Bai b3: # B3 - SCSS Compile

Install:

npm install -g sass

Compile:

sass scss/style.scss style.css

Watch:

sass --watch scss/style.scss:style.css
link youtube [https://www.youtube.com/watch?v=YPPj8CpI1IY]