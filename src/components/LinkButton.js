import React from 'react'
import { Button } from 'reactstrap'

const LinkButton = props => {
    const {
        name,
        title,
        link,
        logo
    } = props

    const myStyles = ({
        myMargin: {
            marginBottom: "20px"
        },
        btnText: {
            fontFamily: "Monaco",
            margin: "10px",
            fontSize: "15px",
            color: "white",
            // textShadow: "1px 1px 4px #000000"
        },
        btn: {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 15px 20px 0 rgba(0, 0, 0, 0.1)",
            fontFamily: "Monaco",
            width: "15rem"
        }
    })

    return (
        <div style={myStyles.myMargin}>
            <h3 style={myStyles.btnText}>{title}</h3>
            <Button style={myStyles.btn} color="danger" class="btn btn-danger btn-lg btn-block" href={link} target="blank">{logo} {name}</Button>
        </div>
    )
}

export default LinkButton