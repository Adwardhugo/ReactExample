// 该文件是用于创建一个为Count组件服务的reducer，reducer的本质是一个函数
// reducer函数会接到两个参数，分别为之前的状态preState，动作对象action

// const initState = 0
// export default function countReducer(preState=initState,action){
//     // if(preState === undefined) preState =0
//     // 从aciton对象中获取：type，data
//      const {type,data} = action
//     //  根据type决定如何加工数据
//     switch (type){
//         case 'increment':
//             return preState + data
//         case 'decrement':
//             return preState - data    
//     default:
//         return preState
//     }
// }

import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload,
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;