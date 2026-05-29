const products = [

{
id:1,
name:"iPhone 16",
price:25990000,
category:"phone",
image:"https://placehold.co/200",
rating:4.8,
inStock:true
},

{
id:2,
name:"Samsung S25",
price:22990000,
category:"phone",
image:"https://placehold.co/200",
rating:4.7,
inStock:true
},

{
id:3,
name:"Xiaomi 16",
price:14990000,
category:"phone",
image:"https://placehold.co/200",
rating:4.4,
inStock:true
},

{
id:4,
name:"Macbook Air M5",
price:32990000,
category:"laptop",
image:"https://placehold.co/200",
rating:4.9,
inStock:true
},

{
id:5,
name:"Dell XPS",
price:28990000,
category:"laptop",
image:"https://placehold.co/200",
rating:4.6,
inStock:true
},

{
id:6,
name:"Asus ROG",
price:35990000,
category:"laptop",
image:"https://placehold.co/200",
rating:4.8,
inStock:true
},

{
id:7,
name:"Sony WH1000XM6",
price:9990000,
category:"audio",
image:"https://placehold.co/200",
rating:4.9,
inStock:true
},

{
id:8,
name:"AirPods Pro",
price:5990000,
category:"audio",
image:"https://placehold.co/200",
rating:4.7,
inStock:true
},

{
id:9,
name:"JBL Tune",
price:1990000,
category:"audio",
image:"https://placehold.co/200",
rating:4.2,
inStock:true
},

{
id:10,
name:"Apple Watch",
price:10990000,
category:"watch",
image:"https://placehold.co/200",
rating:4.8,
inStock:true
},

{
id:11,
name:"Galaxy Watch",
price:7990000,
category:"watch",
image:"https://placehold.co/200",
rating:4.5,
inStock:true
},

{
id:12,
name:"Garmin Fenix",
price:15990000,
category:"watch",
image:"https://placehold.co/200",
rating:4.9,
inStock:true
}

];

let cartCount = 0;
let currentCategory = "all";

let filteredProducts = [...products];

const app = document.querySelector("#app");

createLayout();
renderProducts(products);

function createLayout(){

const container =
document.createElement("div");

container.className="container";

container.innerHTML=`

<div class="header">
<h1>Product Catalog</h1>

<div>
<button id="darkBtn">
🌙 Dark Mode
</button>

<div class="cart">
🛒 <span class="badge">0</span>
</div>
</div>
</div>

<div class="controls">

<input
id="search"
placeholder="Search product..."
>

<select id="sort">

<option value="">
Sort
</option>

<option value="priceAsc">
Price ↑
</option>

<option value="priceDesc">
Price ↓
</option>

<option value="name">
Name A-Z
</option>

<option value="rating">
Rating
</option>

</select>

<button data-category="all">All</button>
<button data-category="phone">Phone</button>
<button data-category="laptop">Laptop</button>
<button data-category="audio">Audio</button>
<button data-category="watch">Watch</button>

</div>

<div class="products" id="products">
</div>
`;

app.appendChild(container);

bindEvents();
}

function renderProducts(list){

const container =
document.querySelector("#products");

container.innerHTML="";

list.forEach(product=>{

const card =
document.createElement("div");

card.className="card";

card.dataset.id = product.id;

card.innerHTML=`

<img src="${product.image}">

<div class="card-body">

<h3>${product.name}</h3>

<p class="price">
${product.price.toLocaleString()}đ
</p>

<p>
⭐ ${product.rating}
</p>

<button class="add-cart">
Thêm giỏ
</button>

</div>
`;

container.appendChild(card);

});
}

function filterByCategory(category){

currentCategory = category;

filteredProducts =
category==="all"

? [...products]

: products.filter(
p=>p.category===category
);

renderProducts(filteredProducts);
}

function searchProducts(keyword){

const result =
filteredProducts.filter(product=>

product.name
.toLowerCase()
.includes(keyword.toLowerCase())

);

renderProducts(result);
}

function sortProducts(type){

let list = [...filteredProducts];

switch(type){

case "priceAsc":

list.sort(
(a,b)=>a.price-b.price
);
break;

case "priceDesc":

list.sort(
(a,b)=>b.price-a.price
);
break;

case "name":

list.sort(
(a,b)=>a.name.localeCompare(b.name)
);
break;

case "rating":

list.sort(
(a,b)=>b.rating-a.rating
);
break;
}

renderProducts(list);
}

function bindEvents(){

document.addEventListener("input",(e)=>{

if(e.target.id==="search"){

searchProducts(e.target.value);

}

});

document.addEventListener("change",(e)=>{

if(e.target.id==="sort"){

sortProducts(e.target.value);

}

});

document.addEventListener("click",(e)=>{

if(e.target.dataset.category){

filterByCategory(
e.target.dataset.category
);

}

if(e.target.classList.contains("add-cart")){

cartCount++;

document.querySelector(".badge")
.textContent = cartCount;

e.stopPropagation();
}

if(e.target.id==="darkBtn"){

document.body
.classList.toggle("dark-mode");
}

const card =
e.target.closest(".card");

if(card && !e.target.classList.contains("add-cart")){

showModal(
Number(card.dataset.id)
);

}

});

}

function showModal(id){

const product =
products.find(
p=>p.id===id
);

const modal =
document.createElement("div");

modal.className="modal";

modal.innerHTML=`

<div class="modal-content">

<h2>${product.name}</h2>

<img src="${product.image}">

<p>
Giá:
${product.price.toLocaleString()}đ
</p>

<p>
Đánh giá:
${product.rating}
</p>

<p>
Danh mục:
${product.category}
</p>

<p>
Tồn kho:
${product.inStock ? "Còn hàng" : "Hết hàng"}
</p>

<button id="closeModal">
Đóng
</button>

</div>
`;

document.body.appendChild(modal);

modal.addEventListener("click",(e)=>{

if(
e.target.id==="closeModal"
||
e.target===modal
){

modal.remove();

}

});

}