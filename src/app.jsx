import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Gen from './components/Gen.jsx';
import NavBar from './components/Nav.jsx'
import Discover from './components/discover.jsx';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    render() {
        return (
            <BrowserRouter>
                <NavBar/>
                <Route exact path="/" component={Home}/>
                <Route path='/generate' component={Gen}/> 
                <Route path="/discover" component={Discover}/>
            </BrowserRouter>
        )
    }
}

export default App;