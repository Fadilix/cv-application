import React from 'react'
// COI = center of interest
const CenterOfInt = ({
    inputs,
    handleCenterOfIntAdding,
    handleCenterOfIntChange,
}) => {

    return (
        <div>
            <div>
                <h1>Center of Interests</h1>
                <div className='CenterOfInts'>
                    {inputs.map((input, index) => (
                        <input
                            type="text"
                            name={`input ${index}`}
                            value={input}
                            onChange={(e) => { handleCenterOfIntChange(e, index) }}
                        />
                    ))}
                </div>

                <button onClick={handleCenterOfIntAdding}>Add a center of interest</button>
            </div>
        </div>
    )
}

export default CenterOfInt;