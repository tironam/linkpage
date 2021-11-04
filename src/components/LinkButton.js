import React from 'react'
import { Button } from 'reactstrap'

const LinkButton = props => {
    const {
        name,
        title,
        link
    } = props

    return (
        <div>
            <h3>{title}</h3>
            <Button color="danger" class="btn btn-outline-danger" outline href={link}>{name}</Button>
        </div>
    )
}

export default LinkButton