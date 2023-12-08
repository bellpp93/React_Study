import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    // 함수의 호출 순서를 살펴보기 위해 로그 추가
    console.log("Content render");
    return (
      <article>
        <h2>Create</h2>
        <form></form>
      </article>
    );
  }
}

export default CreateContent;
