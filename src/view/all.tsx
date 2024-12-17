import React, { useEffect, useState } from "react";
import { api } from "../enum/api";

// 定義學生資料型別
interface Student {
  sid: string;
  userName: string;
  name: string;
  department: string;
  grade: string;
  class: string;
  Email: string;
  absences?: number;
}

const AllStudents: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]); // 學生資料狀態
  const [loading, setLoading] = useState<boolean>(true);   // 載入狀態
  const [error, setError] = useState<string | null>(null); // 錯誤訊息

  // 呼叫 API 取得學生資料
  const fetchStudents = async () => {
    try {
      const response = await fetch(api.findAll); // 從 api.ts 取得 API 路徑
      if (!response.ok) {
        throw new Error("無法取得學生資料");
      }
      const result = await response.json();
      setStudents(result.body || []); // 設定學生資料
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Component 掛載時呼叫 fetchStudents
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>學生清單</h1>

      {/* 載入狀態 */}
      {loading && <p>載入中...</p>}

      {/* 錯誤訊息 */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 學生清單 */}
      {!loading && !error && (
        <table border={1} cellPadding={10} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>序號</th>
              <th>學號</th>
              <th>名字</th>
              <th>科系</th>
              <th>年級</th>
              <th>班級</th>
              <th>Email</th>
              <th>缺席次數</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.sid}>
                  <td>{index + 1}</td>
                  <td>{student.userName}</td>
                  <td>{student.name}</td>
                  <td>{student.department}</td>
                  <td>{student.grade}</td>
                  <td>{student.class}</td>
                  <td>{student.Email}</td>
                  <td>{student.absences || 0}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} style={{ textAlign: "center" }}>
                  無學生資料
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllStudents;
