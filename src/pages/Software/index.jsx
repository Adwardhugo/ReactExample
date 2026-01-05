import React, { Component } from "react";
import "./index.css";
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
export default class Software extends Component {
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
<div className="software-section fade-section">

  {/* =================== data platform =================== */}
  <div className="software-content">

    <h2 className="software-main-title">Software Development</h2>
    <h3 className="software-subtitle">Practical Experience Across Data, AI, and Engineering</h3>
    <div className="software-time">Core Technical Stack</div>

    <h3 className="software-title">Big Data Governance Platform</h3>
    <p className="software-desc">
      A comprehensive big data governance platform enabling end-to-end data workflows—from ingestion,
      modeling, and ETL development to quality monitoring, O&M supervision, and data sharing. The platform
      significantly enhances automation and reduces manual operation complexity through unified metadata,
      task scheduling, lineage tracking, and intelligent alerting.
    </p>

    <ul className="software-list">
      <li>Source Data Management: Structured & unstructured multi-system data ingestion and governance.</li>
      <li>Data Modeling: Supports warehouse construction with lineage, metadata, and profiling.</li>
      <li>Data Development: ETL/ELT pipelines with task orchestration and dependency control.</li>
      <li>System O&M: Intelligent monitoring for system tasks, interfaces, and runtime exceptions.</li>
      <li>Data Interfaces: Unified API and service governance.</li>
      <li>Data Quality Management: Rule-based monitor for tables, fields, and model outputs.</li>
      <li>System Administration: User, role, domain, and configuration centers.</li>
    </ul>


  </div>

  {/* =================== image =================== */}
  <div className="software-images-row">

    <div className="software-img-box">
      <img src="/image/software-dataplatform1.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataplatform1.png')} />
      <div className="software-hover-title">Data Modeling</div>
    </div>

    <div className="software-img-box">
      <img src="/image/software-dataplatform2.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataplatform2.png')}/>
      <div className="software-hover-title">System Operations & Maintenance</div>
    </div>

    <div className="software-img-box">
        <img src="/image/software-dataplatform3.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataplatform3.png')}/>
      <div className="software-hover-title">Data Quality Management</div>
    </div>

    <div className="software-img-box">
      <img src="/image/software-dataplatform4.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataplatform4.png')}/>
    <div className="software-hover-title">data relation mapping</div>
    </div>

    <div className="software-img-box">
      <img src="/image/software-dataplatform5.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataplatform5.png')}/>    
    <div className="software-hover-title">API Interface Overview</div>
    </div>
    <div className="software-img-box">
      <img src="/image/software-dataplatform6.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataplatform6.png')}/>    
    <div className="software-hover-title">data cleaning</div>
    </div>
  </div>
  <hr className="software-hr" />
    {/* =================== data annotation =================== */}
  <div className="software-content">

    <h3 className="software-title">Data Annotation Platform</h3>
    <p className="software-desc">
        A platform designed to manage and annotate datasets required for AI model training. 
        It supports creating high-quality, training-ready data for deep learning models through system-guided annotation workflows. 
        The platform enables multi-user collaborative labeling, quality inspection and evaluation of annotated data, statistical analysis of annotation progress and performance,
        and secure export/download of labeled datasets.
    </p>

    <ul className="software-list">
      <li>Diverse Annotation Types: Supports multiple annotation modalities, including image classification, 
        object detection, image segmentation, text entity extraction, text summarization, text classification, 
        and text relation extraction—meeting a wide range of annotation needs for AI model training.
      </li>

      <li>Streamlined Annotation Workflow: Provides a minimalist, highly intuitive annotation interface with rich annotation functions, 
        lowering the skill threshold for annotators while increasing annotation efficiency.
      </li>

      <li>High-Quality Annotation Output: Offers visualized statistics for annotation progress and performance, 
        enabling managers to easily assess annotators' productivity and optimize task allocation. Includes built-in review and evaluation mechanisms to ensure accuracy and consistency of annotated datasets.
      </li>

