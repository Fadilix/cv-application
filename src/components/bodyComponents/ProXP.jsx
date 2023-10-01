import React from 'react'

const ProXP = ({
    inputs,
    handleProXPAdding,
    handleProXPChange,
}) => {

    return (
        <div>
            <div>
                <h1>Professional experiences</h1>
                <div className='ProXPs'>
                    {inputs.map((input, index) => (
                        <input
                            type="text"
                            name={`input ${index}`}
                            value={input}
                            onChange={(e) => { handleProXPChange(e, index) }}
                        />
                    ))}
                </div>

                <button onClick={handleProXPAdding}>Add a professional experience</button>
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default ProXP;