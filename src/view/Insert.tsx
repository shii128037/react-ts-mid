import { StudentInfo } from "../componets/StudentInfo"
import { resp } from "../interface/resp";
import { Student } from "../interface/student"
import { asyncPost } from "../utils/fetch" // 假設有 asyncPost 用於 POST 請求
import { api } from "../enum/api" // API 路徑
import "../style/App.css" // 引入樣式

export const Insert:React.FC = () => {

    const initInfo = {
      userName: "",
      sid: "",
      name: "",
      department: "",
      grade: "",
      class: "",
      Email: "",
    }

    const submitHandler = async (info: Student)=>{
        const res = await asyncPost(api.insertOne,info)
        //if成功
        if (res.code == 200) {
          alert(res.message);
        }else{
          alert(`[新增失敗: ${res.message}`)
        }
    }

    return(
        <div className="containter">
            <StudentInfo _id={""} email={""} title="新增學生" submitText="確認新增" canEdit={true} submit={submitHandler} {...initInfo}/>
        </div>
    )
}