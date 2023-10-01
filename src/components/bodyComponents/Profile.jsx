import React from 'react'

const Profile = ({
  BodyContentData,
  handleBodyChange
}) => {
  return (
    <div>
      <h1>Description of your Parcour</h1>
      <textarea
        cols="60"
        rows="10"
        name="profile"
        value={BodyContentData.profile}
        onChange={handleBodyChange}
      ></textarea>

    </div>
  )
}

export default Profile;