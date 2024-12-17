import { createHashRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../view/home";
import All from "../view/all";
import { Insert } from "../view/Insert";
import Update from "../view/Update";

// 設定路由並將 Layout 作為包裹元件
export const router = createHashRouter([
    {
        path: "/", // 頂層路由
        element: <Layout />, // 使用 Layout 包裹所有子路由
        children: [
            { 
                path: "/", 
                element: <Home /> // 預設首頁組件
            },
            { 
                path: "/all", 
                element: <All /> // 顯示所有學生的頁面
            },
            { 
                path: "/insert", 
                element: <Insert /> // 插入新增學生的頁面
            },
            { 
                path: "/update", 
                element: <Update /> // 更新學生資訊的頁面
            },
        ]
    },
]);
