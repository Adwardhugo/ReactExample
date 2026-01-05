/*引入react核心库*/
import React from 'react';
/*引入reactDOM库*/
import ReactDOM from 'react-dom';
/*引入APP组件*/
import App from './App';
import store from './redux/store'

store.subscribe(()=>{
    ReactDOM.render(<App />, document.getElementById("root"))
})