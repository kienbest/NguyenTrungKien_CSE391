Câu A1
1. Thẻ <meta viewport> chuẩn
<meta name="viewport" content="width=device-width, initial-scale=1.0">
2. Giải thích từng thuộc tính
width=device-width
Đặt chiều rộng của viewport bằng đúng chiều rộng thiết bị.
Nghĩa là web sẽ hiển thị đúng theo kích thước màn hình điện thoại/tablet.

Ví dụ:

iPhone SE → viewport khoảng 375px
iPhone 14 → khoảng 390px
initial-scale=1.0
Đặt mức zoom ban đầu là 100%.
Trang web mở ra sẽ không bị phóng to hay thu nhỏ.
3. Nếu thiếu thẻ viewport thì iPhone hiển thị thế nào?

Nếu KHÔNG có thẻ này:

Safari trên iPhone sẽ giả lập trang web như màn hình desktop (~980px).
Toàn bộ trang bị thu nhỏ lại để vừa màn hình điện thoại.
Chữ rất nhỏ.
Layout responsive hoạt động sai.
Media queries mobile có thể không đúng.

Ví dụ:

Một website desktop mở trên iPhone sẽ bị zoom out toàn bộ.
4. Mobile-First và Desktop-First
Mobile-First
Viết CSS cho điện thoại trước.
Sau đó dùng min-width để mở rộng cho tablet/desktop.
Ví dụ Mobile-First (breakpoint 768px)
/* Mobile */
.container {
    width: 100%;
}

/* Tablet trở lên */
@media (min-width: 768px) {
    .container {
        width: 720px;
    }
}
Desktop-First
Viết CSS cho desktop trước.
Sau đó dùng max-width để thu nhỏ cho mobile.
Ví dụ Desktop-First (breakpoint 768px)
/* Desktop */
.container {
    width: 720px;
}

/* Mobile */
@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}
5. Tại sao Mobile-First được khuyên dùng?
Vì:
1. Điện thoại là thiết bị phổ biến nhất
Phần lớn người dùng truy cập bằng mobile.
2. Tối ưu hiệu năng
Mobile tải CSS nhẹ hơn trước.
Tránh tải layout desktop nặng rồi thu nhỏ xuống.
3. Responsive dễ quản lý hơn
Bắt đầu từ layout đơn giản → mở rộng dần.
4. Phù hợp Google SEO
Google ưu tiên Mobile-First Indexing.
Câu A2
| Breakpoint       | Pixel     | Thiết bị đại diện | Ví dụ lưới sản phẩm |
| ---------------- | --------- | ----------------- | ------------------- |
| Extra Small      | `<576px`  | Điện thoại nhỏ    | 1 cột               |
| Small (sm)       | `≥576px`  | Điện thoại lớn    | 2 cột               |
| Medium (md)      | `≥768px`  | Tablet            | 2–3 cột             |
| Large (lg)       | `≥992px`  | Laptop            | 4 cột               |
| Extra Large (xl) | `≥1200px` | Desktop lớn       | 5 cột               |
| XXL              | `≥1400px` | Màn hình rất lớn  | 6 cột               |

| Thiết bị    | Số cột |
| ----------- | ------ |
| Mobile      | 1      |
| Tablet      | 2–3    |
| Laptop      | 4      |
| Desktop lớn | 5–6    |

Câu A3
Câu A3 — Media Queries (5đ)

CSS:

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
| Chiều rộng màn hình | `.container width` |
| ------------------- | ------------------ |
| 375px (iPhone SE)   | 100%               |
| 600px               | 540px              |
| 800px               | 720px              |
| 1000px              | 960px              |
| 1400px              | 1140px             |
Giải thích
375px
Không đạt 576px
→ dùng:
width: 100%;
600px
Đạt 576px
→ width = 540px
800px
Đạt 768px
→ width = 720px
1000px
Đạt 992px
→ width = 960px
1400px
Đạt 1200px
→ width = 1140px

Câu A4
1. Variables

Cho phép lưu giá trị vào biến.

Ví dụ
$primary-color: blue;

button {
    background: $primary-color;
}
2. Nesting

Cho phép viết CSS lồng nhau giống cấu trúc HTML.

Ví dụ
nav {
    ul {
        margin: 0;
    }

    li {
        display: inline-block;
    }

    a {
        color: blue;
    }
}
3. Mixins

Tái sử dụng nhiều đoạn CSS.

Ví dụ
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    @include flex-center;
}
4. @extend / Inheritance

Kế thừa CSS từ class khác.

Ví dụ
.button {
    padding: 10px;
    border-radius: 5px;
}

.primary-button {
    @extend .button;
    background: blue;
}
5. Tại sao trình duyệt KHÔNG đọc được .scss?

Vì:

.scss không phải CSS chuẩn.
Đây là ngôn ngữ mở rộng của CSS.
Trình duyệt chỉ hiểu .css.
6. Cần bước gì để chuyển SCSS → CSS?

Cần compile/transpile SCSS thành CSS bằng:

Sass Compiler
VS Code Live Sass Compiler
Node.js Sass

Ví dụ:

sass style.scss style.css

Sau khi compile:

Trình duyệt sẽ đọc file .css được tạo ra.

Câu C1
Chọn website: YouTube

