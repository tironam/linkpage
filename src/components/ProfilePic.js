import React from 'react'

const ProfilePic = props => {
    const {
        picture
    } = props 

    return (
        <img style={{ "borderRadius": "200" }}src={picture} />
    )
}

export default ProfilePic