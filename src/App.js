import React, { Component } from 'react'; // 리액트를 불러오는 구문
// import Component from './example/chapter_5/Ex532';
import ScrollBox from './example/chapter_5/Ex532';

class App extends Component {
  // return <Component />;
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => {
          this.ScrollBox = ref;
        }}
        />
        <button
          type="button"
          onClick={() => this.ScrollBox.ScrollToBottom()}
        >
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
