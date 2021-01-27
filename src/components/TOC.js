import React, { Component } from 'react';

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){  //shouldComponentUpdate는 새롭게 바뀐 값과 이전 값에 접근할수있다.
        console.log('===>TOC render shouldComponentUpdate'
            ,newProps.data  //바뀐값
            ,this.props.data    //현재값
        );
        if(this.props.data === newProps.data){
            return false;
        }
        return true;   //false -> render 호출 x
    }
    render(){
        console.log('===>TOC render')
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
                <li key={data[i].id}>
                    <a 
                        href={"/content/"+data[i].id}
                        data-id={data[i].id}
                        onClick={function(e){
                            
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                    >{data[i].title}</a>
                </li>);
            i=i+1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;