      <li>Secure Data Annotation Environment: Supports private/on-premise deployment and platform customization, 
        ensuring data security and compliance with organizational requirements throughout the annotation process.
      </li>
    </ul>


  </div>

  {/* =================== image =================== */}
  <div className="software-images-row">

    <div className="software-img-box">
      <img src="/image/software-dataannotation1.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataannotation1.png')} />
      <div className="software-hover-title">Data type selection</div>
    </div>

    <div className="software-img-box">
      <img src="/image/software-dataannotation2.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataannotation2.png')}/>
      <div className="software-hover-title">Annotation task management</div>
    </div>

    <div className="software-img-box">
        <img src="/image/software-dataannotation3.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataannotation3.png')}/>
      <div className="software-hover-title">Task Overview</div>
    </div>

    <div className="software-img-box">
      <img src="/image/software-dataannotation4.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataannotation4.png')}/>
    <div className="software-hover-title">Image annotation</div>
    </div>

    <div className="software-img-box">
      <img src="/image/software-dataannotation5.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataannotation5.png')}/>    
    <div className="software-hover-title">Text relationship annotation</div>
    </div>
    <div className="software-img-box">
      <img src="/image/software-dataannotation6.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-dataannotation6.png')}/>    
    <div className="software-hover-title">Text entity annotation</div>
    </div>
  </div>
  <div id="lightbox" className="lightbox" onClick={closeLightbox}>
    <img id="lightbox-img" src="" alt="" />
  </div>
   <hr className="software-hr" />

    {/* =================== Video transcoding platform =================== */}
  <div className="software-content">

    <h3 className="software-title">Video transcoding platform</h3>
    <p className="software-desc">
        An intelligent platform designed for comprehensive video data services and management. It integrates GB28181 and SDK-based capabilities to manage video channels, 
        enabling real-time video transcoding, stream retrieval, local recording of GB-compliant channels, and upward cascading to higher-level national standard platforms. 
        The system provides full lifecycle stream management for transcoded media, including monitoring third-party stream pulling, user authorization control, and API-based stream querying. 
        This ensures end-to-end visibility, centralized management, and unified governance of all video streaming activities across the platform.
    </p>
    <p>
      <strong>Key Technologies:</strong>A comprehensive, enterprise-grade framework that provides a modular, layered architecture. <strong>Spring</strong> allows developers to selectively adopt individual components while maintaining architectural stability.
      It offers robust support for dependency injection, transaction management, enterprise integration, and microservices development.
    </p>



  </div>

  {/* =================== image =================== */}
  <div className="software-images-row">

    <div className="software-img-box">
      <img src="/image/software-video1.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-video1.png')} />
      <div className="software-hover-title">video surveillance</div>
    </div>

    <div className="software-img-box">
      <img src="/image/software-video2.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-video2.png')}/>
      <div className="software-hover-title">Video recording</div>
    </div>

    <div className="software-img-box">
        <img src="/image/software-video3.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-video3.png')}/>
      <div className="software-hover-title">orientation of map</div>
    </div>

    <div className="software-img-box">
      <img src="/image/software-video4.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-video4.png')}/>
    <div className="software-hover-title">Surveillance access</div>
    </div>

    <div className="software-img-box">
      <img src="/image/software-video5.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-video5.png')}/>    
    <div className="software-hover-title">Connect to third-party monitoring</div>
    </div>
    <div className="software-img-box">
      <img src="/image/software-video6.png" alt="" className="software-img" onClick={() => openLightbox('/image/software-video6.png')}/>    
    <div className="software-hover-title">Monitoring list</div>
    </div>
  </div>
  <div id="lightbox" className="lightbox" onClick={closeLightbox}>
    <img id="lightbox-img" src="" alt="" />
  </div>
</div>

    );
  }
}
