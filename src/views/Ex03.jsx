//import 라이브러리
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';


const Ex03 = () => {
    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    /*---일반 메소드 --------------------------------------------*/
    
    
    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    return (
        <>
        <h1>입사지원</h1>
        <h2>인삿말</h2>
        <img src="./images/job.jpg" alt="입사지원서" />
        <p>안녕하세요,hwangcompany에 오신 것을 환영합니다!<br></br>
        저희 회사는 열정과 창의력을 가진 인재를 찾고 있으며, 여러분의 도전과 성장을 함께<br></br>
        하고 싶습니다.<br></br>
        이곳에서 여러분의 꿈을 펼쳐보세요.<br></br>입사지원서를 제출해 주셔서 감사드리며,좋은 인연이 되기를 바랍니다.
        <br></br>감사합니다.
        <br></br>사장 황덕룡
        <br></br>
        <br></br> 
        </p>

        <h2>모집요강</h2>
       <table border={1}>
        <thead>
           <tr>
             <td colSpan="2">모집직군</td>
             
             <td>모집전공</td>
             <td colSpan="2">비고</td>
             
           </tr>
        </thead>
        <tbody>   
           <tr>
             <td colSpan="2">생산기술직</td>
             <td>화학공학</td>
             <td rowSpan="3" colSpan="2">전공관련우대</td>
             
           </tr>
           <tr>
             <td rowSpan="2">생산지원직</td>
             <td>공무</td>
             <td>기계전기</td>
             
             
           </tr>
           <tr>
             <td>안전환경</td>
             <td>안전,환경</td>
           
             
        
           </tr>
           <tr>
             <td colSpan="2">연구개발</td>
             <td>화학공학</td>
             <td colSpan="2">석사</td>
           </tr>
        </tbody>

       </table>
        <br></br>
        <br></br>
        <h2>이력서제출</h2>
        <p>파일첨부</p><button>파일첨부</button><p>선택된 파일 없음</p>
        </>
    );
}
export default Ex03;