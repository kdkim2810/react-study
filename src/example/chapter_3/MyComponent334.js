import React from 'react';
import PropTypes from 'prop-types';

/*
컴포넌트 사이에 있는 요소를 가져올때 children이라는 이름의 props로 사용한다
*/
const MyComponent = ({ name, children }) => (
// 비구조화 할당 문법
// const { name, children } = props;
  <div>
    안녕하세요, 제 이름은 { name } 입니다.
    <br />
    children 값은 { children } 입니다.
  </div>
);


MyComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;
