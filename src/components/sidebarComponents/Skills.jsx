import React from 'react'

const Skills = ({
    inputs,
    handleSkillAdding,
    handleSkillsChange,
}) => {

    return (
        <div>
            <div>
                <h1>Skills</h1>
                <div className='skills'>
                    {inputs.map((input, index) => (
                        <input
                            type="text"
                            name={`input ${index}`}
                            value={input}
                            onChange={(e) => { handleSkillsChange(e, index) }}
                        />
                    ))}
                </div>

                <button onClick={handleSkillAdding}>Add a skill</button>
            </div>
        </div>
    )
}

export default Skills;