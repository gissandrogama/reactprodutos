import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css'

export default class Upgrade extends Component {
    state = {
        product: {},
    }

    componentDidMount() {
        const { id } = this.props.match.params

        const response = await api.get(`/products/${id}`)

        this.setState({ product: response.data })
    }

    render(){
        const { product } = this.state
        return(
            <form id="upgrade" onSubmit={this.handleUpgrade}>
                <input
                    type="text"
                    name="title" 
                    placeholder="Titulo do produto"
                    // onChange={this.handleChange}
                    // value={this.state.title}            
                />

                
                <input
                    type="text"
                    name="description" 
                    placeholder="descrição do produto"
                    // onChange={this.handleChange}
                    // value={this.state.description}
                />

                <input
                    type="text"
                    name="url" 
                    placeholder="url do produto"
                    // onChange={this.handleChange}
                    // value={this.state.url}
                />

                <button type="submit">Salvar</button>
            </form>
        )
    }

}