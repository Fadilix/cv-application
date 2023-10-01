import React from 'react'
import FloatingInfo from './FloatingInfo';
import KeyInfos from './KeyInfos';
import SideBarOfExperiences from './SideBarOfExperiences';

const CvResult = ({
    information,
    competences,
    languages,
    BodyContentData,
    experiences,
    ci,
    quali
}) => {

    return (
        <div className='result' id='result'>
            <FloatingInfo userInfo={information} />
            <div className='left-right'>
                <SideBarOfExperiences
                    competences={competences}
                    languages={languages}
                    ci={ci}
                    quali={quali}
                />

                <KeyInfos
                    BodyContentData={BodyContentData}
                    experiences={experiences}
                />
            </div>
        </div>
    )
}

export default CvResult;