// view/Home.tsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>歡迎來到學生管理系統</h1>
      <p>這裡是首頁，您可以選擇以下選項：</p>
      <ul>
        <li><Link to="/students">查看學生清單</Link></li>
        <li><Link to="/add-student">新增學生</Link></li>
      </ul>
    </div>
  );
}

export default Home;
