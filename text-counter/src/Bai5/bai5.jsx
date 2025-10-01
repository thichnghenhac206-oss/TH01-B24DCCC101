import React, { useState } from "react";
import "./bai5.css";

function Bai5() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Xử lý submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!form.name) newErrors.name = "Tên không được để trống";
    if (!form.email) newErrors.email = "Email không được để trống";
    if (!form.password) newErrors.password = "Mật khẩu không được để trống";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(form);
    } else {
      setSubmitted(null);
    }
  };

  return (
    <div className="form-container">
      <h2>Form Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tên</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Đăng ký</button>
      </form>

      {submitted && (
        <div className="result">
          <h3>Thông tin đã nhập:</h3>
          <p><b>Tên:</b> {submitted.name}</p>
          <p><b>Email:</b> {submitted.email}</p>
          <p><b>Mật khẩu:</b> {submitted.password}</p>
        </div>
      )}
    </div>
  );
}

export default Bai5;
