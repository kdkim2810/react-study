import React, { Component } from 'react'

/**
 * 마운트 할떄 호출되는 메서드 순서
 * constructor -> getDerivedStateFromProps -> render -> componentDidMount
 * 
 * 업데이트 할때 호출되는 메서드 순서
 * getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
 * 
 * 언마운트할 때 호출하는 메서드
 * componentWillUnmount
 */
class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  /**
   * 마운트 과정에서 호출되며, 업데이트가 시작되기 전에도 호출됨 
   * props의 변화에 따라 state값에도 변화를 주고 싶을때 사용
   * props에 있는 값을 state에 넣을 때 사용하는 메서드
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if(nextProps.color !== prevState.color) {
      return { color: nextProps.color }
    }

    return null;
  }

  /**
   * 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
   */
  componentDidMount() {
    console.log('componentDidMount');
  }

  /**
   * 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드
   * 메서드에서 true 혹은 false 값을 반환해야 하며, true를 반환하면
   * 다음 라이프사이클 메서드를 계속 실행하고, false를 반환하며 작업을 중지함
   * 즉 컴포넌트가 리렌더링되지 않음
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);

    // 숫자의 마지막 자리가 4면 리렌더링 하지 않음
    return nextState.number % 10 !== 4;
  }

  // 컴포넌트가 웹 브라우저상에 나타난 후 호출되는 메서드
  componentWillMount() {
    console.log('componentWillMount');
  }

  // 컴포넌트가 웹 브라우저상에 사라지기 전에 호출되는 메서드
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출되는 메서드
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if(prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }

    return null;
  }

  // 컴포넌트의 업데이트 작업이 끝난 후 호출되는 메서드
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    if(snapshot) {
      console.log('업데이트 되기 전의 색상 ', snapshot);
    }
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  // 컴포넌트를 리렌더링
  render() {
    console.log('render');
    const style = {
      color: this.props.color
    }

    return (
      <div>
        <h1 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h1>
        <p>color : {this.state.color} </p>
        <button type="button" onClick={this.handleClick}>더하기</button>
      </div>
    )
  }
}

export default LifeCycleSample;