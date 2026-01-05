import React, { Component } from 'react';
import './index.css';


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
export default class Product extends Component {
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
      <div className="product-section fade-section">

        {/* 左侧图片区域（与 Barista / Trainer 一致） */}
        <div className="product-images">
            <h3 className="product-image-title">Data Aggregation System Workflow </h3>
          <div className="product-img-wrapper">
            <img src="/image/Product5.png" alt="Product Work 3" onClick={() => openLightbox('/image/Product5.png')}/>
            
          </div>
           
           <h3 className="product-image-title">Product function logic diagram </h3>
          <div className="product-img-wrapper">
            <img src="/image/Product2.jpg" alt="Product Work 2" onClick={() => openLightbox('/image/Product2.jpg')}/>
          </div>
          
          <h3 className="product-image-title">Product business flowchart </h3>
          <div className="product-img-wrapper">
            <img src="/image/Product3.png" alt="Product Work 3" onClick={() => openLightbox('/image/Product3.png')}/>
          </div>
          
          <h3 className="product-image-title">Product prototype drawing </h3>
          <div className="product-img-wrapper">
            <img src="/image/Product4.png" alt="Product Work 3" onClick={() => openLightbox('/image/Product4.png')}/>
          </div>
          
          <h3 className="product-image-title">Back-end data management product </h3>
          <div className="product-img-wrapper">
            <img src="/image/Product1.jpg" alt="Product Work 1" onClick={() => openLightbox('/image/Product1.jpg')}/>
          </div>
          
        </div>

            {/* 右侧内容区域 */}
        <div className="product-content">
        <h2><strong>Data / AI Product Manager</strong></h2>
        <h3>Hangzhou Chengyun Technology Co., Ltd.</h3>
        <div className="edu-time"><strong>11/2021 – 12/2024</strong></div>


        {/* ========================================================== */}
        {/* ====================== Project 1 ========================= */}
        {/* ========================================================== */}
        <h3 className="project-title">Data Governance Enhancement · Zhejiang Tobacco</h3>
        <ul>
            <li>Led the full lifecycle of a <strong>0→1 enterprise-level data governance system</strong>, covering requirements discovery, workflow design, and delivery for 10+ departments.</li>
            <li>Analyzed business processes to identify pain points such as <strong>data silos, inconsistent KPI standards, redundant indicators, and metadata fragmentation</strong>.</li>
            <li>Designed an integrated <strong>KPI system</strong> and <strong>data labeling framework</strong> to unify data semantics across business units.</li>
            <li>Built a hierarchical <strong>domain → category → tag</strong> metadata taxonomy to support scalable asset management and automated classification.</li>
            <li>Designed UX flows, prototypes, and dashboards for data quality, asset catalogs, data approval processes, and lineage viewing.</li>
            <li>Collaborated closely with data engineers to align governance rules with ETL pipelines, ensuring accuracy and compliance.</li>
        </ul>

        <hr className="product-hr"/>


        {/* ========================================================== */}
        {/* ====================== Project 2 ========================= */}
        {/* ========================================================== */}
        <h3 className="project-title">AI Visualization Platform · Zhejiang University International Medical College</h3>
        <ul>
            <li>Led product design for an <strong>AI-enhanced multi-terminal visualization system</strong> integrating behavior analysis, environmental monitoring, and safety detection.</li>
            <li>Delivered multiple platforms including <strong>BIM Ops system, PC console, mobile app, WeChat services,</strong> and intelligent middleware.</li>
            <li>Wrote detailed <strong>PRD, UX flows, algorithm integration specs,</strong> and acceptance standards.</li>
            <li>Designed 9+ key modules including IoT monitoring, event centers, dashboard analytics, user/role systems, AI evaluation, and reporting.</li>
            <li>Worked with algorithm engineers on <strong>model input/output formats</strong>, testing workflows, and scenario definition.</li>
            <li>Planned agile sprints, coordinated cross-functional teams, and ensured on-time multi-release delivery.</li>
        </ul>
        <hr className="product-hr"/>


