import React, { Component } from 'react';

class Counter extends Component {
  /*
  컴포넌트가 생성되었을 때 실행되는 생성자 메소드
  클래스형 컴포넌트에서는 super(props)를 반드시 호출
  */
  constructor(props) {
    super(props);
    // state의 초기값 설정
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{ number }</h1>
        <button
          type="button"
          // onClick을 통해 버튼이 클릭되었을 때 호출될 함수를 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 지정할 수 있음
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
