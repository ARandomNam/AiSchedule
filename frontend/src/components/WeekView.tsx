import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { zhCN } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";

interface WeekViewProps {
  schedule: string;
}

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resource?: any;
}

const StyledCalendarWrapper = styled.div`
  height: fit-content;
  max-height: calc(150vh - 112px);

  .rbc-calendar {
    height: fit-content;
    max-height: calc(150vh - 112px);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
  }

  .rbc-event {
    background-color: #8bc34a;
    border: none;
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 14px;
    line-height: 1.4;
    margin: 2px 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
  }

  .rbc-event:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .rbc-event-label {
    display: none;
  }

  .rbc-header {
    padding: 12px 8px;
    font-weight: 600;
    font-size: 15px;
    color: #333;
    text-transform: none;
    letter-spacing: 0.5px;
    text-align: center;
  }

  .rbc-time-header {
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
  }

  .rbc-timeslot-group {
    min-height: 60px;
    border-bottom: 1px solid #f0f0f0;
  }

  .rbc-time-view {
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    background: #fff;
    height: fit-content;
    max-height: calc(150vh - 112px);
  }

  .rbc-time-content {
    height: fit-content;
    max-height: calc(150vh - 250px);
    min-height: 500px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f0f0f0;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;

      &:hover {
        background: #999;
      }
    }
  }

  .rbc-time-gutter {
    padding: 0 8px;
    font-size: 13px;
    color: #666;
    width: 80px;
  }

  .rbc-time-gutter .rbc-timeslot-group {
    min-height: 60px;
  }

  .rbc-time-slot {
    padding: 4px 8px;
    color: #666;
    font-size: 13px;
  }

  .rbc-day-slot .rbc-time-slot {
    border: none;
  }

  .rbc-today {
    background-color: transparent !important;
  }

  .rbc-current-time-indicator {
    display: none;
  }

  .rbc-time-column {
    border-left: 1px solid #e0e0e0;
  }

  .rbc-time-header-content {
    border-left: none;
  }

  .rbc-time-header-cell {
    min-height: 50px;
  }

  .rbc-allday-cell {
    display: none;
  }

  .rbc-time-view .rbc-header {
    border-bottom: none;
  }

  .rbc-time-content > * + * > * {
    border-left: 1px solid #e0e0e0;
  }

  .rbc-time-header-gutter {
    width: 80px !important;
  }
`;

const messages = {
  week: "周",
  work_week: "工作周",
  day: "日",
  month: "月",
  previous: "上一页",
  next: "下一页",
  today: "今天",
  agenda: "日程",
  date: "日期",
  time: "时间",
  event: "事件",
  allDay: "全天",
  noEventsInRange: "此时间段无事件",
};

const locales = {
  "zh-CN": zhCN,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }), // 从周一开始
  getDay,
  locales,
});

const WeekView: React.FC<WeekViewProps> = ({ schedule }) => {
  const parseSchedule = (scheduleText: string): CalendarEvent[] => {
    const events: CalendarEvent[] = [];
    const lines = scheduleText.split("\n").filter((line) => line.trim());
    const dataLines = lines.slice(1); // 跳过标题行

    // 获取本周一的日期
    const currentDate = startOfWeek(new Date(), { weekStartsOn: 1 });

    for (const line of dataLines) {
      const [timeRange, activity, daysStr] = line
        .split(",")
        .map((item) => item.trim());
      if (!timeRange || !activity || !daysStr) continue;

      const [startTime, endTime] = timeRange.split("-");
      if (!startTime || !endTime) continue;

      const [startHour, startMinute] = startTime.split(":").map(Number);
      const [endHour, endMinute] = endTime.split(":").map(Number);

      // 解析重复的日期
      const days: number[] = [];
      const dayRanges = daysStr.split(",");
      for (const range of dayRanges) {
        if (range.includes("-")) {
          const [start, end] = range.split("-").map(Number);
          for (let day = start; day <= end; day++) {
            // 将1-7（周一到周日）转换为0-6（周日到周六）
            const adjustedDay = day === 7 ? 0 : day; // 修改转换逻辑
            if (!days.includes(adjustedDay)) {
              days.push(adjustedDay);
            }
          }
        } else {
          // 处理单个日期
          const day = parseInt(range);
          // 将1-7（周一到周日）转换为0-6（周日到周六）
          const adjustedDay = day === 7 ? 0 : day; // 修改转换逻辑
          if (!days.includes(adjustedDay)) {
            days.push(adjustedDay);
          }
        }
      }

      // 为每个重复的日期创建事件
      days.forEach((day) => {
        const eventDate = new Date(currentDate);
        // 调整日期计算
        const daysToAdd = day === 0 ? 6 : day - 1;
        eventDate.setDate(currentDate.getDate() + daysToAdd);

        const startDate = new Date(eventDate);
        startDate.setHours(startHour, startMinute, 0);

        const endDate = new Date(eventDate);
        endDate.setHours(endHour, endMinute, 0);

        events.push({
          id: `${activity}-${day}-${startTime}`,
          title: activity,
          start: startDate,
          end: endDate,
        });
      });
    }

    return events;
  };

  const events = parseSchedule(schedule);

  return (
    <StyledCalendarWrapper>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        views={["week"]}
        step={30}
        timeslots={1}
        min={new Date(0, 0, 0, 7, 0, 0)}
        max={new Date(0, 0, 0, 23, 0, 0)}
        defaultDate={startOfWeek(new Date(), { weekStartsOn: 1 })}
        toolbar={false}
        formats={{
          timeGutterFormat: (date: Date) => format(date, "HH:mm"),
          dayFormat: (date: Date) => {
            const day = getDay(date);
            const weekDays = ["一", "二", "三", "四", "五", "六", "日"];
            return weekDays[day === 0 ? 6 : day - 1];
          },
        }}
        messages={messages}
        culture="zh-CN"
      />
    </StyledCalendarWrapper>
  );
};

export default WeekView;
