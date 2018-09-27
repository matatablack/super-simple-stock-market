import React from "react";
import { Card, Icon, Avatar } from "antd";
const { Meta } = Card;
export default () => {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        fontSize: "1em",
        paddingTop: "10px",
        height: "40px",
        marginTop: ".5em",
        lineHeight: "28px"
      }}
    >
      {/* 
<Icon type="smile" theme="outlined" />
 */}
      <Icon type="thunderbolt" theme="twoTone" /> &nbsp; Powered by &nbsp; <b> Matias Rodriguez </b>{" "}
      &nbsp; <Icon type="thunderbolt" theme="twoTone" /> <br />
    </div>
  );
};

/*  <Card
    style={{ width: 300 }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>, */
