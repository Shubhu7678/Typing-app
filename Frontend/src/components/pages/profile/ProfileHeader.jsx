import React from "react";
import styled from "styled-components";

const ProfileHeader = () => {
  return (
    <Wrapper>
      {/* Left Profile */}
      <Profile>
        <Avatar />
        <div>
          <Username>shubham_aswal</Username>
          <Meta>Joined 15 Oct 2024</Meta>
          <Meta>Current streak: 2 days</Meta>

          <LevelRow>
            <Level>92</Level>
            <Progress>
              <Bar style={{ width: "55%" }} />
            </Progress>
            <Xp>2.5k / 4.6k</Xp>
          </LevelRow>
        </div>
      </Profile>

      <Divider />

      {/* Stats */}
      <Stats>
        <Stat>
          <Label>tests started</Label>
          <Value>1222</Value>
        </Stat>

        <Stat>
          <Label>tests completed</Label>
          <Value>1215</Value>
        </Stat>

        <Stat>
          <Label>time typing</Label>
          <Value>13:29:47</Value>
        </Stat>
      </Stats>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #2a2e33;
  border-radius: 14px;
  padding: 20px 24px;
  gap: 24px;
`;

const Profile = styled.div`
  display: flex;
  gap: 16px;
  min-width: 280px;
`;

const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #6b7280;
`;

const Username = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #e5e7eb;
`;

const Meta = styled.div`
  font-size: 12px;
  color: #9ca3af;
`;

const LevelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`;

const Level = styled.div`
  font-size: 14px;
  color: #e5e7eb;
`;

const Progress = styled.div`
  width: 120px;
  height: 6px;
  background: #374151;
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  height: 100%;
  background: #facc15;
`;

const Xp = styled.div`
  font-size: 12px;
  color: #9ca3af;
`;

const Divider = styled.div`
  width: 1px;
  height: 60px;
  background: #374151;
`;

const Stats = styled.div`
  display: flex;
  gap: 48px;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.div`
  font-size: 12px;
  color: #9ca3af;
  text-transform: lowercase;
`;

const Value = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: #e5e7eb;
`;


export default ProfileHeader;