        {/* ========================================================== */}
        {/* ================== Project 3 (Expanded) ================== */}
        {/* ========================================================== */}
        <h3 className="project-title">Big Data Governance Platform · Supergravity Laboratory (Zhejiang University)</h3>
        <ul>
            <li>Designed architecture and product logic for a large-scale <strong>big data governance platform</strong> supporting research, high-performance computing, and large-data workflows.</li>
            <li>Led module design covering <strong>data asset management, metadata center, data quality monitoring, data lineage visualization,</strong> and <strong>multi-tenant access control</strong>.</li>
            <li>Designed standardized <strong>data security and compliance workflows</strong> aligned with national data safety regulations, including risk scoring and access auditing.</li>
            <li>Built a <strong>data standards system</strong> including metadata dictionaries, naming specifications, indicator standards, and classification rules.</li>
            <li>Oversaw ingestion and integration of <strong>200+ data sources</strong>, coordinating pipelines across databases, APIs, IoT devices, and HPC systems.</li>
            <li>Collaborated with engineering teams to complete <strong>500+ data development tasks</strong> within 3 months, designing dashboards for monitoring and scheduling.</li>
            <li>Delivered advanced features including <strong>data watermarking</strong>, <strong>sensitive data detection</strong>, <strong>risk identification modules</strong>, and lineage-based impact analysis.</li>
            <li>Produced <strong>system diagrams, permission matrices, governance processes,</strong> and training materials for long-term operational use.</li>
        </ul>
        <hr className="product-hr"/>


        {/* ========================================================== */}
        {/* ====================== Project 4 ========================= */}
        {/* ========================================================== */}
        <h3 className="project-title">Large Model Intelligence · State Grid Hangzhou</h3>
        <ul>
            <li>Built a complete <strong>enterprise LLM environment</strong> for knowledge Q&A, prompt testing, and dataset management.</li>
            <li>Designed conversational UX, retrieval logic, prompt templates, and evaluation metrics for enterprise knowledge bases.</li>
            <li>Achieved <strong>85%+ accuracy</strong> on internal datasets—surpassing Baidu ERNIE Bot in identical evaluation conditions.</li>
            <li>Created a testing console for <strong>LLM prompt debugging, dataset uploads, result validation,</strong> and performance analytics.</li>
            <li>Defined standards for <strong>security, access governance, hallucination control,</strong> and model output validation.</li>
            <li>Collaborated directly with State Grid stakeholders to refine requirements and align delivery with strict enterprise compliance.</li>
        </ul>
        <hr className="product-hr"/>

           {/* ========================================================== */}
        {/* ====================== Project 5 ========================= */}
        {/* ========================================================== */}
            <h3 className="project-title">City Integrated Management · Guangzhou Data Governance Module</h3>
        <ul>
            <li>
            Led the development of the <strong>data governance module</strong> for Guangzhou’s “6+X” digital framework,
            supporting 11 major urban-management applications (sanitation, gas safety, public services, etc.).
            </li>
            <li>
            Designed <strong>data aggregation pipelines, metadata rules, security workflows,</strong> and business-oriented data standards.
            </li>
            <li>
            Built a unified <strong>KPI system</strong> and governance logic addressing data silos, inconsistent metrics,
            and fragmented metadata.
            </li>
            <li>
            Completed <strong>388 data collection units</strong>, <strong>14 integrated databases</strong>, accumulating
            <strong>279,997,000+ safety monitoring records</strong>.
            </li>
            <li>
            Coordinated stakeholders across multiple government departments and ensured high-quality delivery.
            </li>
        </ul>
        <hr className="product-hr"/>

           {/* ========================================================== */}
        {/* ====================== Project 6 ========================= */}
        {/* ========================================================== */}
            <h3 className="project-title">Jinzhong City Operation Management Service Platform</h3>
        <ul>
            <li>
            Built a <strong>city-county integrated operation platform</strong> based on national smart city standards.
            </li>
            <li>
            Designed the <strong>video resource management subsystem</strong>, delivering 0→1 implementation including
            multi-screen switching, focus-control modules, and video interaction tools.
            </li>
            <li>
            Integrated <strong>5000+ video streams</strong> and connected AI visual-recognition capabilities
            (vehicle detection, scene understanding, behavior monitoring).
            </li>
            <li>
            Delivered <strong>3 major interaction modules</strong> including “Driving Behavior Multi-Screen Display.”
            </li>
            <li>
            Improved municipal operations through unified video management + AI-assisted supervision.
            </li>
        </ul>
        </div>

        

    <div id="lightbox" className="lightbox" onClick={closeLightbox}>
    <img id="lightbox-img" src="" alt="" />
    </div>
      </div>
    );
  }
}
