import React from 'react';

export default function Example5() {
  /*
    && 연산자로 조건부 렌더링을 할 수 있는 이유는 리액트에서 false를 렌더링할 때는 null과 똑같이 인식하지만
    falsy한 값인 0은 예외적으로 화면에 나타남
    */
  const number = 0;
  return number && <div>내용</div>;
}
