import React, { useState } from "react";
import axios from "axios";

interface Student {
  _id: string; // 假設 MongoDB 有 _id
  userName: string;
  sid: string;
  name: string;
  department: string;
  grade: string;
  class: string;
  Email: string;
  absences: number;
}

const Update = () => {
  const [student, setStudent] = useState<Student>({
    _id: "",
    userName: "",
    sid: "",
    name: "",
    department: "",
    grade: "",
    class: "",
    Email: "",
    absences: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/students/${student._id}`, // 更新 API
        student
      );
      alert("資料更新成功！");
      console.log(response.data);
    } catch (error) {
      console.error("更新失敗:", error);
    }
  };

  return (
    <div>
      <h1>更新學生資料</h1>
      <input
        name="userName"
        placeholder="User Name"
        value={student.userName}
        onChange={handleChange}
      />
      <input
        name="sid"
        placeholder="學號"
        value={student.sid}
        onChange={handleChange}
      />
      {/* 其他欄位 */}
      <button onClick={handleUpdate}>更新</button>
    </div>
  );
};

export default Update;
