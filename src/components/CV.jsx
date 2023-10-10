
export default function CV({
    name,
    phone,
    occupation,
    email,
    about,
    degreeOne,
    degreeOneStart,
    degreeOneEnd,
    degreeOneSchool,
    degreeTwo,
    degreeTwoStart,
    degreeTwoEnd,
    degreeTwoSchool,
    jobOnePosition,
    jobOneCompany,
    jobOneStart,
    jobOneEnd,
    jobOneDescription,
    jobTwoPosition,
    jobTwoCompany,
    jobTwoStart,
    jobTwoEnd,
    jobTwoDescription,
    jobThreePosition,
    jobThreeCompany,
    jobThreeStart,
    jobThreeEnd,
    jobThreeDescription,
    skills,
    languages
}) {
    
    return (
        <>
            <div className="left">
                <img id='photo' />
                <div className='cv-contact'>
                    <h4 style={{textAlign: 'center'}}>Contact</h4>
                    <hr></hr>
                    <p>Email:</p>
                    <p>{email}</p>
                    <p>Phone:</p>
                    <p>{phone}</p>
                </div>
                <div className='education-cv'>
                    <h4 style={{textAlign: 'center'}}>Education</h4>
                    <hr></hr>
                    <div className="degrees">
                        <div className="degree">
                            <p>{degreeOneStart}{degreeOneEnd}</p>
                            <p>{degreeOne}</p>
                            <p>{degreeOneSchool}</p>
                        </div>
                        <div className="degree">
                            <p>{degreeTwoStart}{degreeTwoEnd}</p>
                            <p>{degreeTwo}</p>
                            <p>{degreeTwoSchool}</p>
                        </div>
                    </div>
                </div>
                <div className="skills-cv">
                    <h4 style={{textAlign: 'center'}}>Skills</h4>
                    <hr></hr>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="right">
                <div className="info">
                    <h3>{name}</h3>
                    <p className="ocupation">{occupation}</p>
                    <p className="about-you">{about}</p>
                </div>
                <div className="experience-cv">
                    <h4>Experience</h4>
                    <hr></hr>
                    <div className="job">
                        <p className="job-title">{jobOnePosition}</p>
                        <p className="job-time">{jobOneStart}{jobOneEnd}</p>
                        <p className="job-place">{jobOneCompany}</p>
                        <p className="job-description">{jobOneDescription}</p>
                    </div>
                    <div className="job">
                        <p className="job-title">{jobTwoPosition}</p>
                        <p className="job-time">{jobTwoStart}{jobTwoEnd}</p>
                        <p className="job-place">{jobTwoCompany}</p>
                        <p className="job-description">{jobTwoDescription}</p>
                    </div>
                    <div className="job">
                        <p className="job-title">{jobThreePosition}</p>
                        <p className="job-time">{jobThreeStart}{jobThreeEnd}</p>
                        <p className="job-place">{jobThreeCompany}</p>
                        <p className="job-description">{jobThreeDescription}</p>
                    </div>
                </div>
                <div className="languages-cv">
                    <h4>Languages</h4>
                    <hr></hr>
                    <ul>
                        {languages.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
