import React from "react";
import { Calendar } from "antd";
import type { Dayjs } from "dayjs";

interface CalendarViewProps {
  schedule: string;
}

const CalendarView: React.FC<CalendarViewProps> = ({ schedule }) => {
  const dateCellRender = (value: Dayjs) => {
    // 这里可以根据schedule字符串解析出具体日期的事件
    // 暂时返回空，后续可以添加具体实现
    return null;
  };

  return (
    <div className="calendar-container">
      <h2>时间表</h2>
      <Calendar
        dateCellRender={dateCellRender}
        fullscreen={false}
        style={{ background: "#fff" }}
      />
      <div className="schedule-text">
        <h3>详细安排：</h3>
        <pre>{schedule}</pre>
      </div>
    </div>
  );
};

export default CalendarView;
