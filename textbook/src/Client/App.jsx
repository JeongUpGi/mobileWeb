import React, { useState, useEffect } from "react";
import "./App.css";

//웹 서버 접속 주소
const serverURL = "http://localhost:65020/users";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [userChecked, setUserChecked] = useState(); //회원 확인 유무에 따른 안내문을 나타내기 위한 state변수

  const getUserData = () => {
    fetch(serverURL) //REST API로 서버로 회원목록 요청
      .then((res) => res.json()) //회원목록은 json포맷으로 수신
      .then((data) => setUserData(data)) //받은 데이터를 setState함수로 업데이트
      .then(console.log(userData)); //콘솔창 출력
  };

  useEffect(getUserData, []); //마운트 시에만 서버데이터를 가져오도록 설정

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const id = e.target.id.value;
    const passwd = e.target.passwd.value;
    console.log("Submit버튼 클릭 후 서버로 POST 전송");

    fetch(serverURL, {
      //서버로 입력정보 전송
      method: "POST", //POST방식으로 전송
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, id, passwd }),
    }).then(getUserData());
  };

  const onCheckHandler = (e) => {
    e.preventDefault();
    const id = e.target.id.value; //이벤트로 전달된 id, passwd를 통해 회원 유무 확인
    const passwd = e.target.passwd.value;

    if (
      //userData의 아이디, 암호와 입력한 data의 아이디, 암호가 일치하다면 filter통해 나오는 값의 length는 1이 됨.
      userData.filter((user) => user.id === id && user.passwd === passwd)
        .length >= 1
    ) {
      console.log("회원입니다");
      setUserChecked(true);
    } else {
      console.log("회원이 아닙니다");
      setUserChecked(false);
    }
  };

  return (
    <>
      <div>
        <h2>회원등록</h2>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="name" placeholder="이름" />
          <input type="text" name="id" placeholder="아이디" />
          <input type="text" name="passwd" placeholder="암호" />
          <button type="submit">등록</button>
        </form>
      </div>
      <p></p>
      <div>
        {" "}
        {/* 회원확인 엘리먼트 */}
        {userChecked === true ? <h2>회원검색</h2> : <h2>회원확인</h2>}
        <form onSubmit={onCheckHandler}>
          <input type="text" name="id" placeholder="아이디" />
          <input type="text" name="passwd" placeholder="암호" />
          <button type="submit">회원 확인</button>
        </form>
        {/* button의 submit을 통해 회원 유무를 확인하게 되고 그에 걸맞는 문구 표시 */}
        {/* true, false를 따로 적용한 이유 --> userChecked가 처음부터 false로 설정되어 있어 삼항 조건연산자를 하나만 사용하면 처음 렌더링되는 view부터 뒷 조건(else이기에..)에 대한 글이 출력되어 삼항 조건 연산자 2개 사용 */}
        {userChecked === true ? (
          <p className="alert">회원으로 확인되었습니다.</p>
        ) : null}
        {userChecked === false ? (
          <p className="alert">그런 회원은 없습니다.</p>
        ) : null}
      </div>
      {/* 회원확인 엘리먼트 */}
      <p></p>
      <div>
        <h2>회원목록</h2>
        <ol>
          {userData === null ? ( //데이터 수신되었는지에 대한 확인
            <p>서버에서 데이터를 가져오는 중....</p>
          ) : (
            userData.map((user, i) => (
              //수신되었다면 목록으로 처리
              <li key={user.keyid}>
                {user.name} {user.id} {user.passwd}
              </li>
            ))
          )}
        </ol>
      </div>
    </>
  );
};

export default App;
