import React from 'react'
import PersonalInfo from './sidebarComponents/PersonalInfo';
import Skills from './sidebarComponents/Skills';
import Languages from './sidebarComponents/Languages';
import Qualities from './sidebarComponents/Qualities';
import CenterOfInt from './sidebarComponents/Coi';
import Profile from './bodyComponents/Profile';
import Studies from './bodyComponents/Studies';
import ProXP from './bodyComponents/ProXP';

const CvForm = ({
  userInfo,
  handleInputChange,
  handleSkillAdding,
  handleSkillsChange,
  inputs,
  langs,
  handleLanguagesAdding,
  handleLanguagesChange,
  qualities,
  handleQualitiesAdding,
  handleQualitiesChange,
  handleCenterOfIntAdding,
  handleCenterOfIntChange,
  COI,
  handleBodyChange,
  BodyContentData,
  xps,
  handleProXPAdding,
  handleProXPChange,
  handleDataClearing,
  imageHandler

}) => {


  return (
    <>
      <div className='cv-form'>
        <PersonalInfo
          userInfo={userInfo}
          handleInputChange={handleInputChange}
          handleDataClearing={handleDataClearing}
          imageHandler={imageHandler}
        />

        <Skills
          handleSkillAdding={handleSkillAdding}
          handleSkillsChange={handleSkillsChange}
          inputs={inputs}
        />

        <Languages
          handleLanguagesAdding={handleLanguagesAdding}
          handleLanguagesChange={handleLanguagesChange}
          inputs={langs}
        />

        <Qualities
          handleQualitiesAdding={handleQualitiesAdding}
          handleQualitiesChange={handleQualitiesChange}
          inputs={qualities}
        />

        <CenterOfInt
          handleCenterOfIntAdding={handleCenterOfIntAdding}
          handleCenterOfIntChange={handleCenterOfIntChange}
          inputs={COI}
        />

        <Profile
          BodyContentData={BodyContentData}
          handleBodyChange={handleBodyChange}
        />

        <Studies
          BodyContentData={BodyContentData}
          handleInputChange={handleBodyChange}
        />


        <ProXP
          handleProXPAdding={handleProXPAdding}
          handleProXPChange={handleProXPChange}
          inputs={xps}
        />

      </div>
    </>
  )
}

export default CvForm