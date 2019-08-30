import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css'

export default class Upgrade extends Component {
    state = {
        title: '',
        description: '',
        url: '', 
    }


    async componentDidMount() {

        const { id } = this.props.match.params

        const response = await api.get(`/products/${id}`)

        this.setState({
            title: response.data.title,
            description: response.data.description,
            url: response.data.url,
        })
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

    handleChange = async e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){       
        
        return(
            <form id="upgrade" onSubmit={this.handleUpgrade}>
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

                <button type="submit">Salvar</button>
            </form>
        )
    }

}