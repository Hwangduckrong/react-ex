//import 라이브러리
import React, { useState, useContext } from 'react';


const Ex04 = () => {

    let no=0

    const hendleNamePrint = () => {
        console.log('정우성');
    }
    const hendlePlus = () => {
        no=no+1
        console.log(no);
    }

    return (
        <>
            <button type="button" onClick={hendleNamePrint}>이름출력</button><br></br>
            <button type="button" onClick={hendlePlus}>숫자증가</button>

        </>
    );
}
export default Ex04;