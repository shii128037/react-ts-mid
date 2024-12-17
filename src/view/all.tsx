import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Student {
  userName: string;
  sid: string;
  name: string;
  department: string;
  grade: string;
  class: string;
  Email: string;
  absences?: number;
}

const All: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://163.13.201.151:8877/api/v1/user/findAll');
        setStudents(response.data);
      } catch (err) {
        setError('無法獲取學生資料');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <p>載入中...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>所有學生資訊</h2>
      <p>這裡將顯示所有學生的列表。</p>
      <table>
        <thead>
          <tr>
            <th>帳號 </th>
            <th>學號 </th>
            <th>姓名 </th>
            <th>系所 </th>
            <th>年級 </th>
            <th>班級 </th>
            <th>電子郵件 </th>
            <th>缺席次數 </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.sid}>
              <td>{student.userName}</td>
              <td>{student.sid}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.grade}</td>
              <td>{student.class}</td>
              <td>{student.Email}</td>
              <td>{student.absences ?? 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default All;
