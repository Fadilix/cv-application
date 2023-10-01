import React from 'react'

const Studies = ({
    BodyContentData,
    handleInputChange
}) => {
    return (
        <div>
            <div>
                <label htmlFor="studies">Studies</label>
                <input
                    type="text"
                    name='studies'
                    value={BodyContentData.studies}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="school">School</label>
                <input
                    type="text"
                    name='school'
                    value={BodyContentData.school}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}

export default Studies;