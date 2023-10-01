import React from 'react'
import { useState } from 'react'

const KeyInfos = ({ BodyContentData, experiences }) => {
    return (
        <div className="right">
            <div>
                <h3 >Profile</h3>
                <p style={{ marginTop: "5px" }}>{BodyContentData.profile}</p>
            </div>

            <div className="formation">
                <h3>Studies</h3>
                <div className='studies'>
                    <div>
                        <p>
                            <strong>
                                {BodyContentData.studies}
                            </strong>
                        </p>
                        {/* School */}
                        <p>
                            {BodyContentData.school}
                        </p>
                    </div>
                </div>
            </div>


            <div className="experience">
                <h3>Professional experiences</h3>
                <div style={{ marginTop: "5px" }}>
                    {experiences.map((experience, index) => (
                        <li key={index}>{experience}</li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KeyInfos