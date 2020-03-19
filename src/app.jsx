import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Gen from './components/Gen.jsx';
import Nav from './components/Nav.jsx'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <Route exact path="/" component={Home}/>
                <Route path='/generate' component={Gen}/> 
            </BrowserRouter>
        )
    }
}

export default App;