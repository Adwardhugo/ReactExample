import React, { Component } from 'react'
import './index.css'

export default class Items extends Component {
  //定义一个属性，该属性默认值为false
  state = {mouse:false}
  //定一个出发调用鼠标行为的函数，返回的时候更新状态
  handleMouse=(flag)=>{
  return() =>{
    this.setState({mouse:flag})
  }
 } 
  hanldChecked = (id)=>{
    return(event)=>{
    this.props.updateItem(id,event.target.checked)
  } 
}

 deleteTodo = (id) =>{
  return ()=>{
    this.props.deleteItem(id)
  }

  }
  render() {
    //结构赋值，将item的属性中的id、name、done给赋值props，然后再渲染时可以渲染这三个属性的状态
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      //根据需求将设置鼠标移入移出时间，设置背景以及高亮
      <li style = {{backgroundColor:mouse ?  '#ddd': 'white'}}
      onMouseEnter = {this.handleMouse(true)} onMouseLeave = {this.handleMouse(false)}
      >
        <label>
            <input type="checkbox" checked = {done} onChange = {this.hanldChecked(id)}/>
            <span>{name}</span>
        </label>
        <button onClick = {this.deleteTodo(id)} className =  "btn btn-danger">删除</button>
        </li>
    )
  }
}
