import styled from "styled-components";

export const StyledCalendarWrapper = styled.div`
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
    border-radius: 8px;
    padding: 3px 6px;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    max-width: 98%;
    opacity: 0.9;
    color: #fff;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    left: 0;
  }

  /* 为不同事件添加不同颜色 */
  .rbc-event:nth-of-type(3n + 1) {
    background-color: #42a5f5;
    border-left: 3px solid #1976d2;
  }

  .rbc-event:nth-of-type(3n + 2) {
    background-color: #ec407a;
    border-left: 3px solid #c2185b;
  }

  .rbc-event:nth-of-type(3n + 3) {
    background-color: #8bc34a;
    border-left: 3px solid #689f38;
  }

  /* 为长时间事件添加渐变效果 */
  .rbc-event[style*="height: 5"] {
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.05)
    );
  }

  .rbc-event:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    opacity: 1;
    z-index: 10;
    border-radius: 10px;
  }

  /* 添加事件图标指示器 */
  .rbc-event::before {
    content: "";
    position: absolute;
    top: 8px;
    right: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
  }

  /* 为重要事件添加边框高亮效果 */
  .rbc-event:nth-of-type(5n) {
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
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
    min-height: 40px;
    height: 40px;
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
    overflow-y: auto;

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
    min-height: 40px;
  }

  .rbc-time-slot {
    padding: 4px 8px;
    color: #666;
    font-size: 13px;
  }

  .rbc-day-slot .rbc-time-slot {
    border: none;
  }

  .rbc-day-slot .rbc-events-container {
    margin-right: 0;
    margin-left: 0;
  }

  .rbc-time-slot {
    height: 40px;
    box-sizing: border-box;
  }

  .rbc-day-slot .rbc-event {
    position: absolute;
    width: calc(100% - 10px);
    left: 5px;
    right: 5px;
    box-sizing: border-box;
  }

  .rbc-day-slot .rbc-event-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .rbc-time-view .rbc-row {
    min-height: 40px;
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
    min-height: 40px;
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
