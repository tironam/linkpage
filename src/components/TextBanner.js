import React from 'react'

const TextBanner = props => {
    const {
        title,
        text
    } = props

    const myStyles = ({
        title: {
            fontFamily: "Monaco",
            fontWeight: "bold",
            margin: "20px",
            fontSize: "19px",
            color: "white",
            // textShadow: "1px 1px 4px #000000"
        },
        headline: {
            fontFamily: "Monaco",
            margin: "20px",
            fontSize: "15px",
            color: "white"
        },
        box: {
            marginBottom: "35px",
            // textShadow: "1px 1px 4px #000000"
        }
    })


    return (
        <div style={myStyles.box}>
            <h1 style={myStyles.title}>{title}</h1>
            <p style={myStyles.headline}>{text}</p>
        </div>
    )
}

export default TextBanner