import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";

import TradeList from "./components/TradeList/TradeList";
import OperationPanel from "./components/OperationPanel/OperationPanel";

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="main-layout__container">
        <Layout>
          <Header className="main-layout__header">Header</Header>
          <Layout>
            <Content className="main-layout__content">
              <TradeList />
            </Content>
            <Sider theme="light" className="main-layout__sider" width={300}>
              <OperationPanel />
            </Sider>
          </Layout>

          {/* <Footer className="main-layout__footer">Footer</Footer>  */}
        </Layout>
      </Layout>
    );
  }
}

export default App;
