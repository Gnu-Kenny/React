import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      console.log('Content render');
      return (
        <article>
          <h2>Create</h2>
          {/* create_process라는 페이지로 사용자가 입력한 정보를 전송할것이다. /
             사용자가 데이터를 추가하거나 수정하거나 하면 method가 post 형식이어야 url이 노출이 안된다. */}
          <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
          }.bind(this)}
          > 
            <p><input type="text" name="title" placeholder="title"></input></p> {/* placeholder => 공백일때 출력되는 문장 */}
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }
  
export default CreateContent;