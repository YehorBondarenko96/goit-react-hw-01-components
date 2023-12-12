import { FriendListItem } from "./itemFriendList";
import css from '../allStyles.module.css';

const FriendList = ({friends}) => {
    return <ul className={css.friendList}>
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