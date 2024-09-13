import React, { useState, useContext } from 'react';

const Ex06 = () => {

    //let no = 0;

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    let [no,setNo] = useState(0);
    let [name,setName] = useState("정우성");
    //let sum = plus(3,5)
    const handlePlus = () => {
        /*
        no = no + 1;
        console.log(no);
        */
       /*setNo(function(preNo)){
        return preNo+1
       }*/
        setNo( (preNo)=>{
            return preNo+1;
        });


        
    };
    const handleNamePrint= ()=>{
        console.log("정우성-콘솔")
        setName("박명수");
    };

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    return (
        <>

        <button type='button' onClick={handlePlus}>숫자증가</button>

        {name}
        <button type='button' onClick={handleNamePrint}>정우성</button>
        </>
    );
}
export default Ex06;