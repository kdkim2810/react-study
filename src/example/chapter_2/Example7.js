import React from 'react';

export default function Example7() {
  /*
    jsx안에서는 undefined를 렌더링 할 수 있는데
    name값이 undefined일 때 보여주고 싶은 문구가 있다면 다음과 같이 사용 가능
    */
  const name = undefined;

  return <div>{name || "리액트"}</div>;
}
