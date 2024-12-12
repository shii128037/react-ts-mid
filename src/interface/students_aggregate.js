const fs = require('fs');
const csv = require('csv-parser');

// 初始化物件儲存各科系人數
const departmentCounts = {};

// 讀取 CSV 檔案
fs.createReadStream('studentslist.csv')
  .pipe(csv()) // 使用 csv-parser 解析
  .on('data', (row) => {
    const department = row['院系']; // 取得科系資料
    if (department) {
      departmentCounts[department] = (departmentCounts[department] || 0) + 1;
    }
  })
  .on('end', () => {
    // 將結果印出來
    console.log('各科系人數統計：');
    for (const [department, count] of Object.entries(departmentCounts)) {
      console.log(`${department}: ${count} 人`);
    }
  })
  .on('error', (err) => {
    console.error('讀取 CSV 發生錯誤：', err);
  });
