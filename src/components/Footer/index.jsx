import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  checkedAll = (event) =>{
    this.props.checkAllTodo(event.target.checked) 
  }
  handleClear =() =>{
    this.props.clearAlldone()
  }
  render() {
    const {todos} = this.props
    console.log("Footer render", todos)
    //Already finished
    const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
    console.log('%%' ,doneCount)
    //Total
    const Total = todos.length
    return (
      <div className="todo-footer">
        <label>
            <input type = "checkbox" onChange = {this.checkedAll} checked = {doneCount === Total && doneCount !== 0 ? true : false}></input>
        </label>
        <span>
            <span>finish{doneCount}</span><span>/</span><span>unfinish{Total}</span>
        </span>
        <button onClick = {this.handleClear} className="btn btn-danger">清楚已完成任务</button>
      </div>
    )
  }
}
