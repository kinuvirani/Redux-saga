import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Record from './component/records'
import Main from './component/pureCOmponent'
import Middle from './component/middleComponent'
import Chart from './component/charts/chart'
import ApexChart from './component/charts/apexChart'

export const aContext=React.createContext('Good Afternoon')

class App extends React.Component{
    state={
        message:'Hello Context'
    }
  render(){
    return(
        <div>
            <aContext.Provider value={this.state.message}>
                <Middle></Middle>
                <Child></Child>
            </aContext.Provider>
            <Router>
                <Route path='/data' component={Record}/>
                <Route path='/test' component={Main}/>
                <Route path='/chart' component={Chart}/>
                <Route path='/apex' component={ApexChart}/>
            </Router>
        </div>
    )
  }
}

export class MiddleComponent extends React.Component{
    render(){
        return(
            <aContext.Consumer>
                {(value)=><div>Message from parent:{value}</div>}
            </aContext.Consumer>
        )
    }
}

export class Child extends React.Component{
    render(){
        return(
            <aContext.Consumer>
                {(val)=><div><h2>Message from parent to child { val }</h2></div>}
            </aContext.Consumer>
        )
    }
}

export default App

