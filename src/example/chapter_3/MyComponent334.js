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

/*
propTypes 종류
array : 배열
arrayOf(PropType) : 특정 PropType으로 이루어진 배열을 의미함 ex) arrayOf(PropTypes.string) 문자열로 이루어진 배열
bool : true OR false
func: 함수
number: 숫자
object: 객체
string: 문자열
symbol: ES6의 Symbol
node: 렌더링할 수 있는 모든 것
instanceOf(클래스): 특정 클래스의 인스턴스
oneOf( [ 'dog', 'cat' ] ): 주어진 배열 요소 중 값 하나
objectOf( React.PropTypes.number ) : 객체의 모든 키 값이 인자로 주어진 PropType인 객체
shape: ({ name: PropTypes.string, num: PropTypes.number }) : 주어진 스키마를 가진 객체
any: 아무 종류
*/
MyComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;
