//import 라이브러리
import React,{useState,useEffect} from'react';
 
 const Ex15 = () => {
    
    const[no,setNo]=useState(0);
    
 /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    
    //[]마운트될때
    useEffect(()=>{
        console.log("no가 변할때")

    },[no]); //로딩될때

    //버튼클릭했을때
    const handlePlus=()=>{
        console.log("숫자증가");
        //setNo(no+1);
        setNo((prevNo)=>{
           return prevNo+1;

        })
        console.log(no);

    }

    return (
 <> 
    {no}<br/>
    <button type='button' onClick={handlePlus}>버튼</button>

 </>
    );
 }
 export default Ex15