import _ from 'lodash'
import React from 'react'
import { render } from 'react-dom'
import test from './test'

const App = test(React, React.Component, true)

render(<App />, document.getElementById('root2'))

// const Test = () => {
//   return (
//     <div>
//       {0}
//       {1}
//       {undefined}
//       {null}
//       {true}
//       {false}
//       {[]}
//     </div>
//   )
// }

// const Test2 = () => {
//   return (
//     <div>
//       <div>0</div>
//       <div>1</div>
//       <div>2</div>
//     </div>
//   )
// }

// const Test3 = () => {
//   return (
//     <div>
//       {
//         _.times(3).map(n => {
//           return (
//             <div>{n}</div>
//           )
//         })
//       }
//     </div>
//   )
// }
// console.log(Test2())
// console.log(Test3())
