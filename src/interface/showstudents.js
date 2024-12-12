const { MongoClient } = require('mongodb');

// MongoDB 連接設定程式
const uri = "mongodb://localhost:27017";
const dbName = "412637273";
const collectionName = "studentslist";

(async () => {
    const client = new MongoClient(uri);

    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        //查詢所有學生資料
        const students = await collection.find().toArray();

        //顯示結果
        console.log("學生資料列表:");
        students.forEach(student => {
            console.log(student);
        });

    } catch (error) {
        console.error("發生錯誤：", error);
    }finally {
        // 關閉連接
        await client.close();
        console.log("已斷開 MongoDB 連接");
    }

})();