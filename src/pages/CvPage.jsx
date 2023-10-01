import React from 'react'
import CvResult from '../components/CvResult'
import CvForm from '../components/CvForm'
import { useState } from 'react';
import {
    initialBodyContentData,
    initialCenterOfInterest,
    initialData,
    initialLangs,
    initialQualities,
    initialSkills,
    initialXP
} from '../components/data/defaultUserData';

const CvPage = () => {
    // upload image
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setPersonalInfo((prev) => ({ ...prev, image: reader.result }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleBodyChange = (e) => {
        setBodyContentData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    }

    const [BodyContentData, setBodyContentData] = useState(initialBodyContentData)
    const [personalInfo, setPersonalInfo] = useState(initialData)

    // clearing data
    const handleDataClearing = () => {
        setBodyContentData({
            profile: "",
            studies: "",
            school: ""
        })
        setPersonalInfo({
            name: "",
            email: "",
            contact: "",
            address: "",
        })
        setXP([""]);
        setInputs([""]);
        setLangs([""])
        setCenterOfInterest([""]);
        setQualities([""])
    }

    // for the floating informations
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [langs, setLangs] = useState(initialLangs);
    const [inputs, setInputs] = useState(initialSkills);
    const [qualities, setQualities] = useState(initialQualities)
    const [centerOfInterest, setCenterOfInterest] = useState(initialCenterOfInterest)
    const [XP, setXP] = useState(initialXP);

    // FUNCTIONS
    // languages
    const handleLangsAdding = () => {
        setLangs([...langs, ""])
    }
    const handleLangsChange = (e, index) => {
        const newLangs = [...langs];
        newLangs[index] = e.target.value;
        setLangs(newLangs);
    };

    // skills
    const handleSkillsChange = (e, index) => {
        const newInputs = [...inputs];
        newInputs[index] = e.target.value;
        setInputs(newInputs);
    };
    const handleSkillAdding = () => {
        setInputs([...inputs, ""])
    }

    // qualities
    const handleQualAdding = () => {
        setQualities([...qualities, ""])
    }
    const handleQualChange = (e, index) => {
        const newQualities = [...qualities];
        newQualities[index] = e.target.value;
        setQualities(newQualities);
    };


    // center of interest
    const handleCOIAdding = () => {
        setCenterOfInterest([...centerOfInterest, ""])
    }
    const handleCOIChange = (e, index) => {
        const newCOIs = [...centerOfInterest];
        newCOIs[index] = e.target.value;
        setCenterOfInterest(newCOIs);
    };

    // xp change
    const handleProXPAdding = () => {
        setXP([...XP, ""]);
    }

    const handleProXPChange = (e, index) => {
        const newXPs = [...XP];
        newXPs[index] = e.target.value;
        setXP(newXPs);
    }

    return (
        <div className='App'>
            <div className='container'>
                <CvForm
                    userInfo={personalInfo}
                    handleInputChange={handleInputChange}
                    handleSkillAdding={handleSkillAdding}
                    handleSkillsChange={handleSkillsChange}
                    inputs={inputs}
                    handleLanguagesAdding={handleLangsAdding}
                    handleLanguagesChange={handleLangsChange}
                    langs={langs}
                    handleQualitiesAdding={handleQualAdding}
                    handleQualitiesChange={handleQualChange}
                    qualities={qualities}
                    COI={centerOfInterest}
                    handleCenterOfIntAdding={handleCOIAdding}
                    handleCenterOfIntChange={handleCOIChange}
                    BodyContentData={BodyContentData}
                    handleBodyChange={handleBodyChange}
                    handleProXPAdding={handleProXPAdding}
                    handleProXPChange={handleProXPChange}
                    xps={XP}
                    handleDataClearing={handleDataClearing}
                    imageHandler={handleImageChange}
                />

                <CvResult
                    information={personalInfo}
                    competences={inputs}
                    languages={langs}
                    BodyContentData={BodyContentData}
                    experiences={XP}
                    ci={centerOfInterest}
                    quali={qualities}
                />
            </div>
        </div>
    );
}

export default CvPage;
