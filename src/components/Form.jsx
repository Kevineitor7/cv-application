export default function Form({
    showName,
    handleName, 
    showOccupation,
    handleOccupation,
    handlePhone,
    showPhone,
    handleEmail,
    showEmail,
    handleAbout,
    showAbout,
    handleDegree,
    showDegree,
    handleJob,
    showJob,
    handleSkill,
    skill,
    addSkill,
    handleLanguage,
    loadFile
}) {

    

    return (
        <>
            <h2>Complete your information</h2>
            <section className="personal">
                <h3>Personal info</h3>
                <hr></hr>
                <div>
                    <div className="flex-form">
                        <label>Name: <input onChange={handleName} type='text'/></label>
                        <button onClick={showName}>Insert name to CV</button>
                    </div>
                    <div className="flex-form">
                        <label>Phone: <input onChange={handlePhone} type='tel'/></label>
                        <button onClick={showPhone}>Insert phone to CV</button>
                    </div>
                    <div className="flex-form">
                        <label>Email: <input onChange={handleEmail} type='email'/></label>
                        <button onClick={showEmail}>Insert email to CV</button>
                    </div>
                    <div className="flex-form">
                        <label>Ocupation: <input onChange={handleOccupation} type='text'/></label>
                        <button onClick={showOccupation}>Insert ocupation to CV</button>
                    </div>
                    <div className="flex-form">
                        <label>About you: <textarea onChange={handleAbout} rows='4' cols='50' maxLength='220' style={{resize:'none'}}></textarea></label>
                        <button onClick={showAbout}>Insert to CV</button>
                    </div>
                    <label>Picture: <input type='file' accept='image/*' onChange={loadFile}/></label>
                </div>
            </section>
            <section className="education">
                <h3>Education</h3>
                <hr></hr>
                <p><em>(Up to 2 degrees)</em></p>
                <div>
                    <label>Degree: <input className='degree-one' onChange={handleDegree} type='text'/></label>
                    <div className="flex-form">
                        <label>Started: <input className="degree-one-start" onChange={handleDegree} type='text' maxLength='4' size='4' pattern='[0-9]{4}'/></label>
                        <label>Finished: <input className="degree-one-end" onChange={handleDegree} type='text' maxLength='4' size='4' pattern='[0-9]{4}'/></label>
                    </div>
                    <label>School: <input className="degree-one-school" onChange={handleDegree} type='text'/></label>
                    <button className="show-degree-one" onClick={showDegree}>Add</button>
                </div>
                <div>
                    <label>Degree: <input className='degree-two' onChange={handleDegree} type='text'/></label>
                    <div className="flex-form">
                        <label>Started: <input className='degree-two-start' onChange={handleDegree} type='text' maxLength='4' size='4' pattern='[0-9]{4}'/></label>
                        <label>Finished: <input className='degree-two-end' onChange={handleDegree} type='text' maxLength='4' size='4' pattern='[0-9]{4}'/></label>
                    </div>
                    <label>School: <input className='degree-two-school' onChange={handleDegree} type='text'/></label>
                    <button className='show-degree-two' onClick={showDegree}>Add</button>
                </div>
            </section>
            <section className="experience">
                <h3>Experience</h3>
                <hr></hr>
                <p><em>(Up to 3 jobs)</em></p>
                <div>
                    <label>Position: <input className="position-one" onChange={handleJob} type='text'/></label>
                    <label>Company: <input className="company-one" onChange={handleJob} type='text'/></label>
                    <div className="flex-form">
                        <label>Started: <input className="job-one-start" onChange={handleJob} type='text' maxLength='4' size='4' pattern='[0-9]{4}'/></label>
                        <label>Finished: <input className="job-one-end" onChange={handleJob} type='text' maxLength='4' size='4' pattern='[0-9]{4}'/></label>
                    </div>
                    <label>Job description: <textarea className="job-one-description" onChange={handleJob} rows='5' cols='50' maxLength='320' style={{resize:'none'}}></textarea></label>
                    <button className="show-job-one" onClick={showJob}>Add</button>
                </div>
                <div>
                    <label>Position: <input className="position-two" onChange={handleJob} type='text'/></label>
                    <label>Company: <input className="company-two" onChange={handleJob} type='text'/></label>
                    <div className="flex-form">
                        <label>Started: <input className="job-two-start" onChange={handleJob} type='text' maxLength='4' size='4' pattern='[0-9]{4}'/></label>
                        <label>Finished: <input className="job-two-end" onChange={handleJob} type='text' maxLength='4' size='4' pattern='[0-9]{4}'/></label>
                    </div>
                    <label>Job description: <textarea className="job-two-description" onChange={handleJob} rows='5' cols='50' maxLength='320' style={{resize:'none'}}></textarea></label>
                    <button className="show-job-two" onClick={showJob}>Add</button>
                </div>
                <div>
                    <label>Position: <input className="position-three" onChange={handleJob} type='text'/></label>
                    <label>Company: <input className="company-three" onChange={handleJob} type='text'/></label>
                    <div className="flex-form">
                        <label>Started: <input className="job-three-start" onChange={handleJob} type='text' maxLength='4' size='4' pattern='[0-9]{4}'/></label>
                        <label>Finished: <input className="job-three-end" onChange={handleJob} type='text' maxLength='4' size='4' pattern='[0-9]{4}'/></label>
                    </div>
                    <label>Job description: <textarea className="job-three-description" onChange={handleJob} rows='5' cols='50' maxLength='320' style={{resize:'none'}}></textarea></label>
                    <button className="show-job-three" onClick={showJob}>Add</button>
                </div>
            </section>
            <section className="skills">
                <h3>Skills</h3>
                <hr></hr>
                <div>
                    <div className="flex-form">
                        <label>Skill: <input className="skill-input" onChange={handleSkill} value={skill} type='text' size='20'/></label>
                        <button className="add-skill" onClick={addSkill}>Add Skill</button>
                    </div>
                    <label className="languages">Languages:
                        <label className="box">English<input value='english' className="english" onChange={handleLanguage} type='checkbox'/></label>
                        <label className="box">Spanish<input value='spanish' className="spanish" onChange={handleLanguage} type='checkbox'/></label>
                        <label className="box">French<input value='french' className="french" onChange={handleLanguage} type='checkbox'/></label>
                        <label className="box">German<input value='german' className="german" onChange={handleLanguage} type='checkbox'/></label>
                        <label className="box">Italian<input value='italian' className="italian" onChange={handleLanguage} type='checkbox'/></label>
                        <label className="box">Portuguese<input value='portuguese' className="portuguese" onChange={handleLanguage} type='checkbox'/></label>
                        <label className="box">Chinese<input value='chinese' className="chinese" onChange={handleLanguage} type='checkbox'/></label>
                        <label className="box">Japanese<input value='japanese' className="japanese" onChange={handleLanguage} type='checkbox'/></label>
                    </label>
                </div>
            </section>
        </>
    )
}