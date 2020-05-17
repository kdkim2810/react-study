import React, { useState } from 'react';

/**
 * 이벤트를 사용할 때 주의사항
 * 1. 이벤트 이름은 카멜표기법으로 작성
 * ex) onClick, onKeyUp
 *
 * 2. 이벤트를 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
 *
 * 3. DOM 요소에만 이벤트를 설정할 수 있음
 * ex) div, button, input, form, span 등에만 설정이 가능하고 직접 만든 컴포넌트에는 이벤트를 설정할 수 없음
 *
 * 이벤트 종류
 * 리액트에서 지원하는 이벤트 종류는 다음과 같음
 * Clipboard
 * Touh
 * Composition
 * UI
 * KeyBoard
 * Wheel
 * ...
 * 리액트 메뉴얼 참고 ( https://facebook.github.io/react/docs/events.html )
 */
const Say = () => {
  // useState 사용 시, state의 초기값 형태를 자유롭게 넣을 수 있음
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');

  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요');

  return (
    <div>
      <button type="button" onClick={onClickEnter}>입장</button>
      <button type="button" onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button type="button" style={{ color: 'red' }} onClick={() => setColor('red')}>빨간색</button>
      <button type="button" style={{ color: 'green' }} onClick={() => setColor('green')}>초록색</button>
      <button type="button" style={{ color: 'blue' }} onClick={() => setColor('blue')}>파란색</button>
    </div>
  );
};

export default Say;
