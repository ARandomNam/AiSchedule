import styled from "styled-components";
import { Layout, Card } from "antd";

const { Header, Content, Sider } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;

  // 覆盖 antd 的默认样式
  &.ant-layout-has-sider {
    > .ant-layout {
      height: fit-content;
    }
  }
`;

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  padding: 0 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  height: 64px;
`;

export const StyledMainLayout = styled(Layout)`
  min-height: calc(100vh - 64px);
`;

export const StyledSider = styled(Sider)`
  background: #fff;
  border-right: 1px solid #f0f0f0;

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    padding: 24px;
  }

  // 覆盖 Sider 的默认宽度
  &.ant-layout-sider {
    width: 500px !important;
    max-width: 500px !important;
    min-width: 500px !important;
  }
`;

export const StyledContent = styled(Content)`
  padding: 24px;
  background: #fff;
  height: fit-content;
  min-height: 100%;
`;

export const StyledCard = styled(Card)`
  &.info-card {
    margin-bottom: 24px;
  }

  &.activity-card {
    margin-bottom: 24px;

    .ant-card-body {
      padding: 16px;
    }
  }

  .ant-card-head {
    border-bottom: 1px solid #f0f0f0;
  }
`;
