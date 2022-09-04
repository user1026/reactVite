import {Route} from "react-router-dom"


export default function HOCRouter (props){
const {RouterList}=props;
    if(RouterList.length===0){
            return (
                <div></div>
            )
    }else{
        return (
            <Route></Route>
        )
    }

}