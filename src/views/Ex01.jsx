//import 라이브러리
import React from 'react';
import '../css/ex01.css';
//주석
/*
주석
*/

//자바스크립트 객체
let cssex={
 width: '100px'
}

let name="황덕룡"

let cssex2={
fontSize: '40px', fontWeight:'bold'}

const Ex01 = () => {

    //html을 쉽게 작성할 수 있다
    //노란색은 객체를 가져다 쓴것이다.
    //-붙은 얘들은 카멜표기법으로 써라 ex)font-size=>fontSize
   
     return (
        <>
        {/*주석*/}
        
        <h1 className="title">정우성 홈페이지</h1>
        <h1 style={{cssex2}}/>
        <h1>{name} 홈페이지</h1>

        <img src="./images/JungWooSung.jpg" alt="정우성 사진" />  
            
        <br/>

        <table border="1">
        <colgroup>
        <col style={{width:'100px'}}/>
        <col style={{width:'100px'}}/>
        <col style={{width:'100px'}}/>
        <col style={cssex}/>
        </colgroup>
            <tbody>
            <tr>
                <td>1,1</td>
                <td>1,2</td>
                <td>1,3</td>
                <td>1,4</td>
            </tr>
            <tr>
                <td rowspan="2"></td>
                <td colSpan="2">2.2</td>
    
                <td>2,4</td>
            </tr>
            <tr>
                
                <td>3,2</td>
                <td>3,3</td>
                <td>4,4</td>
            </tr>
            <tr>
                <td>4,1</td>
                <td>4,2</td>
                <td>4,3</td>
                <td>4,4</td>
            </tr>
            </tbody>
        </table>
        <br>
        </br>

     <div>   
        <label htmlFor ="txt-name">이름</label> 
        <input id="txt-name" type="text" value="" name=""/> 
    </div>
        <label htmlFor="rdo-dog">강아지</label>
        <input id="rdo-dog" type="radio" name="pet"/>
        <label htmlFor='rdo-cat'>고양이</label>
        <input id="rdo cat" type='radio' name='pet'/> 
        </>
    );  
}
//닫는 태그는 항상 잘 지켜라, 문법 무시하면 안됨
export default Ex01;
