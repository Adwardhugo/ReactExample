import React, { Component } from 'react'
import Item from '../Item'
import './index.css'



export default class List extends Component {
  render() {
    //从父组件接到传来的参数，包括update的函数要传回子组件Item
    const {todos,updateItem,deleteItem} = this.props
    return (
      //此处展示的是个对象数组，因此用{}，然后通过map便利数组，给予单独的key，用id
      <ul className = "todo-main">
        {
          todos.map((todo)=>{
            return <Item key = {todo.id} {...todo} updateItem = {updateItem} deleteItem = {deleteItem}></Item>

          })
        }

      </ul>
    )
  }
}

