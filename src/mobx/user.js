//import {makeAutoObservable } from "mobx-react"; 
import {observable,action,computed,makeAutoObservable} from "mobx";
class userInfo {
   constructor(){
    makeAutoObservable(this);
   }
    @observable userInfo=1;
    @action changeUserInfo=(val)=>{
        this.userInfo=val
        console.log(val,"change")
        console.log(this.userInfo)
        return true
    };
    @computed get getUserInfo(){
        return this.userInfo
    }
   
}

const userinfo=new userInfo();
export default userinfo;