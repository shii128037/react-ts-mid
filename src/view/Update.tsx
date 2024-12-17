import React, { useEffect, useState, useRef } from 'react';
import { Student } from "../interface/student";
import { api } from "../enum/api"; // API 路徑
import { resp } from "../interface/resp";
import { asyncGet, asyncPut, asyncDelete } from "../utils/fetch";
import { useParams } from "react-router";
import { StudentInfo } from "../componets/StudentInfo";

const Update: React.FC = () => {
    const _id = useParams().id;  // 取得路由參數中的 id

    const [studentInfo, setStudent] = useState<Student | null>(null); // 使用 null 來初始化

    const cache = useRef<boolean>(false); // 用於控制是否已經發送過請求

    // 提交修改的函數
    const submit = async (info: Student) => {
        const res: resp<boolean> = await asyncPut(api.updateByID, info); // 假設 api.updateByID 是用於更新學生資料的 API 路徑
        if (res.code === 200) {
            alert("修改成功");
        } else {
            alert(`修改失敗: ${res.message}`);
        }
    };

    // 刪除學生資料
    const deleteHandler = async () => {
        const res: resp<boolean> = await asyncDelete(`${api.deleteByID}?id=${_id}`);
        if (res.code === 200 && res.body) {
            alert("刪除成功");
        } else {
            alert(`刪除失敗: ${res.message}`);
        }
    };

    useEffect(() => {
        // 做緩存處理，避免多次發起請求
        if (!cache.current && _id) {
            cache.current = true;
            asyncGet(`${api.findByID}?id=${_id}`).then((res: resp<Student>) => {
                if (res.code === 200) {
                    setStudent(res.body);
                }
            });
        }
    }, [_id]);

    return (
        <div className="container">
            {studentInfo ? (
                <div className="update">
                    <StudentInfo
                        {...studentInfo}
                        canEdit={true}
                        canDelte={true}
                        submit={submit}
                        deleteHander={deleteHandler}
                        title="修改學生資訊"
                        submitText="確認修改"
                    />
                </div>
            ) : (
                <div className="loading">loading...</div>
            )}
        </div>
    );
};

export default Update;
