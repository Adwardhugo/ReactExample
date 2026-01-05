import store from '../../redux/store'
import React, { Component } from 'react'
import { increment, decrement } from './count_reducer';
import { useDispatch, useSelector } from 'react-redux';

// export default class Count extends Component {
// increment = ()=>{
//     const {value} = this.selectNumber
//     store.dispatch({type:'increment',data:value*1})
// }
// decrement = ()=>{
//     const {value} = this.selectNumber
//     store.dispatch({type:'decrement',data:value*1})
// }
//   render() {
//     return (
//       <div>
//         <h1>当前求和为:{store.getState()}</h1>
//         <select ref = {c => this.selectNumber = c}>
//             <option value = '1'>1</option>
//             <option value = '2'>2</option>
//             <option value = '3'>3</option>
//         </select>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     )
//   }
// }

function Count(){
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();
    return(
        <>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment(1))}>+</button>
        <button onClick={() => dispatch(decrement(1))}>-</button>
        </>
    );
}
