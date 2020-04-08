import React from 'react';

export default function Example3() {
  /*
    jsx 내부의 자바스크립트 표현식에서는 if문을 사용할 수 없으므로
    jsx 외부에서 if문을 사용하여 사전에 값을 설정하거나 {}안에 조건부 연산자(삼항 연산자)를 사용
    */
  const name = '리액트';

  return (
    <div>
      {name === '리액트' ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </div>
  );
}
