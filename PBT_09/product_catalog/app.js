const products = [
{
    id:1,
    name:"iPhone 16",
    price:25990000,
    category:"phone",
    image:"https://placehold.co/300x200",
    rating:4.8,
    inStock:true
},
{
    id:2,
    name:"Samsung S25",
    price:22990000,
    category:"phone",
    image:"https://placehold.co/300x200",
    rating:4.7,
    inStock:true
},
{
    id:3,
    name:"Xiaomi 16",
    price:14990000,
    category:"phone",
    image:"https://placehold.co/300x200",
    rating:4.4,
    inStock:true
},
{
    id:4,
    name:"MacBook Air M5",
    price:32990000,
    category:"laptop",
    image:"https://placehold.co/300x200",
    rating:4.9,
    inStock:true
},
{
    id:5,
    name:"Dell XPS",
    price:28990000,
    category:"laptop",
    image:"https://placehold.co/300x200",
    rating:4.6,
    inStock:true
},
{
    id:6,
    name:"Asus ROG",
    price:35990000,
    category:"laptop",
    image:"https://placehold.co/300x200",
    rating:4.8,
    inStock:true
},
{
    id:7,
    name:"Sony XM6",
    price:9990000,
    category:"audio",
    image:"https://placehold.co/300x200",
    rating:4.9,
    inStock:true
},
{
    id:8,
    name:"AirPods Pro",
    price:5990000,
    category:"audio",
    image:"https://placehold.co/300x200",
    rating:4.7,
    inStock:true
},
{
    id:9,
    name:"JBL Tune",
    price:1990000,
    category:"audio",
    image:"https://placehold.co/300x200",
    rating:4.2,
    inStock:true
},
{
    id:10,
    name:"Apple Watch",
    price:10990000,
    category:"watch",
    image:"https://placehold.co/300x200",
    rating:4.8,
    inStock:true
},
{
    id:11,
    name:"Galaxy Watch",
    price:7990000,
    category:"watch",
    image:"https://placehold.co/300x200",
    rating:4.5,
    inStock:true
},
{
    id:12,
    name:"Garmin Fenix",
    price:15990000,
    category:"watch",
    image:"https://placehold.co/300x200",
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

    container.className = "container";

    container.innerHTML = `
        <div class="header">

            <h1>Product Catalog</h1>

            <div>

                <button id="darkBtn">
                    🌙 Dark Mode
                </button>

                <div class="cart">
                    🛒
                    <span class="badge">
                        0
                    </span>
                </div>

            </div>

        </div>

        <div class="controls">

            <input
                id="search"
                placeholder="Search..."
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

            <button data-category="all">
                All
            </button>

            <button data-category="phone">
                Phone
            </button>

            <button data-category="laptop">
                Laptop
            </button>

            <button data-category="audio">
                Audio
            </button>

            <button data-category="watch">
                Watch
            </button>

        </div>

        <div
            id="products"
            class="products"
        ></div>
    `;

    app.appendChild(container);

    bindEvents();
}