const Profile = ({username, tag, location, avatar, stats}) => {
  return <div className="profile"
  style={{
    backgroundColor: '#FFF',
    boxShadow: '0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08)',
    borderRadius: 8
  }}
  >
  <div className="description"
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
  }}
  >
    <img
    style={{
      borderRadius: '50%',
      width: 150,
      height: 150,
      marginTop: 50
    }}
      src={`${avatar}`}
      alt="User avatar"
      className="avatar"
    />
    <p className="name"
    style={{
      marginTop: 30,
      fontWeight: 700
    }}
    >{username}</p>
    <p className="tag second-text">@{tag}</p>
    <p className="location second-text"
    style={{
      marginBottom: 30
    }}
    >{location}</p>
  </div>

  <ul className="stats"
  style={{
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    backgroundColor: '#f0f0f0',
    borderRadius: '0px 0px 8px 8px'
  }}
  >
    <li
    style={{
      borderRadius: '0px 0px 0px 8px'
    }}
    >
      <span className="label second-text">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li
    style={{
      borderLeft: 0,
      borderRight: 0
    }}
    >
      <span className="label second-text">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li
    style={{
      borderRadius: '0px 0px 8px 0px'
    }}
    >
      <span className="label second-text">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
}

export {Profile};