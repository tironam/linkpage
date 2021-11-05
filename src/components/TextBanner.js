import React from 'react'

const TextBanner = props => {
    const {
        title,
        text
    } = props

    const myStyles = ({
        title: {
            fontFamily: "Arial",
            margin: "20px",
            fontSize: "35px",
            color: "white"
        },
        headline: {
            fontFamily: "Arial",
            margin: "20px",
            fontSize: "20px",
            color: "white"
        },
        box: {
            marginBottom: "40px"
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