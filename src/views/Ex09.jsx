//import 라이브러리
import React,{useState} from'react';
 
 const Ex09 = () => {

    const [isLogin,setisLogin] =useState(false);
    
    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    /* const handleLogin=()=>{
        
        if{isl}
        
        }*/


    const handleLogin=(event)=>{
        console.log("버튼작동");
        setisLogin(!isLogin);
    }

    
 /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
 return (
 <>
    <button type="button" onClick={handleLogin}>로그인 상태변화</button>

    {isLogin===true?  <p>로그인된화면</p> : <p>로그인안된화면</p>}
   
    {
        (isLogin===true)? (
            <div>
                <ul>
                <li>로그인된 화면</li>
                <li>로그아웃버튼</li>
                <li>회원정보수정화면이동</li>
                <br/>
                </ul>
            </div>
            ) : (

           
            <ul>
                <li>로그인 안된 화면</li>
                <li>로그인버튼</li>
                <li>회원정보수정화면이동</li>
            </ul>
            )
         
         }
 </>
 );
 }
 export default Ex09;