import React from "react";
import styled from "styled-components";

const ProfileStats = () => {
  return (
    <StatsWrapper>
      {/* Time based */}
      <StatCard>
        <StatItem>
          <span className="label">15 seconds</span>
          <span className="value">130</span>
          <span className="accuracy">100%</span>
        </StatItem>

        <StatItem>
          <span className="label">30 seconds</span>
          <span className="value">121</span>
          <span className="accuracy">99%</span>
        </StatItem>

        <StatItem>
          <span className="label">60 seconds</span>
          <span className="value">117</span>
          <span className="accuracy">98%</span>
        </StatItem>

        <StatItem>
          <span className="label">120 seconds</span>
          <span className="value">105</span>
          <span className="accuracy">97%</span>
        </StatItem>
      </StatCard>

      {/* Word based */}
      <StatCard>
        <StatItem>
          <span className="label">10 words</span>
          <span className="value">116</span>
          <span className="accuracy">100%</span>
        </StatItem>

        <StatItem>
          <span className="label">25 words</span>
          <span className="value">121</span>
          <span className="accuracy">100%</span>
        </StatItem>

        <StatItem>
          <span className="label">50 words</span>
          <span className="value">117</span>
          <span className="accuracy">98%</span>
        </StatItem>

        <StatItem>
          <span className="label">100 words</span>
          <span className="value">115</span>
          <span className="accuracy">99%</span>
        </StatItem>
      </StatCard>
    </StatsWrapper>
  );
};

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 20px;
`;

const StatCard = styled.div`
  background: #2a2e35;
  border-radius: 14px;
  padding: 18px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  .label {
    font-size: 12px;
    color: #9ca3af;
  }

  .value {
    font-size: 34px;
    font-weight: 600;
    color: #e5e7eb;
  }

  .accuracy {
    font-size: 14px;
    color: #a3a3a3;
  }
`;


export default ProfileStats;
