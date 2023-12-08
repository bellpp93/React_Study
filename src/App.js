import React, { Component } from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import "./App.css";

class App extends Component {
  /*
   constructor함수가 있다면 이 함수가 가장 먼저 실행되어 초기화를 담당한다는 뜻
   그 다음으로 초기화가 끝나면 state를 초기화 해야 한다.
   그 다음은 state값으로 Subject컴포넌트의 props값을 설정한다.
  */
  constructor(props) {
    super(props);
    this.state = {
      // 현재 페이지 구분하기 위해 mode 추가
      mode: "read",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web!" },
      // welcome 상태일 때 콘텐츠 영역에 표시할 텍스트
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    // 컴포넌트의 render함수 호출 순서를 알아보기 위한 함수
    console.log("App render");
    var _title,
      _desc,
      _article = null;
    // state의 mode 값에 따라 컴포넌트의 렌더링 결과가 달라지도록 조건문 사용
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _article = <CreateContent></CreateContent>;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        {/* <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                console.log(e);
                e.preventDefault();
                Uncaught TypeError: Cannot read properties of undefined (reading 'state')
                this.state.mode = "welcome";
                
                state값을 올바르게 변경하기 위해서 해야 할 2가지
                1. 함수 뒤에 .bind(this) 추가하기
                2. this.setState 함수를 호출해서 state값 변경하기
                 
                this.setState({ mode: "welcome" });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header> */}
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>
        {_article}
      </div>
    );
  }
}

export default App;
