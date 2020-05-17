import React, { Component } from 'react';

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
