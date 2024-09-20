//import 라이브러리
import React, { useState } from 'react';

const Ex08 = () => {

    /*--상태관리 관련 변수들 (화면에 rendering)--*/
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    /*--이벤트 관련 함수들--*/
    
    //이메일 입력할 때
    let handleEmailChange = (event) => {
        console.log(event.target.value, "현재 text 창의 value 값을 setEmail(화면반영)을 통해서 변수에 반영")

        setEmail(event.target.value);
        console.log("email 변수의 값을 읽어서 value에 반영");
    };
    //비밀번호 입력할 때
    let handlePasswordChange = (event) => {
        console.log(event.target.value, "비밀번호 입력");

        setPassword(event.target.value);
        console.log("password 변수 값을 읽어서 value값에 반영")

    };

    //로그인 할때
    let handleSubmit=(e)=>{
        
        //이벤트 잡는다
        console.log("전송");
        e.preventDefault();
        console.log("기본기능 방지, 못하게 막음");//결과를 데이터만 받는다. axios 써야한다. 그냥 어려우면 submit 있으면 막아라
        console.log(e.target);

        //데이터수집 객체로 묶기
     
        const formValue={
            email: email,
            password: password
        };

        
        //전송
        //axios
    };
    return (
        <>
            <form action="" method="get" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="txt-email">이메일</label>
                    <input id="txt-email" type="text" name="" value={email} onChange={handleEmailChange} />
                </div>

                <div>
                    <lable htmlFor="txt-password">패스워드</lable>
                    <input id="txt-password" type="text" name="" value={password} onChange={handlePasswordChange} />

                </div>
                <br />
                <button type="submit">로그인</button>

            </form>
        </>
    );
}
export default Ex08;