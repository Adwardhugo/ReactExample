// // 引入createStore，专门用于创建redux中最为核心的store对象
// import { createStore } from "redux"; 
// import countReducer from "./count_reducer";
// // 引入为Count组件服务的reducer
// import countReducer from './count_reducer'
// import create from "@ant-design/icons/lib/components/IconFont";
// // 可以在index.js中写一次componentDidMount，直接渲染
// // store.subscribe(()=>{ReactDom,render(<App />,document.getElementById('root))
// // })

// export default createStore(countReducer)


import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count_reducer";

export default configureStore({
  reducer: {
    count: countReducer,
  },
});



