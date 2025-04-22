import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

interface DownloadButtonProps {
  schedule: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ schedule }) => {
  const { t } = useTranslation();

  const handleDownload = () => {
    // 创建CSV内容
    const csvContent = `data:text/csv;charset=utf-8,\n${schedule}`;

    // 创建下载链接
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "schedule.csv");

    // 触发下载
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button type="primary" icon={<DownloadOutlined />} onClick={handleDownload}>
      {t("button.download")}
    </Button>
  );
};

export default DownloadButton;
