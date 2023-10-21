import React from 'react'
import './Resume.css'
import ResumeData from './dataFolder/data'

function Resume() {
  const { Name, Skills, Education, Experience, Interest } = ResumeData;
  return (
    <>
      <div className="header"></div>
      <div className="left"></div>
      <div className="insideContainer">
        <h1>Resume</h1>
        <h2>{Name}</h2>
        <hr />
        <ul>
          <li>Interest: <br /> {Interest}</li>
          <li>Skills: <br /> {Skills}</li>
          <li>Education: <br />{Education}</li>
          <li>Expreience: <br />Year: {Experience.Year} Company: {Experience.Company} Role:{Experience.Role}</li>
        </ul>
      </div>
      <div className="right"></div>
      <div className="footer"></div>
    </>
  )
}

export default Resume
