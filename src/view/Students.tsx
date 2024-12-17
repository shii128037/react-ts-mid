// view/Students.tsx
import { useEffect, useState } from 'react';
import { asyncGet } from '../utils/fetch';
import { api } from '../enum/api';
import { Student } from '../interface/student';
import { resp } from '../interface/resp';

function Students() {
  const [students, setStudents] = useState<Array<Student>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    asyncGet(api.findAll)
      .then((res: resp<Array<Student>>) => {
        if (res.code === 200) {
          setStudents(res.body);
        } else {
          setError('無法取得學生資料');
        }
      })
      .catch(() => setError('發生錯誤，請稍後重試'))
      .finally(() => setLoading(false));
  }, []);

  const studentList = students ? students.map((student: Student) => {
    return (
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
    )
  }) : "loading"

  return (
    <>
      <div className="container">
        {studentList}
      </div>
    </>
  )
}


export default Students;
