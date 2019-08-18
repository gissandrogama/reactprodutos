import React, { Component } from  'react'
import api from '../../services/api'

import './styles.css'

export default class New extends Component {
        state = {
            title: '',
            description: '',
            url: '',
        }
    
    handleSubmit = async e => {
        e.preventDefault()

        await api.post('/products', {
            title: this.state.title,
            description: this.state.description,
            url: this.state.url,
        })
        
        this.props.history.push('/')

    }

      
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }) 
    }

    render(){
        return(
            <form id="new-product" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="title" 
                    placeholder="Titulo do produto"
                    onChange={this.handleChange}
                    value={this.state.title}            
                />

                
                <input
                    type="text"
                    name="description" 
                    placeholder="descrição do produto"
                    onChange={this.handleChange}
                    value={this.state.description}
                />

                <input
                    type="text"
                    name="url" 
                    placeholder="url do produto"
                    onChange={this.handleChange}
                    value={this.state.url}
                />

                <button type="submit">Cadastrar</button>
            </form>
        ) 
    }
}