// import React,{} from "react";

export const actionLocal =(data ,next)=>{
    if(typeof  window !== 'undefined'){
        localStorage.setItem('user',JSON.stringify(data))
        next();
    }
}
export const getUser = () =>{
   if(typeof window == 'undefined'){
       return false;
   }
   if(localStorage.getItem('user')){
       return JSON.parse(localStorage.getItem('user'))
   }
}
