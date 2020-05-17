import React, { Component } from 'react';

/*
컴포넌트에서 state를 사용할 때의 주의사항
state값을 바꾸어야 할때는 setState 혹은 useState를 통해 전달받은 세터함수를 사용
ex) 클래스형 컴포넌트( 잘못된 예시 ) 
this.state.number = this.state.number + 1;
this.state.array = this.state.push(2);
this.state.object.value = 5;

ex) 함수형 컴포넌트 ( 잘못된 예시 )
const [object, setObject] - useState({ a: 1, b: 1})
object.b = 2;

배열이나 객체를 업데이트 해야할 때는 사본을 만들고, 사본에 값을 업데이트 한 후
그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트 해야함
사본을 만들어서 업데이트하는 예시는 다음과 같음
* 객체의 경우
const object = { a:1, b:2, c;3 }
const nextObject = { ...object, b:2 }; // 사본을 만들어서 b값만 덮어쓰기

const array = [
  {id: 1, value: true},
  {id: 2, value: true},
  {id: 3, value: true},
];

let nextArray = array.concat({ id: 4 }); // 새 항목 추가
nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item)) // id가 1인 항목의 value를 false로 변경
*/
class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  }

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{ number }</h1>
        <h2>바뀌지 않는 값: { fixedNumber }</h2>
        <button
          type="button"
          // onClick을 통해 버튼이 클릭되었을 때 호출될 함수를 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 지정할 수 있음
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              }
            }, () => {
              console.log('방금 setState가 호출되었습니다.');
              console.log(this.state);
            });
            /* 
            위의 setState와 아래의 setState는 똑같은 기능을 하며
            아래 코드는 함수에서 바로 객체를 반환함
            */
            this.setState(prevState => ({number: prevState.number + 1}));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
