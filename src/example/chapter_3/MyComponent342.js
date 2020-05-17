import React, { useState } from 'react';

const Say = () => {
  // useState 사용 시, state의 초기값 형태를 자유롭게 넣으 수 있음
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
