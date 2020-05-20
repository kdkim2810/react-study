import React, { useReducer } from 'react';

/**
 * 타겟 자체를 건네줘서 타겟.name에다가 인풋박스의 밸류값을 넣어줌
 */
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickName: '',
  });

  /**
   * 아래 두줄과 같은 의미
   * const name = state.name;
   * const nickName = state.nickName;
   */
  const { name, nickName } = state;

  /**
   * onChange 함수를 호출한 요소의 모든 정보를 통째로 넘김(name, value 등)
   */
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickName" value={nickName} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
