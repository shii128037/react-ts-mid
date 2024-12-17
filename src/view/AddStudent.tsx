// view/AddStudent.tsx
import { useState } from 'react';
import { asyncPost } from '../utils/fetch';
import { api } from '../enum/api';

function AddStudent() {
  const [studentInfo, setStudentInfo] = useState({
    userName: '',
    name: '',
    department: '',
    grade: '',
    class: '',
    Email: '',
  });

  const handleSubmit = async () => {
    const res = await asyncPost(api.insertOne, studentInfo);
    // 根據返回的結果進行處理
    if (res.code === 200) {
      alert('新增成功');
    } else {
      alert('新增失敗');
    }
  };

  return (
    <div>
      <h1>新增學生</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="帳號"
          value={studentInfo.userName}
          onChange={(e) => setStudentInfo({ ...studentInfo, userName: e.target.value })}
        />
        <input
          type="text"
          placeholder="姓名"
          value={studentInfo.name}
          onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="院系"
          value={studentInfo.department}
          onChange={(e) => setStudentInfo({ ...studentInfo, department: e.target.value })}
        />
        <input
          type="text"
          placeholder="年級"
          value={studentInfo.grade}
          onChange={(e) => setStudentInfo({ ...studentInfo, grade: e.target.value })}
        />
        <input
          type="text"
          placeholder="班級"
          value={studentInfo.class}
          onChange={(e) => setStudentInfo({ ...studentInfo, class: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={studentInfo.Email}
          onChange={(e) => setStudentInfo({ ...studentInfo, Email: e.target.value })}
        />
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default AddStudent;
