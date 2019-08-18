import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css'

export default class Upgrade extends Component {
    state = {
        product: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params

        const response = await api.get(`/products/${id}`)

        this.setState({ product: response.data })
    }

    handleUpgrade = async e => {
        e.preventDefault()

        const { id } = this.props.match.params

        await api.put(`/products/${id}`, {
            title: this.state.title,
            description: this.state.description,
            url: this.state.url,
        })


        this.props.history.push(`/products/${id}`)

    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        const { product } = this.state
        
        return(
            <form id="upgrade" onSubmit={this.handleUpgrade}>
                <input
                    type="text"
                    name="title" 
                    placeholder={product.title}
                    onChange={this.handleChange}
                    value={this.state.title}            
                />

                
                <input
                    type="text"
                    name="description" 
                    placeholder={product.description}
                    onChange={this.handleChange}
                    value={this.state.description}
                />

                <input
                    type="text"
                    name="url" 
                    placeholder={product.url}
                    onChange={this.handleChange}
                    value={this.state.url}
                />

                <button type="submit">Salvar</button>
            </form>
        )
    }

}