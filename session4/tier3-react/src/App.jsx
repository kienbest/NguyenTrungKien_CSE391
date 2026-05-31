import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: "25000000",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Samsung S24",
      price: "22000000",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Xiaomi 14",
      price: "15000000",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div>
      <h1>Cửa hàng điện thoại</h1>

      <div style={{ display: "flex" }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;