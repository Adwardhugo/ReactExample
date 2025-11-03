import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import './AppTest.css'


export default class AppTest extends Component {
  state = {todos:[
    {id:'001',name:'eating',done:true},
    {id:'002',name:'sleeping',done:true},
    {id:'003',name:'coding',done:false},
    {id:'004',name:'shopping',done:false},
  ]}
  // addItem=(todoObj)=>{
  //    console.log("收到子组件传入的 todoObj：", todoObj);
  //   //get the state of App
  //   const{todos}=this.state
  //   //add a todo in App
  //   const newTodos = [todoObj,...todos]
  //   //update the state
  //   this.setState({todos:newTodos})
  // }
addItem = (todoObj)=>{
  const {todos} = this.state
  const newTodos = [todoObj,...todos]
  this.setState({todos:newTodos})
}
updateItem = (id,done) =>{
  const {todos} = this.state
   
  const newTodos =todos.map ((todo)=>{
    if(todo.id === id)return {...todo,done}
    else return todo
  })
  this.setState({todos:newTodos})

}
deleteTodo = (id) =>{
  const {todos} = this.state
  const newTodos=todos.filter((todoObj)=>{
    return todoObj.id !== id
  })
  this.setState({todos:newTodos})
}
checkAllTodo = (done)=>{
  const {todos} = this.state
  const newTodos=todos.map((todo) =>{
    return {...todo,done}
  })
  this.setState({todos:newTodos})
}
clearAlldone =() =>{
  const {todos} = this.state
  const newTodos=todos.filter((todo)=>{
    return !todo.done
  })
  this.setState({todos:newTodos})
}
  render() {
  const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
        <Header addItem = {this.addItem}/>
        <List todos = {todos} updateItem = {this.updateItem} deleteTodo = {this.deleteTodo}/>
        <Footer todos = {todos} checkAllTodo={this.checkAllTodo} clearAlldone = {this.clearAlldone}/>
        </div>
      </div>
    )
  }
}

