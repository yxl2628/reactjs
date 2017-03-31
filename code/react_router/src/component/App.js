import React from 'react'
import { Link } from 'react-router'

const App = ({children}) => (
  <div>
    <h1>Hello React Router</h1>
    <ul>
      <li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li>
      <li><Link to="/other" activeStyle={{color: 'red'}}>Other</Link></li>
      <li><Link to="/form" activeStyle={{color: 'red'}}>Form</Link></li>
      <li><Link to="/protected" activeStyle={{color: 'red'}}>Protected</Link></li>
    </ul>
    <div>
      {children||''}
    </div>
  </div>
)
export default App;
