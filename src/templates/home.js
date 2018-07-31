import React from 'react';
import axios from 'axios';
import './home.css';

export default class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            nome: "",
            quantidade: "",
        }

        this.estado = {
            frutas:[],
        }
        
        this.handleFrutas = this.handleFrutas.bind(this);
        this.handleQuantidade = this.handleQuantidade.bind(this);
    }
    
    handleFrutas(event){
        this.setState({
            nome: event.target.value.toLowerCase(),
        });
    }

    handleQuantidade(event){
        this.setState({
            quantidade: parseInt(event.target.value, 10)
        })
    }

    addFruta = event =>{
        if(this.state.nome === ''){
            alert("Preencha o nome do produto.")
        }
        else{
           if(this.state.quantidade === ''){
               alert('Preencha a quantidade do produto')
           }
           else{
                event.preventDefault();
                this.setState({
                    nome: event.target.value,
                    quantidade: event.target.value,
                })
                axios.post('http://localhost:8080/sacolao',{
                    nome: this.state.nome,
                    quantidade: this.state.quantidade,
                })
                .then(res => {
                    alert("Produto adicionado!");
                })
                .catch(err =>{
                    alert("Produto já cadastrado no sistema!");
                })
            }
        }
    }

    render(){
        return(
            <article>
                <h1><center>Cadastrar produto</center></h1>
                <input onChange={this.handleFrutas} name="frutas" className="txtFruta" placeholder="Nome do produto"/>
                <p><input onChange={this.handleQuantidade} type="number" name="quantidade" className="txtQuantidade" value={this.state.quantidade} placeholder="Quantidade"/></p>
                <button className="btnSubmit btn btn-success" type="submit" onClick={this.addFruta}>Enviar</button> 
            </article>
        )
    }
}
