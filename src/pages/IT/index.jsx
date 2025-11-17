import React, { Component } from 'react'
import {Card} from 'antd';
import './index.css'
const {Meta} = Card;
const skillCards = [
  {
    title: "Programming Languages",
    desc: "Java, JavaScript, Python, SQL, Node.js, HTML/CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
  },
  {
    title: "Frontend Development",
    desc: "React.js, Redux, Ant Design, Axios",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    title: "Backend Development",
    desc: "Spring Boot, Express.js, REST API",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
  },
  {
    title: "Cloud & DevOps",
    desc: "Azure Deployment, CI/CD, GitHub Actions, Docker",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
  },
  {
    title: "Databases",
    desc: "MySQL, SQLite, Redis (basic caching)",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    title: "Data Analysis",
    desc: "Python (Pandas, NumPy), SQL Analytics, Power BI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
  },
  {
    title: "Design",
    desc: "UI/UX design, PhotoShop, Figma, Axure",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    title: "Animation",
    desc: "Unreal Engine 4",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg"
  }
];

const cardContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "100px",
  justifyContent: "center",
  padding: "20px",
};

export default class IT extends Component {
  render() {
    return(
          <div style={cardContainer}>
      {skillCards.map((item, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240 }}
          cover={<img draggable={false} alt="example" src={item.img} />}
        >
          <Meta title={item.title} description={item.desc} />
        </Card>
      ))}
    </div>
    )
  }
}
