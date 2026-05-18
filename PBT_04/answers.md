Câu A1
Position: static
Vẫn chiếm chỗ trong flow? CÓ
Tham chiếu vị trí : Vị trí mặc định của document
Cuộn theo trang? Có
Use case: Layout bình thường

Position: relative
Vẫn chiếm chỗ trong flow? CÓ
Tham chiếu vị trí : So với vị trí ban đầu của chính nó
Cuộn theo trang? Có
Use case: Dịch nhẹ phần tử, làm mốc cho absolute

Position: absolute
Vẫn chiếm chỗ trong flow? Không
Tham chiếu vị trí : Parent gần nhất có position khác static
Cuộn theo trang? Có
Use case: Popup, badge, icon nổi

Position: fixed
Vẫn chiếm chỗ trong flow? Không
Tham chiếu vị trí : Viewport (màn hình trình duyệt)
Cuộn theo trang? Không
Use case: Navbar cố định, nút back to top

Position: sticky
Vẫn chiếm chỗ trong flow? CÓ
Tham chiếu vị trí : Theo scroll container/viewport
Cuộn theo trang? Vừa có vừa không
Use case: Header dính khi cuộn

Khi nào absolute tham chiếu body?

Khi KHÔNG có parent nào có:

position: relative;
position: absolute;
position: fixed;
position: sticky;

thì nó sẽ tham chiếu tới:

<body>
hoặc viewport.
Khi nào absolute tham chiếu parent?

Khi parent gần nhất có:

position: relative;

hoặc absolute/fixed/sticky.

Nearest Positioned Ancestor là gì?

Là:

Phần tử cha gần nhất có position khác static.

Absolute sẽ lấy phần tử đó làm mốc tọa độ.

Ví dụ:

<div class="parent">
    <div class="child"></div>
</div>
.parent{
    position:relative;
}

.child{
    position:absolute;
    top:0;
    right:0;
}

→ .child sẽ bám theo .parent.

4. fixed
Luôn cố định trên màn hình.
Không cuộn theo trang.

Ví dụ:

.navbar{
    position:fixed;
    top:0;
    width:100%;
}

Use case:

Navbar cố định
Chat button
Back to top
5. sticky

Ban đầu:

hoạt động như relative

Khi cuộn tới ngưỡng:

chuyển sang giống fixed

Ví dụ:

.header{
    position:sticky;
    top:0;
}

Use case:

Sticky header
Sticky sidebar
Câu A2 — Flexbox vs Grid
Trường hợp 1
.container { display: flex; }
.item { flex: 1; }
Kết quả:
4 item nằm trên 1 hàng
Mỗi item rộng bằng nhau
Sơ đồ:
|  1  |  2  |  3  |  4  |
Trường hợp 2
.container { 
    display: flex; 
    flex-wrap: wrap; 
}

.item { 
    width: 45%; 
    margin: 2.5%; 
}
Phân tích:
45% + 2.5% + 2.5% = 50%
Mỗi hàng chứa được 2 item

Có 6 items:

3 hàng
2 cột
Bố cục:
| 1 | 2 |
| 3 | 4 |
| 5 | 6 |
Trường hợp 3
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
Kết quả:
3 item nằm ngang
Item đầu sát trái
Item cuối sát phải
Item giữa nằm giữa
Theo chiều dọc được căn giữa
Sơ đồ:
|1                2                3|
Trường hợp 4
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    gap: 20px;
}
Kết quả:

Grid có:

cột 1 = 200px
cột 2 = co giãn (1fr)
cột 3 = 200px

3 item nằm trên 1 hàng.

Sơ đồ:
| 200px | flexible | 200px |
| item1 |  item2   | item3 |
Trường hợp 5
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
Kết quả:
Grid có 3 cột bằng nhau
7 items
Phân tích số hàng
Hàng 1: item 1 2 3
Hàng 2: item 4 5 6
Hàng 3: item 7

→ Tổng:

3 hàng
item cuối nằm ở hàng 3 cột 1
Sơ đồ:
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 |   |   |

Câu c1 
1. Navigation bar ngang (logo + menu + buttons)
Nên dùng:
 Flexbox
Giải thích:

Navbar là layout:

1 chiều ngang
Các phần tử nằm trên cùng một hàng

Flexbox rất phù hợp cho:

căn ngang
căn giữa
space-between

Ví dụ:

.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
Nên dùng:
 Grid
Giải thích:

Instagram là layout:

2 chiều
nhiều hàng + nhiều cột

Grid phù hợp vì:

dễ tạo cột đều nhau
tự động xuống hàng

Ví dụ:

.gallery{
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:10px;
}
3. Layout blog: main content + sidebar
Nên dùng:
→ Kết hợp Flexbox + Grid
Giải thích:
Phần tổng layout:
sidebar + content
→ dùng Flexbox

Ví dụ:

.layout{
    display:flex;
}
Bên trong content:
có thể có nhiều bài viết dạng lưới
→ dùng Grid
Vì sao kết hợp?
Flexbox mạnh về layout 1 chiều
Grid mạnh về layout 2 chiều
4. Footer với 4 cột thông tin
Nên dùng:
 Grid
Giải thích:

Footer:

nhiều cột đều nhau
responsive dễ hơn với Grid

Ví dụ:

.footer{
    display:grid;
    grid-template-columns:repeat(4, 1fr);
}
5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
Nên dùng:
 Flexbox
Giải thích:

Card là layout theo chiều dọc:

ảnh
tiêu đề
mô tả
nút

Flexbox rất hợp cho:

sắp xếp theo cột
đẩy nút xuống đáy bằng margin-top:auto

Ví dụ:

.card{
    display:flex;
    flex-direction:column;
}

.btn{
    margin-top:auto;
}
Tóm tắt nhanh
Tình huống	Công nghệ phù hợp
Navbar	Flexbox
Instagram Grid	Grid
Blog + Sidebar	Kết hợp
Footer 4 cột	Grid
Product Card	Flexbox
Câu C2 — Debug Flexbox
Lỗi 1 — Cards không đều chiều cao
Hiện tượng
Card có text dài/ngắn khác nhau
Nút “Mua” bị lệch
Card cao thấp không đều
Nguyên nhân

Card chưa dùng:

display:flex;
flex-direction:column;

Nút chưa được:

margin-top:auto;

nên không thể dính đáy.

Code sửa
.card-container{
    display:flex;
    flex-wrap:wrap;
}

.card{
    width:30%;
    margin:1.5%;

    display:flex;
    flex-direction:column;
}

.card img{
    width:100%;
}

.card .btn{
    padding:10px;

    margin-top:auto;
}
Giải thích
flex-direction: column
→ xếp nội dung theo chiều dọc
margin-top:auto
→ chiếm khoảng trống còn lại phía trên nút
→ đẩy nút xuống đáy
Screenshot mô phỏng
Trước sửa
| Card 1       | Card 2            |
| text ngắn    | text rất dài ...  |
| [Mua]        |                   |
|              | [Mua]             |
Sau sửa
| Card 1       | Card 2            |
| text ngắn    | text rất dài ...  |
|              |                   |
| [Mua]        | [Mua]             |
Lỗi 2 — Item không nằm giữa màn hình
Hiện tượng
Nội dung vẫn ở góc trái trên
Không căn giữa
Nguyên nhân

Container .hero chưa có:

justify-content:center;
align-items:center;
Code sửa
.hero{
    height:100vh;

    display:flex;

    justify-content:center;
    align-items:center;
}

.hero-content{
    text-align:center;
}
Giải thích
justify-content:center
căn giữa theo chiều ngang
align-items:center
căn giữa theo chiều dọc