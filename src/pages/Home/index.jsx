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
                I am currently pursuing a Master's degree in Information Technology at the University of Auckland, where I continue to strengthen my technical expertise and broaden my understanding of modern digital systems. Prior to my postgraduate studies, I spent three years working as a Product Manager in the intelligent data-processing domain, where I led cross-functional teams, designed end-to-end product solutions, and delivered data-driven features for complex enterprise environments. This experience gave me a strong foundation in strategic planning, stakeholder communication, and turning user needs into scalable technology.
                My technical skillset spans both frontend and backend development. 
                <br/><br/>On the frontend, I am proficient with modern JavaScript frameworks—especially React, where I enjoy building interactive interfaces, reusable components, and responsive layouts that deliver an intuitive user experience.
                <br/><br/>On the backend, I specialize in Java Spring Boot, designing RESTful APIs, implementing layered architectures, and building reliable data product frameworks that support modularity and maintainability. I work confidently with SQL databases, structuring relational models, optimizing queries, and connecting data pipelines across system layers.
                I also have practical experience in data analysis using Python, leveraging tools such as pandas, NumPy, and visualization libraries to extract insights, perform exploratory analysis, and support data-driven decision-making in product contexts. 
                <br/><br/>Combining this analytical ability with my engineering knowledge allows me to design products with a stronger understanding of both user behavior and system performance.
                Before transitioning fully into the IT field, I majored in Interaction Media Design, which equipped me with a solid foundation in UI/UX principles, visual design, and human-centered thinking. This background allows me to bridge the worlds of design, product, and engineering—creating solutions that are not only technically robust but also aesthetically coherent and user-focused.
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
