import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  //event是自带的封装的this.handleKeyUp的对象
 handleKeyUp = (event)=>{
   const {keyCode,target} = event
   //判断是否是回车按键，不是的话就不执行
   if(keyCode !== 13) return
   //定义todoObj对象
   const todoObj = {id:nanoid(),name:target.value,done:false}
   console.log(todoObj)
   //将属性props调用父组件传入的函数，进行更新
   this.props.addItem(todoObj)
   //输入完以后自动情况输入框
   target.value = ''
 }
  render() {
    return (
      <div className = "todo-header">
        <input onKeyUp = {this.handleKeyUp} type = "text" placeholder='请输入你的任务名称，按回车确认'></input>
      </div>
    )
  }
}
