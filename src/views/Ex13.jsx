//import 라이브러리
import React from 'react';

const Ex13 = () => {

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    const personList = [
        { no: 1, name: '정우성', hp: '010-1111-1111' },
        { no: 2, name: '이효리', hp: '010-2222-2222' },
        { no: 3, name: '박명수', hp: '010-3333-3333' },
        { no: 4, name: '유재석', hp: '010-4444-4444' },
        { no: 5, name: '정준하', hp: '010-5555-5555' }
    ]
    const totalCnt=5;
    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>pk</td>
                        <td>이름</td>
                        <td>핸드폰</td>
                    </tr>
                </thead>
                <tbody>
                    {


                        personList.map((personVo,index) => {
                            console.log("aaa");
                            console.log(index);//왜 인덱스를 부여하지? 몇번째인지 파악해보려고! pk는 중간에 빌수도 있어서 계산할 수 없다. 식별하기 위해선 총 양에서 인덱스를 빼보면 된다.
                            return (



                                <tr key={personVo.no}>
                                    <td>{totalCnt-index}</td>
                                    <td>{personVo.no}</td>
                                    <td>{personVo.name}</td>
                                    <td>{personVo.hp}</td>

                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>

        </>
    );
}
export default Ex13;