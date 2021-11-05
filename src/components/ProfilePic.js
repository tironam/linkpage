import React from 'react'

const ProfilePic = props => {
    const {
        picture
    } = props 

    return (
        <img style={{ "maxHeight": "275px", "borderRadius": "200px", "margin": "45px" }} src={picture} />
    )
}

export default ProfilePic