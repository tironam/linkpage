import React from 'react'

const TextBanner = props => {
    const {
        title,
        title2,
        text
    } = props

    const myStyles = ({
        title: {
            fontFamily: "Arial",
            fontWeight: "bold",
            margin: "20px",
            fontSize: "25px",
            color: "white",
            textShadow: "1px 1px 4px #000000"
        },
        headline: {
            fontFamily: "Arial",
            margin: "20px",
            fontSize: "17px",
            color: "white"
        },
        box: {
            marginBottom: "55px",
            textShadow: "1px 1px 4px #000000"
        }
    })


    return (
        <div style={myStyles.box}>
            <h1 style={myStyles.title}>{title}</h1>
            <h1 style={myStyles.title}>{title2}</h1>
            <p style={myStyles.headline}>{text}</p>
        </div>
    )
}

export default TextBanner