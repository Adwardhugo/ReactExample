import React, { Component } from 'react'
import './index.css';

export default class Background extends Component {
  render() {
    return (
   <div className="edu-wrapper">

  <h1 className="edu-title">Education Background</h1>

  {/* Master of IT */}
  <div className="edu-block">
    <h2>Master of Information Technology</h2>
    <h3>University of Auckland, New Zealand</h3>
    <div className="edu-time">03/2025 – Present</div>
    <ul>
      <li>Focus on Software Engineering, Cloud Computing, Data Systems, and HCI.</li>
      <li>Developing full-stack applications using React, Spring Boot, and Express.js.</li>
      <li>Research interests include data governance and AI-enabled digital transformation.</li>
    </ul>
  </div>

  <div className="divider"></div>

  {/* Work Experience */}
  <div className="edu-block">
    <h2>Product Manager / Software Project Manager</h2>
    <h3>Full-Time Professional Experience</h3>
    <div className="edu-time">11/2021 – 12/2024</div>
    <ul>
      <li>Led cross-functional teams building intelligent data-processing systems.</li>
      <li>Collaborated with engineers using Java, Spring Boot, React, MySQL, and Node.js.</li>
      <li>Executed Agile sprints, UX prototyping, and large-scale digital service design.</li>
    </ul>
  </div>

  <div className="divider"></div>

  {/* Master of Multimedia */}
  <div className="edu-block">
    <h2>Master of Multimedia Design Research</h2>
    <h3>National Taichung University of Science and Technology, Taiwan</h3>
    <div className="edu-time">09/2019 – 10/2021</div>
    <ul>
      <li>Specialised in interaction design, multimedia research, and UX innovation.</li>
      <li>Completed research on digital behaviour and multimedia interaction frameworks.</li>
    </ul>
  </div>

  <div className="divider"></div>

  {/* Bachelor */}
  <div className="edu-block">
    <h2>Bachelor of Multimedia Design</h2>
    <h3>National Formosa University, Taiwan</h3>
    <div className="edu-time">09/2015 – 06/2019</div>
    <ul>
      <li>Focused on visual design, interaction systems, and digital content creation.</li>
      <li>Produced UI/UX prototypes, motion graphics, and interactive media projects.</li>
    </ul>
  </div>

</div>
    )
  }
}
