import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import styled from "styled-components";

const TypingHeatmap = ({ data=[] }) => {
  return (
    <HeatmapWrapper>
      <div className="top">
        <select>
          <option>last 12 months</option>
        </select>
        <span>860 tests</span>
      </div>

      <CalendarHeatmap
        startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
        endDate={new Date()}
        values={data}
        classForValue={(value) => {
          if (!value || value.count === 0) return "color-empty";
          if (value.count < 3) return "color-low";
          if (value.count < 6) return "color-medium";
          return "color-high";
        }}
        showWeekdayLabels
      />

      <div className="legend">
        <span>less</span>
        <div className="box low" />
        <div className="box medium" />
        <div className="box high" />
        <span>more</span>
      </div>
    </HeatmapWrapper>
  );
};

const HeatmapWrapper = styled.div`
  background: #2a2e35;
  border-radius: 14px;
  padding: 16px;
  margin-top: 20px;

  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    color: #9ca3af;
  }

  .legend {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
    color: #9ca3af;
    font-size: 12px;

    .box {
      width: 12px;
      height: 12px;
      border-radius: 3px;
    }

    .low {
      background: #4b4b18;
    }
    .medium {
      background: #a58f1f;
    }
    .high {
      background: #facc15;
    }
  }

  /* Override heatmap colors */
  .color-empty {
    fill: #1f2933;
  }
  .color-low {
    fill: #4b4b18;
  }
  .color-medium {
    fill: #a58f1f;
  }
  .color-high {
    fill: #facc15;
  }
`;


export default TypingHeatmap;
