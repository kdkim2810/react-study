import React from 'react';

export default function Example4() {
  /*
    아래처럼 null을 렌더링할수도 있지만 더 짧은 코드로 하려면 &&연산자를 사용하여 조건부 렌더링을 할 수 있다.
    return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
    */
  const name = "리액트";

  return <div>{name === "리액트" ? <h1>리액트입니다.</h1> : null}</div>;
}
