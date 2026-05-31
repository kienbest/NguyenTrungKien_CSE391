function ListRendering() {

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 15000000
        },
        {
            id: 2,
            name: "Chuột",
            price: 300000
        },
        {
            id: 3,
            name: "Bàn phím",
            price: 1200000
        },
        {
            id: 4,
            name: "Màn hình",
            price: 4500000
        },
        {
            id: 5,
            name: "Tai nghe",
            price: 900000
        }
    ];

    const total = products.reduce(
        (sum, p) => sum + p.price,
        0
    );

    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh sách sản phẩm</h2>

            <ul>
                {products.map(product => (
                    <li
                        key={product.id}
                        style={{
                            color:
                                product.price > 1000000
                                    ? "red"
                                    : "black"
                        }}
                    >
                        {product.name} -
                        {product.price.toLocaleString()} VNĐ
                    </li>
                ))}
            </ul>

            <h3>
                Tổng tiền:
                {total.toLocaleString()} VNĐ
            </h3>
        </div>
    );
}

export default ListRendering;