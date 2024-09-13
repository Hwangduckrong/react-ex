import React, { useState, useContext } from 'react';
const Ex07 = () => {

    let [no,setNo] = useState(0);
   
    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    /*---일반 메소드 --------------------------------------------*/
    const handleMinus = () => {
        setNo( function(preNo){
            return preNo-1;
        });
    };

    const handlePlus=()=>{
        setNo((preNo)=>{
            return preNo+1;
        });
    
    
    
    };
    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    return (
        <>
        {no}
        <button type='button' onClick={handleMinus}>숫자감소</button>
        <button type='button' onClick={handlePlus}>숫자증가</button>
    
        </>
    );
}
export default Ex07;
