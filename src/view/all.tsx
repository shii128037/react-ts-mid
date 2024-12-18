import React, { useEffect, useRef, useState } from 'react';
import { asyncGet } from "../utils/fetch";
import { Student } from '../interface/student';
import { api } from '../enum/api';

const All: React.FC = () => {
  const [students, setStudents] = useState<Student[] | null>(null);
    const cache = useRef<boolean>(false);

    useEffect(() => {
        if (!cache.current) {
            cache.current = true;
            asyncGet(api.findAll).then((res: { code: number, body: Student[] }) => {
                if (res.code === 200) {
                    setStudents(res.body);
                }
            });
        }
    }, []);

  /**
* 列表遍歷渲染, 若請求為 pending 狀態, 顯示 loading
*/
const studentList = students ? students.map((student: Student) => (
  <div className='student' key={student._id}>
      <p>帳號: {student.userName}</p>
      <p>座號: {student.sid}</p>
      <p>姓名: {student.name}</p>
      <p>院系: {student.department}</p>
      <p>年級: {student.grade}</p>
      <p>班級: {student.class}</p>
      <p>Email: {student.email}</p>
      <p>缺席次數: {student.absences ? student.absences : 0}</p>
  </div>
)) : "loading";

return (
  <>
      <div className="container">
          {studentList}
      </div>
  </>
);
};

export default All;
