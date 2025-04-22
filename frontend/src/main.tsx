import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import enUS from "antd/locale/en_US";
import { useTranslation } from "react-i18next";
import "./i18n";
import "antd/dist/reset.css";

const Root = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language === "en" ? enUS : zhCN;

  return (
    <React.StrictMode>
      <ConfigProvider locale={locale}>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
