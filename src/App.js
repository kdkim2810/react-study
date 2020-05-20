import React, { Component } from 'react'; // 리액트를 불러오는 구문
import Example from './example/chapter_7/Ex731';
import LifeCycleSample from './example/chapter_7/Ex731';


function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/>
      </div>
    )
  }
}

export default App;
