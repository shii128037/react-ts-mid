import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../view/home'; // 首頁
import Students from './Students'; // 學生清單頁面
import AddStudent from '../view/AddStudent'; // 新增學生頁面

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 首頁路由 */}
        <Route path="/students" element={<Students />} /> {/* 學生清單路由 */}
        <Route path="/add-student" element={<AddStudent />} /> {/* 新增學生路由 */}
      </Routes>
    </Router>
  );
}

export default App;
