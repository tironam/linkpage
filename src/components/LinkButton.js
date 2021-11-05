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
            margin: "30px"
        },
        btnText: {
            fontFamily: "Arial",
            margin: "20px",
            fontSize: "18px",
            color: "white",
            textShadow: "1px 1px 4px #000000"
        },
        btn: {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 15px 20px 0 rgba(0, 0, 0, 0.1)"
        }
    })

    return (
        <div style={myStyles.myMargin}>
            <h3 style={myStyles.btnText}>{title}</h3>
            <Button style={myStyles.btn}color="primary" class="btn btn-primary btn-lg" href={link} target="blank">{name}</Button>
        </div>
    )
}

export default LinkButton