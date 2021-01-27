import React, { Component } from 'react';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state = {
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});
    }
    render(){
      console.log(this.props.data);
      console.log('UpdateContent render');
      return (
        <article>
          <h2>Update</h2>
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
            <p><input 
              type="text" 
              name="title" 
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
            ></input>
            </p> {/* placeholder => 공백일때 출력되는 문장 */}
            <p>
              <textarea 
                onChange={this.inputFormHandler} 
                name="desc" 
                placeholder="description" 
                value={this.state.desc}></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }
  
export default UpdateContent;