import React, { useState } from "react";
import { Student } from "../interface/student";

interface StudentInfoProps extends Student {
  title: string; // 表單標題
  submitText: string; // 提交按鈕文字
  canEdit: boolean; // 是否可編輯
  canDelte?: boolean; // 是否顯示刪除按鈕
  submit: (info: Student) => void; // 提交事件
  deleteHander?: () => void; // 刪除事件 (選填)
}

export const StudentInfo: React.FC<StudentInfoProps> = (props) => {
  const {
    title,
    submitText,
    canEdit,
    canDelte = false,
    submit,
    deleteHander,
    ...initInfo
  } = props;

  // 使用 useState 管理表單數據
  const [formData, setFormData] = useState<Student>({ ...initInfo });

  // 處理輸入變化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 提交表單
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(formData);
  };

  return (
    <div className="form-container">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <p>
          帳號:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            disabled={!canEdit}
            required
          />
        </p>
        <p>
          座號:
          <input
            type="text"
            name="sid"
            value={formData.sid}
            onChange={handleChange}
            disabled={!canEdit}
            required
          />
        </p>
        <p>
          姓名:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={!canEdit}
            required
          />
        </p>
        <p>
          院系:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            disabled={!canEdit}
            required
          />
        </p>
        <p>
          年級:
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            disabled={!canEdit}
            required
          />
        </p>
        <p>
          班級:
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            disabled={!canEdit}
            required
          />
        </p>
        <p>
          Email:
          <input
            type="email"
            name="Email"
            value={formData.email}
            onChange={handleChange}
            disabled={!canEdit}
            required
          />
        </p>

        <div className="buttons">
          {/* 提交按鈕 */}
          <button type="submit" disabled={!canEdit}>
            {submitText}
          </button>

          {/* 刪除按鈕 */}
          {canDelte && deleteHander && (
            <button type="button" onClick={deleteHander} className="delete-btn">
              刪除
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
