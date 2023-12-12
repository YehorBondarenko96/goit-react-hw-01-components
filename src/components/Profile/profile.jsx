import css from '../allStyles.module.css';

const Profile = ({username, tag, location, avatar, stats}) => {
  return <div className={css.profile}>
  <div className={css.description}>
    <img
      src={`${avatar}`}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li
    style={{
      borderRadius: '0px 0px 0px 8px'
    }}
    >
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li
    style={{
      borderLeft: 0,
      borderRight: 0
    }}
    >
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li
    style={{
      borderRadius: '0px 0px 8px 0px'
    }}
    >
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
}

export {Profile};