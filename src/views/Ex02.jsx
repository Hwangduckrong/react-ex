//import 라이브러리
import React from 'react';
import '../css/reset.css';
import '../css/ex02.css';
import { Link } from 'react-router-dom'




const Ex02 = () => {

    const lastmovie = "2023년 영화 [서울의 봄]";

    return (
        <>
            <h1>정우성 프로필</h1>
            <br />

            <h2>최근 작품</h2>
            {lastmovie}
            <h2>프로필사진</h2>
            <img src='../images/jungWooSung.jpg' alt="정우성사진" />
            <Link to="https://ko.wikipedia.org/wiki/%EC%A0%95%EC%9A%B0%EC%84%B1" target="_blank" rel="noreferrer noopener">
                정우성</Link>
            <h2>정보</h2>
            <table>
                <colgroup>
                <col style={{width:'100xp'}}/>
                <col style={{width:'100xp'}}/>
                <col style={{width:'100xp'}}/>
                <col style={{width:'100xp'}}/>
                </colgroup>
                <thead>
                    <tr>
                        <td>이름</td>
                        <td>소속사</td>
                        <td>생년월일</td>
                        <td>데뷔작</td>
                    </tr>
                </thead>
                <tbody>
                    <td>정우성</td>
                    <td>아티스트컴포니</td>
                    <td>1973/03/20</td>
                    <td>1994년 영화 구미호</td>
                </tbody>
                <tbody>
                    <tr colSpan={"4"}>
                      <ol>
                        2023년 영화 [서울의 봄]
                        2023년 영화 [보호자]
                        2023년 영화 [강철비: 정상회담]
                        2023년 영화 [나는 배가 많이 고픈걸]
                      </ol>
                    </tr>
                </tbody>
            </table>
            <label for>당신의 이메일 주소는?</label>
            <input type="text" name="" value=""/> 

            <br />
        </>

    );
}

export default Ex02;