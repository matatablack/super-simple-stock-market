import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import logo from "./logo.png";
import { Layout, Icon, Tooltip } from "antd";
import TradeList from "./components/TradeList/TradeList";
import OperationPanel from "./components/OperationPanel/OperationPanel";
import MarketInfo from "./components/MarketInfo/MarketInfo";
import PoweredBy from "./components/PoweredBy";

const { Header, Sider, Content } = Layout;

export default () => (
  <Layout className="main-layout__container">
    <Header className="main-layout__header">
      <img
        src={logo}
        alt="gbce logo"
        className="main-layout__logo"
        title="Global Beberage Corporation Exchange"
      />
      <Tooltip placement="left" title="View code on github">
        <a href="https://github.globant.com/mm-rodriguez/super-simple-stock-market" target="_blank">
          <Icon type="github" theme="outlined" className="main-layout__github" />
        </a>
      </Tooltip>
    </Header>
    <Layout>
      <Content className="main-layout__content">
        <MarketInfo />
        <TradeList />
      </Content>
      <Sider theme="light" className="main-layout__sider" width={320}>
        <OperationPanel />
        <PoweredBy />
      </Sider>
    </Layout>
  </Layout>
);
