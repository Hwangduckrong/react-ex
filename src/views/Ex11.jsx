//import 라이브러리
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Ex11 = () => {

    const [searchParams] = useSearchParams();
    const strNo = searchParams.get('no');
    const intNo = Number(strNo);


    //일반 함수

    const getImgTag = (no) => {
        
        if (no === 1) {
            console.log("1번그림");
            return <img src="./images/01.png" alt="1번그림"/>
        } else if (no === 2) {
            console.log("2번그림");
            return <img src="./images/02.png" alt="2번그림"/>
        } else if (no === 3) {
            console.log("3번그림");
            return <img src="./images/03.png" alt="3번그림"/>
        } else if (no === 4) {
            console.log("4번그림");
            return <img src="./images/04.png" alt="4번그림"/>
        } else{
            console.log("그림없음");
        }   return <p>그림이 없넹? ㅋㅋㅋㅋㅋ되돌아가셈</p>


    }

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    return (
        <>

            {getImgTag(intNo)}
            

        </>
    );
}
export default Ex11;