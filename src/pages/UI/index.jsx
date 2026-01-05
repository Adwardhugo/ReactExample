import React, { Component } from 'react'
import './index.css'

const openLightbox = (src) => {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  lightbox.classList.add("active");
};

const closeLightbox = () => {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
};
export default class UI extends Component {
  componentDidMount() {
    this.observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add("show");
            }
        });
        },
        { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(".fade-section");
    sections.forEach(sec => this.observer.observe(sec));
    }

    componentWillUnmount() {
    if (this.observer) {
        this.observer.disconnect();
    }
    }
  render() {
    return (
      <div className="ui-section fade-section">

        {/* 左侧图片区域 */}

        <div className="ui-images">
          <div className="ui-block">
              <h3 className = "ui-image-title">Mobile UI works</h3>
            <div className="ui-img-wrapper" onClick={() => openLightbox('/image/UI1.png')}>
              <img src="/image/UI1.png" alt="UI Work 1" />
            </div>
          </div>
          
          <div className="ui-block">
            <h3 className = "ui-image-title">Web UI works</h3>
            <div className="ui-img-wrapper" onClick={() => openLightbox('/image/UI2.png')}>
              <img src="/image/UI2.png" alt="UI Work 2" />
            </div>
          </div>

          <div className="ui-block">
            <h3 className = "ui-image-title">Banner UI works</h3>
            <div className="ui-img-wrapper" onClick={() => openLightbox('/image/UI3.png')}>
              <img src="/image/UI3.png" alt="UI Work 3" />
            </div>
          </div>
        </div>

        {/* 右侧文字 */}
        <div className="ui-content">

          {/* 第一段经历 */}
          <h2 className="ui-title"><strong>UI/UX Design Intern</strong></h2>
          <h3 className="ui-subtitle">Hangzhou Xinshida Film Equipment System Engineering Co., Ltd.</h3>
          <div className="ui-time"><strong>07/2019 - 09/2019</strong></div>

          <ul className="ui-list">
            <li>Collaborated with backend engineers to design <strong>user-centered product interfaces</strong> using Figma and Adobe XD.</li>
            <li>Created <strong>interactive prototypes, UI flows,</strong> and design guidelines for development teams.</li>
            <li>Designed <strong>virtual studio environments</strong> for broadcast systems using motion graphics and animation scripting.</li>
            <li>Enhanced the overall digital experience through better <strong>layout, visual hierarchy,</strong> and interaction logic.</li>
          </ul>

          <br/>

          {/* 第二段经历 */}
          <h2 className="ui-title"><strong>UI/UX & Brand Design Intern</strong></h2>
          <h3 className="ui-subtitle">Huai'an Polar Light Sports Culture Co., Ltd.</h3>
          <div className="ui-time"><strong>03/2021 - 08/2021</strong></div>

          <ul className="ui-list">
            <li>Conducted <strong>user and market research</strong> for skiing-related products, generating 0-1 insights and competitive analysis.</li>
            <li>Designed branding materials including the <strong>“Xueshan Series”</strong> logo, eco-friendly bag patterns, cultural graphics, and apparel designs.</li>
            <li>Delivered <strong>10+ UI/UX and visual design projects</strong> including operation pages, icons, illustrations, and marketing assets.</li>
            <li>Strengthened brand identity using <strong>story-driven visual design</strong> and user-centered creative approaches.</li>
          </ul>

        </div>

        {/* Lightbox */}
        <div id="lightbox" className="lightbox" onClick={closeLightbox}>
          <img id="lightbox-img" src="" alt="" />
        </div>

      </div>
    )
  }
}
