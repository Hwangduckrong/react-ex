//import 라이브러리
import React,{useEffect} from'react';
 
 const Ex14 = () => {

 /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
 
    useEffect(()=>{
        console.log("마운트될때")

    },[]); //로딩될때

    return (
 <>
    
    <button type='button' >버튼</button>

 </>
    );
 }
 export default Ex14