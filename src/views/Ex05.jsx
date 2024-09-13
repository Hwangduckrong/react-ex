import React, { useState, useContext } from 'react';


const Ex05 = () => {
    let no=0;
    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    /*---일반 메소드 --------------------------------------------*/
    const handleNamePrint = ()=>{
    console.log('정우성');
    };
    const handlePlus =() =>{
        no=no+1;
        console.log=(no);
    };
    const handleMinus=()=>{
        no=no-1;
        console.log=(no);
    }

       
    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    return (
    <>
    <button type="button" onClick={handleNamePrint}>이름출력</button><br></br>
    <button type="button" onClick={handlePlus}>더하기</button>
    <button type="button" onClick={handleMinus}>빼기</button>
    </>
    );
};
    export default Ex05;