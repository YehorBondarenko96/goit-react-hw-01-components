import { FriendListItem } from "./itemFriendList";

const FriendList = ({friends}) => {
    return <ul className="friend-list"
    style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    }}
    >
        {friends.map(friend => {
            return (
                <FriendListItem
            key = {friend.id}
            avatar = {friend.avatar}
            name = {friend.name}
            isOnline = {friend.isOnline}
            />
            )
        })}
    </ul>
};

export {FriendList}