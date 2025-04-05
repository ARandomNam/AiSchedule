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
