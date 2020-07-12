import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './App.css';
import ShopComponent from './components/Shop';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Rental Store</Menu.Item>
          <Menu.Item key="2">Your Order</Menu.Item>
          <Menu.Item key="3">Contact Us</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Router>
            <Switch>
              <Route path="/">
                <ShopComponent />
              </Route>
            </Switch>
          </Router>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Crafted by Yong Lin Wang</Footer>
    </Layout>
  );
}

export default App;
