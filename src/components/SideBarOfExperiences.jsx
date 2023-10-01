import React from 'react'

const SideBarOfExperiences = ({
    competences,
    languages,
    quali,
    ci
}) => {
    return (
        <div>
            <div className="left">
                {/* White space */}
                <div className="white-space"></div>
                {/* Skills */}
                <div className='competences'>
                    <h2>Skills</h2>
                    {competences.map((competence, index) => (
                        <li key={index}>{competence}</li>
                    ))}
                </div>

                {/* Languages */}
                <div>
                    <h2>Languages</h2>
                    {languages.map((lang, index) => (
                        <li key={index}>{lang}</li>
                    ))}
                </div>

                {/* Qualities */}
                <div>
                    <h2>Qualitites</h2>
                    {quali.map((q, i) => (
                        <li key={i}>{q}</li>
                    ))}
                </div>

                {/* center of interest */}
                <div>
                    <h2>Center of interest</h2>
                    {ci.map((c, i) => (
                        <li key={i}>{c}</li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideBarOfExperiences;