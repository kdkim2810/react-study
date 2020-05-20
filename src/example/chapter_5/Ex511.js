import React, { Component } from 'react'
import './Ex511.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  }

  // ref 생성
  inputRef = React.createRef();

  // 비밀번호 이벤트 핸들러
  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = () => {
    console.log(this.inputRef)
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    })
    // 버튼 클릭 시, input 박스에 포커스 지정
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="password"
        ref={this.inputRef}
        value={this.state.password} 
        onChange={this.handleChange}
        className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    )
  }
}

export default ValidationSample;