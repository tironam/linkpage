import React from 'react'

const Footer = props => {
    const {
        text,
        text2
    } = props 

    const myStyles = ({
        footer: {
            fontFamily: "Monaco",
            margin: "15px 15px 0px 15px",
            fontSize: "13px",
            color: "white"
        },
        footer2: {
            fontFamily: "Monaco",
            margin: "5px 15px 20px 15px",
            fontSize: "13px",
            color: "white"
        }
    })
    return (
        <div>
            <p style={myStyles.footer}>{text}</p>
            <p style={myStyles.footer2}>{text2}</p>
        </div>
    )
}

export default Footer