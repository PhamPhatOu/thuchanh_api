import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./productsData"

function TableDetail() {
    const {TableDetail} = useParams()
    const thisProduct = productsData.find(prod => prod.id === TableDetail)
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default TableDetail