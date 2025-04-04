import React from "react";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";

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
      title: "活动名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "时长（小时）",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "时间段",
      key: "timeRange",
      render: (_, record) =>
        record.timeRange
          ? `${record.timeRange[0]} - ${record.timeRange[1]}`
          : "不指定",
    },
    {
      title: "重复日期",
      key: "days",
      render: (_, record) =>
        record.days.map((day) => convertDayToChinese(day)).join("、"),
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Button type="link" danger onClick={() => onDelete(record.key)}>
          删除
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
