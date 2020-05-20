import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  // componentDidMOunt와 componentDidUpdate를 합친 형태
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log(
      name,
      nickName,
    );
  });

  /**
   * 마운트 될때만 동작하는 useEffect
   * 업데이트될때는 실행하지 않으려면 함수의 두번째 파라미터로 비어있는 배열을 넣어주면 됨(componentDidMount의 역할만 수행)
   */
  useEffect(() => {
    console.log('마운트 될때만 실행합니다.');
  }, []);

  /**
   * 두번째 파라미터로 전달되는 배열 안에 있는 값이 바뀔때만 동작하는 useEffect
   */
  useEffect(() => {
    console.log('업데이트 될때만 실행합니다.');
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickName} />
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
