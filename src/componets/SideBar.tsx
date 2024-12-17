import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'; // 引入樣式檔案

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>學生資訊管理</h2>
      <ul>
        <li>
          <Link to="/all">所有學生</Link>
        </li>
        <li>
          <Link to="/add">新增學生</Link>
        </li>
        <li>
          <Link to="/update">更新學生</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
