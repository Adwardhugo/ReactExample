import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import MyHeader from './components/MyHeader';
import Nav from './components/Nav';
import Home from './pages/Home';
import Individual from './pages/Individual';
import Product from './pages/Product';
import Information from './pages/Information';
import Background from './pages/Background';
import Life from './pages/Life';
import IT from './pages/IT';
import Design from './pages/Design';
import UI from './pages/UI';
import Software from './pages/Software';
import Volunteer from './pages/Volunteer';
import Barista from './pages/Barista';
import Trainer from './pages/Trainer';
import './AppTest.css';



const { Sider, Content } = Layout;
export default class AppTest extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout className="layout-container">
          {/* 顶部导航 */}
          <MyHeader />

          {/* 主体部分：左侧导航 + 内容区域 */}
          <Layout className="layout-main">
            {/* 主体部分：左侧导航 */}
            <Sider className="layout-sider">
              <Nav />
            </Sider>
            {/* 主体部分 content区域*/}
            <Content className="layout-content">
              {/* 路由路径*/}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Individual" element={<Individual />} />
                <Route path="/product" element={<Product />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path ="/Information" element={<Information />}></Route>
                <Route path ="/Background" element={<Background />}></Route>
                <Route path ="/Life" element={<Life />}></Route>
                <Route path ="/IT" element={<IT />}></Route>
                <Route path ="/Design" element={<Design />}></Route>
                <Route path ="/UI" element={<UI />}></Route>
                <Route path ="/Software" element={<Software />}></Route>
                <Route path ="/Volunteer" element={<Volunteer />}></Route>
                <Route path ="/Barista" element={<Barista />}></Route>
                <Route path ="/Trainer" element={<Trainer />}></Route>
              </Routes>
            </Content>
          </Layout>

        </Layout>
      </BrowserRouter>
    );
  }
}