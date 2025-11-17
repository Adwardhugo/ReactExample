import React, { Component } from 'react'
import './index.css'

export default class Product extends Component {
  render() {
    return (
<div className="container">
    <div className="cards">
        <div className="card">
            <div className="title">Data Product Manager</div>
            <div className="subtitle">Zhejiang Tobacco · 2021.11 – 2024.12</div>
            <ul>
                <li>Designed end-to-end data governance workflows from 0 → 1.</li>
                <li>Created a unified KPI and data labeling system to eliminate fragmented metrics.</li>
                <li>Built a hierarchical domain → category → tag taxonomy for structured data management.</li>
            </ul>
        </div>
        <div className="card">
            <div className="title">AI Product Manager</div>
            <div className="subtitle">International Medical College, Zhejiang University</div>
            <ul>
                <li>Delivered a custom laboratory dashboard integrating AI algorithms.</li>
                <li>Completed multi-platform deployment including BIM Ops, PC/Mobile apps, and middleware.</li>
                <li>Implemented 9+ business modules including IoT, visualization, AI services, and reporting.</li>
            </ul>
        </div>
        <div className="card">
            <div className="title">Data Product Manager</div>
            <div className="subtitle">Supergravity Laboratory, Zhejiang University</div>
            <ul>
                <li>Led product design for modules covering data security, quality, and standards.</li>
                <li>Integrated 200+ data sources and executed 500+ data development tasks in 3 months.</li>
                <li>Delivered features such as data watermarking and security risk detection.</li>
                <li>Created data standards aligned with national specifications.</li>
            </ul>
        </div>
        <div className="card">
            <div className="title">AI Product Manager</div>
            <div className="subtitle">State Grid Hangzhou · Large Model Intelligence</div>
            <ul>
                <li>Completed model environment development and testing within 2 months.</li>
                <li>Achieved 85%+ Q&A accuracy, outperforming Baidu ERNIE Bot in internal tests.</li>
                <li>Recognized by State Grid for efficiency, performance, and delivery quality.</li>
            </ul>
        </div>

    </div>
</div>
    )
  }
}
