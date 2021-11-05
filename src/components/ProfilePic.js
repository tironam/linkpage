import React from 'react'

const ProfilePic = props => {
    const {
        picture
    } = props 

    return (
        <img style={{ "maxHeight": "225px", "borderRadius": "200px", "margin": "45px 45px 15px 45px", "boxShadow": "0 4px 12px 0 rgba(0, 0, 0, 0.4), 0 20px 30px 0 rgba(0, 0, 0, 0.3)" }} src={picture} />
    )
}

export default ProfilePic