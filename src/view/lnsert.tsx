import { useState } from "react";
import { asyncPost } from "../utils/fetch"; // 假設有 asyncPost 用於 POST 請求
import { api } from "../enum/api"; // API 路徑
import "../style/App.css"; // 引入樣式

function InsertStudent() {
  // 定義表單資料的 state
  const [student, setStudent] = useState({
    userName: "",
    name: "",
    department: "",
    grade: "",
    class: "",
    Email: "",
  });

  // 定義錯誤及成功消息
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 處理表單輸入變化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  // 提交表單
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 防止頁面重新加載
    setMessage(null);
    setError(null);

    try {
      const response = await asyncPost(api.insertOne, student);
      if (response.code === 200) {
        setMessage("學生新增成功！");
        setStudent({
          userName: "",
          name: "",
          department: "",
          grade: "",
          class: "",
          Email: "",
        });
      } else {
        setError(response.message || "新增失敗，請重試。");
      }
    } catch (err) {
      setError("發生錯誤，請稍後重試。");
    }
  };

  return (
    <div className="container">
      <h1>新增學生</h1>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="form">
        <label>
          帳號:
          <input
            type="text"
            name="userName"
            value={student.userName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          姓名:
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          院系:
          <input
            type="text"
            name="department"
            value={student.department}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          年級:
          <input
            type="text"
            name="grade"
            value={student.grade}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          班級:
          <input
            type="text"
            name="class"
            value={student.class}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="Email"
            value={student.Email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default InsertStudent;
