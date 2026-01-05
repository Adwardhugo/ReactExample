import React, { Component } from 'react'
import './index.css'



export default class Home extends Component {
  render() {
    return (
      
      <main className="main-content">

        <section className="hero-section">
          <h1>Hello! Welcome</h1>
        </section>

        <section className="summary-card">
            <img className="profile-img" src="/image/profile.png" alt="design sample" />
            <h1 className="name-title">Edward Bowen</h1>
            <p className="sub-slogan">Exploring code, design, and the stories behind them. Welcome to my personal tech playground.</p>
            <hr className="divider"/>
            <h2>Summary</h2>

            <div className="contact-info">
              <h3>Contact</h3>
              <p>Phone: +64 2885161244</p>
              <p>Email: adwardhugo123@gmail.com</p>
            </div>

            <hr className="divider"/>
            <p className="summary-text">
            <p>
              I am currently pursuing a Master's degree in Information Technology at the University of Auckland,
              where I am deepening my expertise in modern software engineering, cloud architectures, and
              data-driven systems. Before starting my postgraduate studies, I spent three years working as a 
              <strong> Product Manager in intelligent data-processing platforms</strong>, where I led cross-functional teams, 
              designed end-to-end product workflows, and delivered solutions in complex enterprise environments.
            </p>

            <p>
              My technical skillset spans both <strong>frontend</strong> and <strong>backend</strong> development. On the frontend, 
              I specialize in <strong>React</strong>, building component-based interfaces, reusable UI elements, 
              <strong>Redux-powered state management</strong>, and responsive layouts that prioritize user experience.
            </p>

            <p>
              On the backend, I focus on <strong>Java Spring Boot</strong>, designing <strong>RESTful APIs</strong>, layered 
              service architectures, authentication flows, and scalable data processing pipelines. I work extensively 
              with <strong>SQL databases</strong>—including schema modeling, query optimization, relational structuring, 
              and end-to-end system integration.
            </p>

            <p>
              I also have practical experience in <strong>data analysis</strong> using Python. By leveraging tools such as 
              <strong>pandas, NumPy, and data visualization libraries</strong>, I conduct exploratory analysis, identify 
              system bottlenecks, and support data-informed product decisions. This analytical ability enhances my 
              engineering and product work, allowing me to design solutions with a clear understanding of both user 
            behavior and technical performance.
            </p>

            <p>
              Before transitioning fully into software engineering, I majored in <strong>Interaction Media Design</strong>, 
              which gave me a solid foundation in <strong>UI/UX principles, visual communication, prototyping, and 
              human-centered design</strong>. This interdisciplinary background allows me to bridge product strategy, 
              engineering implementation, and user-focused design—creating systems that are technically robust, 
            visually refined, and intuitive to use.
            </p>
            </p>
          <section/>
          <section className="card-grid"></section>

          <hr className="divider"/>

          {/* Card 1 - Left Image */}
          <div className="card-row">
            <img className="card-img" src="/image/profile_1.jpg" alt="design sample" />
            <div className="card-content">
              <h3>Fast learner</h3>
              <p>Active listener and diligent note taker—you rarely need to teach me the same thing twice.</p>
            </div>
          </div>

          <hr className="divider"/>

          {/* Card 2 - Right Image */}
          <div className="card-row reverse">
            <img className="card-img" src="/image/profile_2.jpg" alt="design sample" />
            <div className="card-content">
              <h3>Attention to detail</h3>
              <p>Perfectionist with the motto of “do it right the first time”.</p>
            </div>
          </div>
        </section>
      </main>
      
    )
  }
}
