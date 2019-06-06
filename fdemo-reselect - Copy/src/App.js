import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Record from './component/records'

class App extends React.Component{
  render(){
    return(
        <div>
            <Router>
                <Route path='/' component={Record}/>
            </Router>
        </div>
    )
  }
}
export default App;
