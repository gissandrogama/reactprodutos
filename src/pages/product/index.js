import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'


export default class Product extends Component {
    state = {
        product: {},
    }
    
    async componentDidMount(){
        const { id } = this.props.match.params

        const response = await api.get(`/products/${id}`)

        this.setState({product: response.data})

    }

    async remover(){

        const { id } = this.props.match.params

        await api.delete(`/products/${id}`)

        this.setState({product: response.data })

        this.props.history.push('/')
    }

    render() {
        const { product } = this.state
        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
                
                <div className="actions">
                    <button onClick={() => this.remover(product)}>Deletar</button>
                    <Link className="link" to={`/upgrade/${product._id}`}>Editar</Link>
                </div>
            </div>
         )
    }
}