import React from 'react'
import { Button } from 'reactstrap'

const LinkButton = props => {
    const {
        name,
        title,
        link
    } = props

    const myStyles = ({
        myMargin: {
            margin: "20px"
        },
        btnText: {
            fontFamily: "Arial",
            margin: "20px",
            fontSize: "18px",
            color: "white"
        }
    })

    return (
        <div style={myStyles.myMargin}>
            <h3 style={myStyles.btnText}>{title}</h3>
            <Button color="primary" class="btn btn-primary" href={link} target="blank">{name}</Button>
        </div>
    )
}

export default LinkButton