import React, { useState, useEffect } from "react";
import "./App.css";

//웹 서버 접속 주소
const serverURL = "http://localhost:65010/users";

const App = () => {
  const [userData, setUserData] = useState(null);

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
