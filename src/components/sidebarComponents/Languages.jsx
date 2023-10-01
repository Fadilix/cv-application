import React from 'react'
import { useState } from 'react';

const Languages = ({
    inputs,
    handleLanguagesAdding,
    handleLanguagesChange,
}) => {

    return (
        <div>
            <div>
                <h1>Languages</h1>
                <div className='Languagess'>
                    {inputs.map((input, index) => (
                        <input
                            type="text"
                            name={`input ${index}`}
                            value={input}
                            onChange={(e) => { handleLanguagesChange(e, index) }}
                        />
                    ))}
                </div>

                <button onClick={handleLanguagesAdding}>Add a Language</button>
            </div>
        </div>
    )
}

export default Languages;