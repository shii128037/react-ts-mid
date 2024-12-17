import fs from 'fs';
import csv from 'csv-parser';
import { MongoClient, Document } from 'mongodb';

// MongoDB 連接設定程式
const uri: string = "mongodb://localhost:27017";
const dbName: string = "412637273";
const collectionName: string = "studentslist";

// 定義資料結構型別
export interface Student {
    
    userName: string,
    sid?: String,
    name: string;
    department: string;
    grade: string;
    class:string,
    email: string;
    absences: string;
}

(async () => {
    const client = new MongoClient(uri);

    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // 讀取 CSV 檔案並解析
        const results: Student[] = [];
        fs.createReadStream('studentslist.csv') // CSV 檔案路徑
            .pipe(csv())
            .on('data', (data: Student) => results.push(data))
            .on('end', async () => {
                try {
                    // 插入資料到 MongoDB
                    const insertResult = await collection.insertMany(results);
                    console.log(`成功插入 ${insertResult.insertedCount} 筆資料！`);

                    // 關閉連接
                    await client.close();
                } catch (insertError) {
                    console.error("資料插入錯誤：", insertError);
                }
            });
    } catch (error) {
        console.error("發生錯誤：", error);
    }

})();
