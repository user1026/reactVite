import {Route} from "react-router-dom"
import NotFinded from "@/view/baseHtml/404/404.jsx";
import Login from "@/view/baseHtml/login/login.jsx";
import {Routes,Route,Router,useRoutes} from "react-router-dom"
export default function HOCRouter (props){
const {RouterList}=props;
const RouterMap=(List)=>{
    let arr=[];
    for(let i=0;i<List.length;i++){
        List[i].element=import(`@/view/${list[i].element}`);
        if(List[i].children){
            List[i].children=RouterMap(List[i].children);
        }
    }
   return arr;
}
RouterList=RouterList.map(val)
    if(RouterList.length!==0){
            return (
              <Routes>
               {useRoutes(RouterList)}
              </Routes>
            )
    }else{
        return (
            <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<NotFinded />}></Route>
            </Routes>
        )
    }

}