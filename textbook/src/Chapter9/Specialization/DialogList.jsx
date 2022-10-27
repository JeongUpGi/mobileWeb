import React from "react";
import Dialog from "./Dialog";
import "./DialogList.css";

const DialogList = (props) => {
  //범용 다이얼로그를 구체화 시켜 각각의 다이얼로그 컴포넌트를 만듦.(specialization)
  return (
    <div>
      <Dialog
        title="경고 다이얼로그"
        backgroundColor="red"
        message="경고 다이얼로그 컴포넌트입니다."
      />
      <Dialog
        title="인사말 다이얼로그"
        backgroundColor="green"
        message="인사말 다이얼로그 컴포넌트입니다."
      />
      <Dialog
        title="오류 다이얼로그"
        backgroundColor="yellow"
        message="오류 다이얼로그 컴포넌트입니다."
      />
      <Dialog
        title="공지사항 다이얼로그"
        backgroundColor="blue"
        message="공지사항 다이얼로그 컴포넌트입니다."
      />
    </div>
  );
};

export default DialogList;
