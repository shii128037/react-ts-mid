## StudentHub
## 安裝與執行指引
### 1. 安裝前端依賴
在前端專案目錄下，執行以下命令來安裝所有必要的套件：
```bash
cd frontend
npm install

### 2. 安裝後端依賴
在後端專案目錄下，執行以下命令來安裝所有必要的套件：
bash
複製程式碼
cd backend
npm install

### 3. 設定 MongoDB
確保您已安裝並運行 MongoDB。您可以使用本地 MongoDB 或選擇雲端 MongoDB 服務（如 MongoDB Atlas）。
在 backend/.env 檔案中，設定您的 MongoDB 連接字串：
env
複製程式碼
MONGO_URI=mongodb://localhost:27017/studenthub

### 4. 啟動後端伺服器
在後端專案目錄下，執行以下命令來啟動後端伺服器：
bash
複製程式碼
cd backend
npm run dev
後端伺服器將會運行在 http://localhost:5000。

### 5. 啟動前端應用
在前端專案目錄下，執行以下命令來啟動前端應用：
bash
複製程式碼
cd frontend
npm run dev
前端應用將會運行在 http://localhost:5173。

## API 規格說明
### 1. 取得所有學生資料
請求方式: GET
路徑: /api/students
回應格式:
json
複製程式碼
{
  "status": "success",
  "data": [
    {
      "userName": "john_doe",
      "sid": "S12345678",
      "name": "John Doe",
      "department": "Computer Science",
      "grade": "3",
      "class": "A",
      "Email": "johndoe@example.com",
      "absences": 2
    },
    ...
  ]
}

### 2. 新增學生資料
請求方式: POST
路徑: /api/students
請求參數:
json
複製程式碼
{
  "userName": "jane_doe",
  "sid": "S87654321",
  "name": "Jane Doe",
  "department": "Mathematics",
  "grade": "2",
  "class": "B",
  "Email": "janedoe@example.com",
  "absences": 1
}
回應格式:
json
複製程式碼
{
  "status": "success",
  "data": {
    "userName": "jane_doe",
    "sid": "S87654321",
    "name": "Jane Doe",
    "department": "Mathematics",
    "grade": "2",
    "class": "B",
    "Email": "janedoe@example.com",
    "absences": 1
  }
}

### 3. 更新學生資料
請求方式: PUT
路徑: /api/students/:sid
請求參數:
json
複製程式碼
{
  "userName": "jane_doe_updated",
  "absences": 0
}
回應格式:
json
複製程式碼
{
  "status": "success",
  "data": {
    "userName": "jane_doe_updated",
    "sid": "S87654321",
    "name": "Jane Doe",
    "department": "Mathematics",
    "grade": "2",
    "class": "B",
    "Email": "janedoe@example.com",
    "absences": 0
  }
}

### 4. 刪除學生資料
請求方式: DELETE
路徑: /api/students/:sid
回應格式:
json
複製程式碼
{
  "status": "success",
  "message": "Student deleted successfully"
}

## 架構圖
plaintext
複製程式碼
+------------+       +------------+       +------------+
|  Frontend  | <---> |  Backend   | <---> |  MongoDB   |
+------------+       +------------+       +------------+
    React                Express            MongoDB
    TypeScript
## 流程圖
plaintext
複製程式碼
+----------+       +-----------------+       +-------------+
|  使用者  |       |     前端        |       |   後端      |
+----------+       +-----------------+       +-------------+
    |                     |                        |
    | 發送請求             | 發送 HTTP 請求          | 處理請求   |
    |--------------------->|----------------------->|-----------|
    |                     | 返回資料              | 返回資料   |
    |                     | <---------------------|-----------|
    | 顯示結果             | 顯示學生列表          |             |
    +---------------------+----------------------+
