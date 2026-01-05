import React, { Component } from 'react'
import './index.css'
const openLightbox = (src) => {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  lightbox.classList.add("active");
};

// 关闭大图
const closeLightbox = () => {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
};
export default class Trainer extends Component {
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
  <div className="trainer-section fade-section">

    {/* 左侧图片区域（可点击放大） */}
    <div className="trainer-images">
        <h3 className='trainer-image-title'>Individual training</h3>
        <div className="trainer-img-wrapper" onClick={() => openLightbox('/image/Trainer1.jpg')}>
            <img src="/image/Trainer1.jpg" alt="Training Session 1" />
        </div>
        <h3 className='trainer-image-title'>Individual training</h3>
        <div className="trainer-img-wrapper" onClick={() => openLightbox('/image/Trainer2.jpg')}>
            <img src="/image/Trainer2.jpg" alt="Training Session 2" />
        </div>
        <h3 className='trainer-image-title'>Personal trainer certification</h3>
        <div className="trainer-img-wrapper" onClick={() => openLightbox('/image/Trainer3.jpg')}>
            <img src="/image/Trainer3.jpg" alt="Training Session 3" />
        </div>
    </div>

    {/* 右侧文本内容 */}
    <div className="trainer-content">
        <h2><strong>Personal Trainer</strong></h2>
        <h3>Hangzhou LEKE Fitness Club</h3>
        <div className="edu-time"><strong>03/2023 - 08/2024</strong></div>

        {/* Skills Highlights */}
        <div className="trainer-tags">
            <span className="tag">Strength Training</span>
            <span className="tag">Functional Fitness</span>
            <span className="tag">HIIT</span>
            <span className="tag">Weight Loss Coaching</span>
        </div>

        <ul>
            <li><strong>Designed personalized training programs</strong> for muscle gain, fat loss, and functional training.</li>
            <li>Guided clients in <strong>safe and effective exercise techniques</strong> to enhance performance and prevent injuries.</li>
            <li>Managed <strong>membership support, scheduling, and payment handling</strong> at the front desk.</li>
            <li>Built strong client relationships through <strong>motivational coaching</strong> and progress evaluation.</li>
            <li>Promoted <strong>health & wellness programs</strong> while maintaining a clean gym environment.</li>
        </ul>

        {/* 图标（哑铃/心率/姿势） */}
        <div className="trainer-icons">
            <span>🏋️‍♂️</span>
            <span>❤️‍🔥</span>
            <span>🤸‍♂️</span>
        </div>
    </div>
    <div id="lightbox" className="lightbox" onClick={closeLightbox}>
    <img id="lightbox-img" src="" alt="" />
    </div>

</div>
    )
  }
}
