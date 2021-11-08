import React from 'react'

const ProfilePic = props => {
    const {
        name,
        picture,
        alt
    } = props 

    const myStyles = ({
        title: {
            fontFamily: "Monaco",
            fontWeight: "bold",
            marginTop: "45px",
            fontSize: "25px",
            color: "white",
            textShadow: "2px 3px 2px #000000"
        },
        pic: {
            maxHeight: "185px",
            borderRadius: "200px",
            margin: "15px"
        }
    })

    return (
        <div>
            <h1 style={myStyles.title}>{name}</h1>
            <img style={myStyles.pic} alt={alt} src={picture} />
        </div>
    )
}

export default ProfilePic