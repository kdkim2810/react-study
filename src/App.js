import React from 'react'; // 리액트를 불러오는 구문

function Example1() {
  /*
  <div>로 감싸거나 리액트에서 지원해 주는 Fragment태그를 사용할수도 있음
  */
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  )
}

function Example2() {
  /*
  자바스크립트 표현식을 작성할 경우 jsx 내부에서 코드를 {}로 감싸면 됨
  */
  const name = '리액트';

  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  )
}

function Example3() {
  /*
  jsx 내부의 자바스크립트 표현식에서는 if문을 사용할 수 없으므로
  jsx 외부에서 if문을 사용하여 사전에 값을 설정하거나 {}안에 조건부 연산자(삼항 연산자)를 사용
  */
  const name = '리액트';

  return (
    <div>
      {name === '리액트' ? (
        <h1>리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  )
}

function App() {
    return <Example3/>;
}

export default App;
