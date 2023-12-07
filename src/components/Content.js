import React, { Component } from "react";

class Content extends Component {
  render() {
    // 함수의 호출 순서를 살펴보기 위해 로그 추가
    console.log("Content render");
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default Content;
