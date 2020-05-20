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
