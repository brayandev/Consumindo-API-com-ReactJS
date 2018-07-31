import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../templates/home'
import FruitList from '../templates/FruitList';

export default class App extends React.Component{
    render(){
        return(
            <Router>
                <header>
                    <nav className="navbar navbar-dark bg-dark">
                        <Link to="/home" className="navbar-brand">Home</Link>
                        <Link to="fruitlist" className="navbar-brand">Estoque de produtos</Link>
                    </nav>

                    <Route exatc path="/home" component={Home} />
                    <Route exatc path="/fruitlist" component={FruitList} />
                </header>
           </Router>
        )
    }
}