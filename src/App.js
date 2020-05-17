import React from 'react'; // 리액트를 불러오는 구문
// import Example_1 from './example/chapter_2';
import Component from './example/chapter_3/MyComponent334';

function App() {
  // return <Component.MyComponent name="React" />;
  // return <Component.MyComponent />; // name이 지정되지 않으면 defaultProps가 적용(3.3.3)
  return (
    <Component>
      테스트
    </Component>
  ); //
}

export default App;
