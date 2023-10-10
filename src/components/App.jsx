import { useState } from 'react'
import CV from './CV.jsx'
import Form from './Form.jsx'
import '/src/styles/styles.css'

export default function App() {

  const [nameShown, setNameShown] = useState('(Here goes name)')
  const [name, setName] = useState('')
  const [occupationShown, setOccupationShown] = useState('Occupation')
  const [occupation, setOccupation] = useState('')
  const [phoneShown, setPhoneShown] = useState('###-###-####')
  const [phone, setPhone] = useState('')
  const [emailShown, setEmailShown] = useState('yourname@mail.com')
  const [email, setEmail] = useState('')
  const [aboutShown, setAboutShown] = useState('About you')
  const [about, setAbout] = useState('')
  const [degreeOneShown, setDegreeOneShown] = useState({})
  const [degreeTwoShown, setDegreeTwoShown] = useState({})
  const [degreeOne, setDegreeOne] = useState({})
  const [degreeTwo, setDegreeTwo] = useState({})
  const [jobOneShown, setJobOneShown] = useState({})
  const [jobTwoShown, setJobTwoShown] = useState({})
  const [jobThreeShown, setJobThreeShown] = useState({})
  const [jobOne, setJobOne] = useState({})
  const [jobTwo, setJobTwo] = useState({})
  const [jobThree, setJobThree] = useState({})
  const [skill, setSkill] = useState('')
  const [skills, setSkills] = useState([])
  const [languages, setLanguages] = useState([])


  function handleName(e) {
    setName(e.target.value)
  }

  function showName() {
    if (name === '') {
      setNameShown('(Here goes name)')
    } else {
      setNameShown(name)
    }
  }

  function handleOccupation(e) {
    setOccupation(e.target.value)
  }

  function showOccupation() {
    if (occupation === '') {
      setOccupationShown('Occupation')
    } else {
      setOccupationShown(occupation)
    }
  }

  function handlePhone(e) {
    setPhone(e.target.value)
  }

  function showPhone() {
    if (phone === '') {
      setPhoneShown('###-###-####')
    } else {
      setPhoneShown(phone)
    }
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function showEmail() {
    if (email === '') {
      setEmailShown('yourname@mail.com')
    } else {
      setEmailShown(email)
    }
  }

  function handleAbout(e) {
    setAbout(e.target.value)
  }

  function showAbout() {
    if (about === '') {
      setAboutShown('About you')
    } else {
      setAboutShown(about)
    }
  }

  function handleDegree(e) {
      if (e.target.className == 'degree-one') {
        setDegreeOne({...degreeOne, degree: e.target.value})
      } else if (e.target.className == 'degree-one-start') {
        setDegreeOne({...degreeOne, started: e.target.value + '-'})
      } else if (e.target.className == 'degree-one-end') {
        setDegreeOne({...degreeOne, end: e.target.value})
      } else if (e.target.className == 'degree-one-school') {
        setDegreeOne({...degreeOne, school: e.target.value})
      }

      if (e.target.className == 'degree-two') {
        setDegreeTwo({...degreeTwo, degree: e.target.value})
      } else if (e.target.className == 'degree-two-start') {
        setDegreeTwo({...degreeTwo, started: e.target.value + '-'})
      } else if (e.target.className == 'degree-two-end') {
        setDegreeTwo({...degreeTwo, end: e.target.value})
      } else if (e.target.className == 'degree-two-school') {
        setDegreeTwo({...degreeTwo, school: e.target.value})
      }
  }

  function showDegree(e) {
    if (e.target.className == 'show-degree-one') {
      setDegreeOneShown(degreeOne)
    } else if (e.target.className == 'show-degree-two') {
      setDegreeTwoShown(degreeTwo)
    }
  }

  function handleJob(e) {
    if (e.target.className == 'position-one') {
      setJobOne({...jobOne, position: e.target.value})
    } else if (e.target.className == 'company-one') {
      setJobOne({...jobOne, company: e.target.value})
    } else if (e.target.className == 'job-one-start') {
      setJobOne({...jobOne, start: e.target.value + '-'})
    } else if (e.target.className == 'job-one-end') {
      setJobOne({...jobOne, end: e.target.value})
    } else if (e.target.className == 'job-one-description') {
      setJobOne({...jobOne, description: e.target.value})
    }

    if (e.target.className == 'position-two') {
      setJobTwo({...jobTwo, position: e.target.value})
    } else if (e.target.className == 'company-two') {
      setJobTwo({...jobTwo, company: e.target.value})
    } else if (e.target.className == 'job-two-start') {
      setJobTwo({...jobTwo, start: e.target.value + '-'})
    } else if (e.target.className == 'job-two-end') {
      setJobTwo({...jobTwo, end: e.target.value})
    } else if (e.target.className == 'job-two-description') {
      setJobTwo({...jobTwo, description: e.target.value})
    }

    if (e.target.className == 'position-three') {
      setJobThree({...jobThree, position: e.target.value})
    } else if (e.target.className == 'company-three') {
      setJobThree({...jobThree, company: e.target.value})
    } else if (e.target.className == 'job-three-start') {
      setJobThree({...jobThree, start: e.target.value + '-'})
    } else if (e.target.className == 'job-three-end') {
      setJobThree({...jobThree, end: e.target.value})
    } else if (e.target.className == 'job-three-description') {
      setJobThree({...jobThree, description: e.target.value})
    }
  }

  function showJob(e) {
    if (e.target.className == 'show-job-one') {
      setJobOneShown(jobOne)
    } else if (e.target.className == 'show-job-two') {
      setJobTwoShown(jobTwo)
    } else if (e.target.className == 'show-job-three') {
      setJobThreeShown(jobThree)
    }
  }

  function handleSkill(e) {
    setSkill(e.target.value)
  }

  function addSkill() {
    if (skills.length == 6) {
      setSkill('You reached the limit, stop')
      return
    }

    if (skill == '') {
      return
    } else {
        setSkills([...skills, skill])
        setSkill('')
    }
  }

  function handleLanguage(e) {
    if (e.target.checked) {
      if (e.target.value == 'english') {
        setLanguages([...languages, 'English'])
      } else if (e.target.value == 'spanish') {
        setLanguages([...languages, 'Spanish'])
      } else if (e.target.value == 'french') {
        setLanguages([...languages, 'French'])
      } else if (e.target.value == 'german') {
        setLanguages([...languages, 'German'])
      } else if (e.target.value == 'italian') {
        setLanguages([...languages, 'Italian'])
      } else if (e.target.value == 'portuguese') {
        setLanguages([...languages, 'Portuguese'])
      } else if (e.target.value == 'chinese') {
        setLanguages([...languages, 'Chinese'])
      } else if (e.target.value == 'japanese') {
        setLanguages([...languages, 'Japanese'])
      }
    }

    if (!e.target.checked) {
      if (e.target.value == 'english') {
        languages.splice(languages.indexOf('English'), 1)
        setLanguages([...languages])
      } else if (e.target.value == 'spanish') {
        languages.splice(languages.indexOf('Spanish'), 1)
        setLanguages([...languages])
      } else if (e.target.value == 'french') {
        languages.splice(languages.indexOf('French'), 1)
        setLanguages([...languages])
      } else if (e.target.value == 'german') {
        languages.splice(languages.indexOf('German'), 1)
        setLanguages([...languages])
      } else if (e.target.value == 'italian') {
        languages.splice(languages.indexOf('Italian'), 1)
        setLanguages([...languages])
      } else if (e.target.value == 'portuguese') {
        languages.splice(languages.indexOf('Portuguese'), 1)
        setLanguages([...languages])
      } else if (e.target.value == 'chinese') {
        languages.splice(languages.indexOf('Chinese'), 1)
        setLanguages([...languages])
      } else if (e.target.value == 'japanese') {
        languages.splice(languages.indexOf('Japanese'), 1)
        setLanguages([...languages])
      }
    }
    console.log(languages)
  }

  function loadFile(e) {
    let img = document.getElementById('photo')
    img.src = URL.createObjectURL(e.target.files[0])
}

  return (
    <>
      <h1>Create your CV Application</h1>
      <div className='flex' style={{justifyContent:'space-between'}}>
        <div className='form'>
          <Form
            handleName={handleName}
            showName={showName}
            handleOccupation={handleOccupation}
            showOccupation={showOccupation}
            handlePhone={handlePhone}
            showPhone={showPhone}
            handleEmail={handleEmail}
            showEmail={showEmail}
            handleAbout={handleAbout}
            showAbout={showAbout}
            handleDegree={handleDegree}
            showDegree={showDegree}
            handleJob={handleJob}
            showJob={showJob}
            handleSkill={handleSkill}
            skill={skill}
            addSkill={addSkill}
            handleLanguage={handleLanguage}
            loadFile={loadFile}
          />
        </div>
        <div className='display-cv'>
          <CV
            name={nameShown}
            phone={phoneShown}
            occupation={occupationShown}
            email={emailShown}
            about={aboutShown}
            degreeOne={degreeOneShown.degree}
            degreeOneStart={degreeOneShown.started}
            degreeOneEnd={degreeOneShown.end}
            degreeOneSchool={degreeOneShown.school}
            degreeTwo={degreeTwoShown.degree}
            degreeTwoStart={degreeTwoShown.started}
            degreeTwoEnd={degreeTwoShown.end}
            degreeTwoSchool={degreeTwoShown.school}
            jobOnePosition={jobOneShown.position}
            jobOneCompany={jobOneShown.company}
            jobOneStart={jobOneShown.start}
            jobOneEnd={jobOneShown.end}
            jobOneDescription={jobOneShown.description}
            jobTwoPosition={jobTwoShown.position}
            jobTwoCompany={jobTwoShown.company}
            jobTwoStart={jobTwoShown.start}
            jobTwoEnd={jobTwoShown.end}
            jobTwoDescription={jobTwoShown.description}
            jobThreePosition={jobThreeShown.position}
            jobThreeCompany={jobThreeShown.company}
            jobThreeStart={jobThreeShown.start}
            jobThreeEnd={jobThreeShown.end}
            jobThreeDescription={jobThreeShown.description}
            skills={skills}
            languages={languages}
          />
        </div>
      </div>
    </>
  )
}

