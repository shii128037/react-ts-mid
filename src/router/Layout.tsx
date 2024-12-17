import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      {/* 頁面標頭 */}
      <header style={{ backgroundColor: '#282c34', color: 'white', padding: '1rem' }}>
        <h1>Student Management System</h1>
      </header>

      {/* 側邊導航 */}
      <nav style={{ backgroundColor: '#f4f4f4', width: '200px', float: 'left', padding: '1rem', height: '100vh' }}>
        <ul>
          <div><Link to="/">首頁</Link></div>
          <div><Link to="/all">所有學生</Link></div>
          <div><Link to="/insert">新增學生</Link></div>
          <div><Link to="/update">修改學生資訊</Link></div>
        </ul>
      </nav>

      {/* 主要內容區域 */}
      <main style={{ marginLeft: '220px', padding: '1rem' }}>
        <Outlet /> {/* 這裡會顯示對應路由的子組件 */}
      </main>
    </div>
  );
}

export default Layout;
