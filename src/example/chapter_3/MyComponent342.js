import React, { useState } from 'react';

const Say = () => {
  // useState 사용 시, state의 초기값 형태를 자유롭게 넣으 수 있음
  const [message, setMessage] = useState('');

  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요');

  return (
    <div>
      <button type="button" onClick={onClickEnter}>입장</button>
      <button type="button" onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
