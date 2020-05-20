import React, { useReducer } from 'react';

function reducer(state, action) {
  // action.type에 따라 각기 다른 작업을 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };

    case 'DECREMENT':
      return { value: state.value - 1 };

    // 아무것도 해당되지 않을 때 기존상태 반환
    default:
      return state;
  }
}

const Counter = () => {
  /**
   * 첫번째 파라미터에는 리듀서 함수를 넣고
   * 두번째 파라미터에는 해당 리듀서의 기본값을 넣어 줌
   * state는 현재 가리키고 있는 상태, dispatch는 액션을 발생시키는 함수 -> dispatch(action)과 같은형태로
   * 함수안에 파라미터로 액션값을 넣어주면 리듀서 함수가 호출되는 구조입니다.
   */
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
