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
  //（添加todo）传给子组件的函数，子组件将数据利用该函数通过props传给父组件更新状态
  addItem =(todoObj)=>{
    //获取todos的状态
    const {todos} = this.state
    //创建新的newTodos，将传入的todoObj与之前的todos进行合并
    const newTodos = [todoObj,...todos]
    //创建完成后需要更新至新状态
    this.setState({todos:newTodos})
  }
  //更新Item，传给子组件的函数，这个方法在子组件中，会根据改编选项的id进行遍历整个todos，然后返回改变的done状态
  updateItem = (id,done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todo)=>{
      if(todo.id === id)return {...todo,done}
      else return todo
    })
    this.setState({todos:newTodos})
  }
  //删除Item，同样传给子组件，然后利用filter的方法去把选中的id以外的todo重新渲染，然后返回新的todos
  deleteItem =(id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !==id
    })
    this.setState({todos:newTodos})
  }
  //检查所有todo的done的状态
  checkedAllTodo=(done)=>{
    const {todos} = this.state
    //涉及到检查列表内容状态的用map来进行遍历
    const newTodos = todos.map((todo)=>{
      //返回最新的done状态
      return {...todo,done}
    })
    this.setState({todos:newTodos})

  }
  //检查所有已完成的todo，检查done状态，并清除done === true的
  clearAllDone =()=>{
    const {todos} = this.state
    //过滤掉done === true的选项，返回done===false的todo
    const newTodos = todos.filter((todo)=>{
      return todo.done !== true
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
        <Header addItem = {this.addItem}/>{/*父组件将函数传入子组件，提供子组件调用，改变父组件状态*/}
        <List todos = {todos} updateItem={this.updateItem} deleteItem={this.deleteItem}/>{/*将todos数组传给List，List负责展示 */}
        <Footer todos = {todos} checkedAllTodo = {this.checkedAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

