import React from 'react';
import axios from 'axios';
import './fruitList.css'

export default class FruitList extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            frutas: [],
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/sacolao/frutas").then(res => {
            this.setState({frutas: res.data})
        })
    }
   
    render(){
        return(
            <article>
                <h2>Estoque</h2>
                <ul>
                    {this.state.frutas.map(frutas => <li key={frutas.id}><strong>Produto:</strong> {frutas.nome}, <strong>Quantidade:</strong> {frutas.quantidade}</li>)}
                </ul>
            </article>
        )
    }
}