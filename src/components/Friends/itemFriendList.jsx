import css from '../allStyles.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <li className={css.itemFriends}>
            {isOnline ? <span className={css.status}
            style={{
                backgroundColor: '#4ccf2d'
            }}
            ></span> 
            : <span className={css.status}
            style={{
                backgroundColor: '#ef0909'
            }}
            ></span>}
        <img className={css.avatarFriends} src={`${avatar}`} alt="User avatar" width="48" />
  <p className={css.nameFriends}>{name}</p>
</li>
    )
};

export {FriendListItem}