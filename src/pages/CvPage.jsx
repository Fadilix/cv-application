import React from 'react'
import CvResult from '../components/CvResult'
import CvForm from '../components/CvForm'
import { useState } from 'react';

const CvPage = () => {
    // initial data
    const initialData = {
        name: "Martin Chancelier",
        email: "martinchancelier@gmail.com",
        contact: "+44 1234 1234 1234",
        address: "123 Rue de la Example 75001, Paris, France",
    }

    const initialBodyContentData = {
        profile: "After 3 years of experience as a medical secretary within a multidisciplinary medical practice, I have gained the versatility required for this type of environment. I am available starting from March for a position in the Hauts-de-Seine region.",
        studies: "Bachelor's degree in Design (July 2017) ST2S (Sciences and Technologies of Health and Social)",
        school: "Jacques Prévert High School, Nanterre",

    }


    const handleBodyChange = (e) => {
        setBodyContentData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    }

    const [BodyContentData, setBodyContentData] = useState(initialBodyContentData)
    const [personalInfo, setPersonalInfo] = useState(initialData)


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

    
    
    //initial data
    const initialSkills = ["Medical care", "Consultant"]
    const initialLangs = ["English", "French"]
    const initialQualities = ["Team work", "self-control"]
    const initialCenterOfInterest = ["Interaction Design", "Visual Branding and Identity Design", "User Experience (UX) Design"]
    const initialXP = [
        "Led a team of developers in the implementation of a scalable web application.",
        "Collaborated with cross-functional teams to design and deliver high-quality software.",
        "Developed and maintained robust backend systems using Node.js and MongoDB.",
    ]
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
    )
}

export default CvPage