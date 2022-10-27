import React, { useState } from "react";
import "./PassingCount.css";

//자식 1 컴포넌트
const FirstChild = (props) => {
  console.log(`자식1 ${props.data}`);
  //부모컴포넌트로부터 전달받은 data로 카운터 표시
  return (
    <div className="first">
      <p>자식 1컴포넌트</p>
      <p> (카운터: {props.data})</p>
    </div>
  );
};

//자식 2 컴포넌트
const SecondChild = (props) => {
  //왼쪽 버튼 클릭 시 왼쪽(자식1)카운터에 + 1 적용
  const onLeftClick = () => props.setLeft((data) => data + 1);
  //오른쪽 버튼 클릭 시 오른쪽(자식1)카운터에 + 1 적용
  const onRightClick = () => props.setRight((data) => data + 1);

  console.log("자식 2 (버튼)");
  //가운데 버튼 클릭 시 부모로부터 전달 받은 resetData함수 적용
  return (
    <div className="second">
      <p>자식 2 컴포넌트</p>
      <button onClick={onLeftClick}> 자식 1 카운터++ </button>
      <button onClick={props.resetData}> 카운터0</button>
      <button onClick={onRightClick}> 자식 2 카운터++ </button>
    </div>
  );
};

//자식 3 컴포넌트
const ThirdChild = (props) => {
  console.log(`자식3 ${props.data}`);
  //부모컴포넌트로부터 전달받은 data로 카운터 표시
  return (
    <div className="third">
      <p>자식3 컴포넌트</p>
      <p>(카운터: {props.data})</p>
    </div>
  );
};

//부모 컴포넌트
const PassingCount = (props) => {
  //왼쪽(자식 1) 카운트
  const [leftCount, setLeftCount] = useState(0);
  //오른쪽(자식 2) 카운트
  const [rightCount, setRightCount] = useState(0);
  const resetData = () => {
    setLeftCount(0);
    setRightCount(0);
  };
  return (
    <div className="parent">
      부모컴포넌트
      <br />
      (왼쪽 카운트: {leftCount}, 오른쪽 카운트: {rightCount})
      <div className="layout">
        <FirstChild data={leftCount} />
        <SecondChild
          setLeft={setLeftCount}
          setRight={setRightCount}
          resetData={resetData}
        />
        <ThirdChild data={rightCount} />
      </div>
    </div>
  );
};

export default PassingCount;
