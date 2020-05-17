import React from 'react'; // 리액트를 불러오는 구문
// import Example_1 from './example/chapter_2';
import Component from './example/chapter_3';

function App() {
  // return <Component.MyComponent name="React" />;
  return <Component.MyComponent />; // name이 지정되지 않으면 defaultProps가 적용
}

export default App;
