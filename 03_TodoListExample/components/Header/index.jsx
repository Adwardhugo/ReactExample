import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  handleKeyUp = (event)=>{
    const {keyCode,target} = event
    if (keyCode !== 13)return
    //Get ready to a Obj
    const todoObj = {id:nanoid(),name:target.value,done:false}
    console.log(todoObj)
    this.props.addItem(todoObj)
  }
  // handleKeyUp= (event)=>{
  //   const {keyCode,target} = event
  //   if(keyCode !== 13)return
  //   const todoObj = {id:nanoid(),name:target.value,done:false}
  //   this.props.addItem(todoObj)

  // }
  render() {
    return (
      <div className = "todo-header">
        <input onKeyUp = {this.handleKeyUp} type = "text" placeholder='请输入你的任务名称，按回车确认'></input>
      </div>
    )
  }
}
