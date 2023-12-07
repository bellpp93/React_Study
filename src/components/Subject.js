import React, { Component } from "react";

class Subject extends Component {
  render() {
    // 함수의 호출 순서를 살펴보기 위해 로그 추가
    console.log("Subject render");
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
