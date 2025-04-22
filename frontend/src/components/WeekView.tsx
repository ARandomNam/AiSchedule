import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { zhCN, enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { StyledCalendarWrapper } from "../styles/WeekView.styles";
import { useTranslation } from "react-i18next";

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

const WeekView: React.FC<WeekViewProps> = ({ schedule }) => {
  const { t, i18n } = useTranslation();

  const messages = {
    week: t("calendar.week"),
    work_week: t("calendar.work_week"),
    day: t("calendar.day"),
    month: t("calendar.month"),
    previous: t("calendar.previous"),
    next: t("calendar.next"),
    today: t("calendar.today"),
    agenda: t("calendar.agenda"),
    date: t("calendar.date"),
    time: t("calendar.time"),
    event: t("calendar.event"),
    allDay: t("calendar.allDay"),
    noEventsInRange: t("calendar.noEventsInRange"),
  };

  const locales = {
    zh: zhCN,
    en: enUS,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }), // 从周一开始
    getDay,
    locales,
  });

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
