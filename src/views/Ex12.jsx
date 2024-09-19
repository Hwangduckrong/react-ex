//import 라이브러리
import React from'react';
 
 const Ex12 = () => {

 /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const fruitList =['사과','바나나','체리','포도']

 return (
 <>
    <ul>
    {
        fruitList.map((fruit,index)=> {
            console.log(fruit);
            console.log(index);

            return(
                <li key={index}>{fruit}</li>
            )
        })
    
    }
    </ul>
 </>
 );
 }
 export default Ex12;