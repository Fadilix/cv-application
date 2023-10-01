import React from 'react'

const Qualities = ({
    inputs,
    handleQualitiesAdding,
    handleQualitiesChange,
}) => {

    return (
        <div>
            <div>
                <h1>Qualities</h1>
                <div className='Qualitiess'>
                    {inputs.map((input, index) => (
                        <input
                            type="text"
                            name={`input ${index}`}
                            value={input}
                            onChange={(e) => { handleQualitiesChange(e, index) }}
                        />
                    ))}
                </div>

                <button onClick={handleQualitiesAdding}>Add a quality</button>
            </div>
        </div>
    )
}

export default Qualities;