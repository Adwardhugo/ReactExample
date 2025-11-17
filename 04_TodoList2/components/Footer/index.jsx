import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  //检查所有的复选框是否都已经勾选,通过Onchange感知到client点击改变了状态，
  // 子类通过父类方法通知父类改变状态
  checkedAll =(event)=>{
    this.props.checkedAllTodo(event.target.checked)
  }
  handleClear=()=>{
    this.props.clearAllDone()

  }
  render() {
    //获取从父组件传来的todos数组
    const {todos} = this.props
    //建立一个变量doneCount，利用reduce的方法，主要是为了计算累加值，遍历整个数组，然后前一个值加上下一个值
    const doneCount = todos.reduce((pre,todo)=>pre + (todo.done ? 1:0),0)
    console.log(doneCount)
    //计算整个数组的长度是多少，代表一共多少个todos
    const Total = todos.length

    return (
      <div className="todo-footer">
        <label>
            <input type = "checkbox" checked = {doneCount === Total && doneCount !== 0 ? true:false} onChange={this.checkedAll}></input>
        </label>
        <span>
            <span>finish{doneCount}</span><span>/</span><span>unfinish{Total}</span>
        </span>
        <button className="btn btn-danger" onClick={this.handleClear}>清楚已完成任务</button>
      </div>
    )
  }
}
