import React, { Component } from 'react';
import './index.css';

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

export default class Barista extends Component {
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
      <div className="barista-section fade-section">

        {/* 左侧图片区域 */}
        <div className="barista-images">
          <h3 className = "Barista-image-title">The Barista Academy in NewZealand</h3>
          <div className="barista-img-wrapper" onClick={() => openLightbox('/image/Barista1.jpg')}>
            <img src="/image/Barista1.jpg" alt="Coffee Session 1" />
          </div>
          <h3 className = "Barista-image-title">The Barista Academy certification</h3>
          <div className="barista-img-wrapper" onClick={() => openLightbox('/image/Barista2.jpg')}>
            <img src="/image/Barista2.jpg" alt="Coffee Session 2" />
          </div>
          <h3 className = "Barista-image-title">intermediate Barista certification</h3>
          <div className="barista-img-wrapper" onClick={() => openLightbox('/image/Barista3.jpg')}>
            <img src="/image/Barista3.jpg" alt="Coffee Session 3" />
          </div>
        </div>

        {/* 右侧文字区 */}
        <div className="barista-content">
          <h2 className="barista-title"><strong>Barista</strong></h2>
          <h3 className="barista-subtitle">Hangzhou DIFFICULTY COFFEE</h3>
          <div className="barista-time"><strong>04/2022 – 10/2022</strong></div>

          {/* 技能标签 */}
          <div className="barista-tags">
            <span className="barista-tag">Espresso Extraction</span>
            <span className="barista-tag">Milk Texturing</span>
            <span className="barista-tag">Latte Art</span>
            <span className="barista-tag">Customer Service</span>
          </div>

          <ul className="barista-list">
            <li>Prepared a wide range of espresso-based beverages with consistency and speed.</li>
            <li>Skilled in <strong>espresso extraction, milk texturing and latte art techniques</strong>.</li>
            <li>Performed daily <strong>machine calibration and maintenance</strong> ensuring brewing stability.</li>
            <li>Provided friendly customer service in a fast-paced café environment.</li>
            <li>Obtained <strong>Intermediate Barista Certificate</strong> from DIFFICULTY COFFEE.</li>
            <li>Completed professional barista training at <strong>The Barista Academy, New Zealand</strong>.</li>
          </ul>

          {/* 咖啡图标 */}
          <div className="barista-icons">
            <span>☕</span>
            <span>🥛</span>
            <span>🌟</span>
          </div>
        </div>

        {/* Lightbox */}
        <div id="lightbox" className="lightbox" onClick={closeLightbox}>
          <img id="lightbox-img" src="" alt="" />
        </div>

      </div>
    );
  }
}
