//import 라이브러리
import React,{useState} from'react';
 
 const Ex10 = () => {

    const [isLogin,setisLogin] =useState(false);
    
    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handleLogin=(event)=>{
        console.log("버튼작동");
        setisLogin(!isLogin);
    }
 
 return (
 <>
 
 <button type="button" onClick={handleLogin}>로그인 상태변화</button>
    
    {isLogin===true? <p>로그인 된 화면</p> : <p>로그인 안된 화면</p>}
    
    
 

 </>
 );
 }
 export default Ex10;