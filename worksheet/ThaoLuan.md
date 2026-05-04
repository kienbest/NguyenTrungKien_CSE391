I. PHÂN TÍCH BỐ CỤC GIAO DIỆN

Toàn bộ form được đặt trong 1 khung chính ở giữa trang.

Có thể chia thành:

FORM Employee Information
│
├── Basic Info
│   ├── Employee ID
│   ├── Last Name
│   ├── First Name
│   ├── Gender (radio)
│   ├── Title
│   ├── Suffix
│   ├── BirthDate
│   ├── HireDate
│   ├── SSN
│   └── Reports To (select)
│
├── Contact Info
│   ├── Email
│   ├── Address
│   ├── City
│   ├── Region
│   ├── Postal Code
│   ├── Country (select)
│   ├── Home Phone
│   └── Photo
│
├── Optional Info
│   ├── Notes (textarea/editor)
│   ├── Preferred Shift (checkbox)
│   ├── Active? (checkbox)
│   ├── Captcha
│   └── Human verify input
│
└── Buttons
    ├── Submit
    └── Cancel
    
II. CÁC THẺ HTML PHẢI DÙNG
1. Khung chính
<form>
<div class="container">
2. Tiêu đề từng nhóm

Dùng:

<h3>Basic Info</h3>
<h3>Contact Info</h3>
<h3>Optional Info</h3>
<hr>
3. Mỗi dòng nhập liệu

Nên chia thành 2 cột:

cột trái: label
cột phải: input

=> dùng:

<div class="row">
    <label>First Name</label>
    <input type="text">
</div>
4. Các loại input cần có
Input text
<input type="text">
Input email
<input type="email">
Input date
<input type="date">
Radio button (Gender)
<input type="radio" name="gender"> Male
<input type="radio" name="gender"> Female
Checkbox
<input type="checkbox"> Regular
<input type="checkbox"> Gravy Yard
Select box
<select>
   <option>Buchanan</option>
   <option>Davolio</option>
</select>
Textarea
<textarea></textarea>
Button
<button type="submit">Submit</button>
<button type="reset">Cancel</button>

III. PHÂN TÍCH CSS BỐ CỤC

Form này đẹp vì:

Khung giữa trang:
.container{
    width: 700px;
    margin: auto;
    background: #f3f3f3;
    padding: 20px;
    border: 1px solid #ccc;
}
Mỗi dòng label + input nằm ngang:
.row{
    display: flex;
    margin: 8px 0;
    align-items: center;
}
Label cố định chiều rộng:
.row label{
    width: 150px;
    font-weight: bold;
}
Input chiếm phần còn lại:
.row input,
.row select,
.row textarea{
    flex: 1;
    padding: 5px;
}