import React from "react";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTranslation } from "react-i18next";

interface Activity {
  key: string;
  name: string;
  duration: number;
  timeRange?: [string, string];
  days: string[];
}

interface ActivityListProps {
  activities: Activity[];
  onDelete: (key: string) => void;
}

const ActivityList: React.FC<ActivityListProps> = ({
  activities,
  onDelete,
}) => {
  const { t } = useTranslation();
  const convertDayToChinese = (day: string): string => {
    const dayMap: { [key: string]: string } = {
      monday: "周一",
      tuesday: "周二",
      wednesday: "周三",
      thursday: "周四",
      friday: "周五",
      saturday: "周六",
      sunday: "周日",
    };
    return dayMap[day.toLowerCase()] || day;
  };

  const columns: ColumnsType<Activity> = [
    {
      title: t("activity.name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("activity.duration"),
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: t("activity.timeRange"),
      key: "timeRange",
      render: (_, record) =>
        record.timeRange
          ? `${t("activity.between")} ${record.timeRange[0]}-${
              record.timeRange[1]
            } ${t("activity.and")}`
          : t("activity.flexible"),
    },
    {
      title: t("activity.days"),
      key: "days",
      render: (_, record) =>
        `${t("activity.at")} ${record.days
          .map(convertDayToChinese)
          .join("、")} ${t("activity.conduct")}`,
    },
    {
      title: t("activity.delete"),
      key: "action",
      render: (_, record) => (
        <Button type="link" danger onClick={() => onDelete(record.key)}>
          {t("activity.delete")}
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={activities}
      rowKey="key"
      pagination={false}
    />
  );
};

export default ActivityList;
