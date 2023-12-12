import { Profile } from "./Profile/profile";
import user from './Profile/user.json';

import { Statistics } from "./Statistics/statistics";
import dataStats from './Statistics/data.json';

import { FriendList } from "./Friends/listFriends";
import friends from './Friends/friends.json';

import { TransactionHistory } from "./TransactionHistory/transactionHistory";
import items from './TransactionHistory/transactions.json';


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
    {user && <Profile
    username = {user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    /> }

    {dataStats && <Statistics
    title= "Upload stats"
    stats = {dataStats}
    />}

    {friends && <FriendList
    friends = {friends}
    />}

    {items && <TransactionHistory
    items={items}
    />}
    </div>
  );
};