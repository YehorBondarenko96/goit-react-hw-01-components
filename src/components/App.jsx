import { Profile } from "./Profile/profile";
import user from './Profile/user.json';

import { Statistics } from "./Statistics/statistics";
import dataStats from './Statistics/data.json';



export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#e8e8e8',
        padding: 20
      }}
    >
    <Profile
    username = {user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    /> 

    <Statistics
    title= "Upload stats"
    stats = {dataStats}
    />
    </div>
  );
};