1. Mobile (375px)
Đặc điểm layout
Navigation
Thanh sidebar bên trái bị ẩn.
Xuất hiện nút hamburger menu (☰).
Thanh tìm kiếm được thu gọn.
Chỉ còn các icon:
Home
Shorts
Subscriptions
Profile
Content Grid
Video hiển thị:
1 cột
Thumbnail chiếm gần toàn màn hình.
Elements bị ẩn
Sidebar đầy đủ.
Một số text menu.
Category bar ngắn hơn.
Một số nút chức năng phụ.
Font Size
Font nhỏ hơn desktop.
Tiêu đề video thường:
~14px mobile
~16px desktop
Wireframe Mobile
-------------------
☰  YouTube   🔍
-------------------

[ Video 1 ]
Title

[ Video 2 ]
Title

[ Video 3 ]
Title

-------------------
Home Shorts Subs
-------------------
2. Tablet (768px)
Navigation
Sidebar mini xuất hiện.
Hamburger vẫn còn.
Search bar dài hơn.
Content Grid
Khoảng:
2–3 cột video
Elements bị ẩn
Một số text sidebar.
Sidebar dạng icon-only.
Font Size
Lớn hơn mobile nhẹ.
Khoảng 15–16px.
Wireframe Tablet
---------------------------------
☰ YouTube      Search
---------------------------------

|🏠| [Video] [Video]
|🎬| [Video] [Video]
|📺|

---------------------------------
3. Desktop (1440px)
Navigation
Sidebar đầy đủ hiện ra.
Có text menu:
Home
Shorts
Subscriptions
History
Content Grid
Khoảng:
4–6 cột video
Elements bị ẩn
Hầu như không ẩn gì.
Hiển thị đầy đủ tính năng.
Font Size
Lớn hơn mobile.
Tiêu đề rõ ràng hơn.
Wireframe Desktop
--------------------------------------------------------
☰ YouTube            Search Bar                 Profile
--------------------------------------------------------

| Home         | [Video][Video][Video][Video]
| Shorts       | [Video][Video][Video][Video]
| Subscriptions|
| History      |

--------------------------------------------------------
4. Media Queries tìm trong DevTools
Ví dụ 1
@media (max-width: 656px) {
    #guide {
        display: none;
    }
}
Ý nghĩa
Khi màn hình nhỏ:
Sidebar bị ẩn.
Ví dụ 2
@media (min-width: 1000px) {
    .grid {
        grid-template-columns:
        repeat(4, 1fr);
    }
}
Ý nghĩa
Desktop hiển thị nhiều cột video hơn.
| Thiết bị | Navigation   | Grid    | Sidebar     |
| -------- | ------------ | ------- | ----------- |
| Mobile   | Hamburger    | 1 cột   | Ẩn          |
| Tablet   | Mini sidebar | 2–3 cột | Icon-only   |
| Desktop  | Full menu    | 4–6 cột | Hiện đầy đủ |
Câu C2
1. Mobile Wireframe (375px)
Đặc điểm
Layout 1 cột.
Form đặt bàn nằm dưới ảnh món ăn.
Google Maps ở cuối.
Một số text phụ bị ẩn.
Mobile Wireframe
-------------------
LOGO     ☎
-------------------

[ HERO IMAGE ]

-------------------
[ Món ăn ]
[ Món ăn ]
[ Món ăn ]
[ Món ăn ]
[ Món ăn ]
[ Món ăn ]
-------------------

[ FORM ĐẶT BÀN ]
Ngày
Giờ
Số người
Ghi chú

-------------------
[ GOOGLE MAP ]
-------------------

FOOTER
2. Tablet Wireframe (768px)
Đặc điểm
Grid ảnh:
2 cột
Form đặt bàn nằm cạnh Maps hoặc dưới grid.
Header rộng hơn.
Tablet Wireframe
--------------------------------
LOGO              ☎ Đặt bàn
--------------------------------

[ HERO IMAGE ]

--------------------------------
[Ảnh][Ảnh]
[Ảnh][Ảnh]
[Ảnh][Ảnh]
--------------------------------

[ FORM ĐẶT BÀN ]

[ GOOGLE MAP ]

FOOTER
3. Desktop Wireframe (1440px)
Đặc điểm
Layout nhiều cột.
Grid ảnh:
3 cột
Form + Maps đặt cạnh nhau.
Có thể thêm sidebar thông tin.
Desktop Wireframe
------------------------------------------------
LOGO      MENU       ☎ Đặt bàn
------------------------------------------------

[ HERO IMAGE FULL WIDTH ]

------------------------------------------------
[Ảnh][Ảnh][Ảnh]
[Ảnh][Ảnh][Ảnh]
------------------------------------------------

------------------   ------------------
FORM ĐẶT BÀN        GOOGLE MAP
------------------   ------------------

FOOTER
4. Responsive Strategy
Thiết bị	Layout	Grid món ăn
Mobile	1 cột	1 cột
Tablet	1–2 cột	2 cột
Desktop	2 cột	3 cột
5. CSS Skeleton (Mobile-First)
/* MOBILE FIRST */

body {
    margin: 0;
    font-family: Arial;
}

.container {
    display: grid;
    gap: 20px;
    padding: 20px;
}

/* HEADER */

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* HERO */

.hero img {
    width: 100%;
    height: auto;
}

/* FOOD GRID */

.food-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

/* FORM */

.booking-form {
    display: grid;
    gap: 10px;
}

/* MAP */

.map iframe {
    width: 100%;
    height: 300px;
}

/* TABLET */

@media (min-width: 768px) {

    .food-grid {
        grid-template-columns: repeat(2, 1fr);
    }

}

/* DESKTOP */

@media (min-width: 1200px) {

    .main-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }

    .food-grid {
        grid-template-columns: repeat(3, 1fr);
    }

}
# SCSS Compile Command
sass scss/style.scss style.css

link youtube [https://www.youtube.com/watch?v=p1dugg-H5Gs]