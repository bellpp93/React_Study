import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log(
      "==>TOC render shouldComponentUpdate",
      newProps.data,
      this.props.data
    );
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    // 함수의 호출 순서를 살펴보기 위해 로그 추가
    console.log("==>TOC render");
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      // 엘리먼트를 자동으로 생성하면 콘솔창(F12)에 에러가 발생한다.
      // lists.push(
      //   <li>
      //     <a href={"/content/" + data[i].id}>{data[i].title}</a>
      //   </li>
      // );
      /**
       * Each child in a list should have a unique "key" prop이라는 메시지는
       * '각 리스트 항목은 key라고 하는 prop을 가져야 한다.'라는 뜻이다.
       * 즉, 여러 개의 항목으로 구성된 목록을 자동으로 생성할 때는
       * 각 항목을 서로 구분할 수 있는 식별자를 지정하면 된다.
       * 아래는 위에 코드에서 수정한 코드(<li>엘리먼트에 key={data[i].id}가 추가됨)
       */
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
