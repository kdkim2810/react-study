import React from 'react';

export default function Example2() {
  /*
    자바스크립트 표현식을 작성할 경우 jsx 내부에서 코드를 {}로 감싸면 됨
    */
  const name = "리액트";

  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}
