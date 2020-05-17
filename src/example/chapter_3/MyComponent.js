import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
  const { name } = props;
  return (
    <div>
      안녕하세요, 제 이름은
      {` ${name} `}
      입니다.
    </div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired, // name이라는 props를 강제하는 구문(일종의 검증)
};

MyComponent.defaultProps = {
  name: '기본 이름', // 컴포넌트가 생성될 때 name이 지정되지 않았다면 기본 이름이라는 값으로 대신
};

export default MyComponent;
