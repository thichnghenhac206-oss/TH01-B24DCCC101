import React from "react";
import TextCounter from "./Bai1/TextCounter";
import TrafficLight from "./Bai2/bai2";
import TodoList from "./Bai3/bai3";
import Bai4 from "./Bai4/bai4";
import Bai5 from "./Bai5/bai5";   

function App() {
  return (
    <div>
      <h1>Bài 1: Bộ đếm ký tự</h1>
      <TextCounter />

      <hr />

      <h1>Bài 2: Đèn giao thông</h1>
      <TrafficLight />

      <hr />

      <h1>Bài 3: Danh sách công việc</h1>
      <TodoList />

      <hr />

      <h1>Bài 4: Giỏ hàng</h1>
      <Bai4 />

      <hr />

      <h1>Bài 5: Form Đăng ký</h1>
      <Bai5 />   
    </div>
  );
}

export default App;
