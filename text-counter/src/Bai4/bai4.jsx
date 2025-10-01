import React, { useState } from "react";
import "./bai4.css";

// Component ProductItem
function ProductItem({ product, addToCart }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Giá: {product.price}đ</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
}

// Component chính Bai4
export default function Bai4() {
  const [cart, setCart] = useState([]);

  // Danh sách sản phẩm
  const products = [
    { id: 1, name: "Sản phẩm A", price: 100 },
    { id: 2, name: "Sản phẩm B", price: 200 },
    { id: 3, name: "Sản phẩm C", price: 300 },
  ];

  // Thêm vào giỏ
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Tính tổng số sp + tổng tiền
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bai4-container">
      <h2>
        Giỏ hàng: {totalItems} sản phẩm, tổng tiền: {totalPrice}đ
      </h2>

      <div className="product-list">
        {products.map((p) => (
          <ProductItem key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
