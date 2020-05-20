import React, { Component, useState } from 'react'; // 리액트를 불러오는 구문
import Info from './example/chapter_8/Ex821';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <button type="button" onClick={() => setVisible(!visible)}>{visible ? '숨기기' : '보이기'}</button>
        {visible && <Info />}
      </div>
    </div>
  );
}

export default App;
