import React from 'react'
import ProfileHeader from '../components/pages/profile/ProfileHeader'
import styled from 'styled-components'
import ProfileStats from '../components/pages/profile/ProfileStats'
import TypingHeatmap from '../components/pages/profile/TypingHeatmap'

const ProfilePage = () => {
    const heatmapData = [
  { date: "2026-01-01", count: 1 },
  { date: "2026-01-02", count: 4 },
  { date: "2026-01-05", count: 7 },
];
  return (
    <ProfileWrapper>
        <div className="profile-container">

        <ProfileHeader/>
        <ProfileStats/>
        <TypingHeatmap data={heatmapData}/>
        </div>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
  height:100%;
  background:#323437;
  .profile-container{
    padding:24px;
  }
`

export default ProfilePage