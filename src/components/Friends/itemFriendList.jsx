const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <li className="item"
        style={{
            backgroundColor: '#FFF',
            boxShadow: '0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08)',
            display: "flex",
            alignItems: "center",
            width: 300,
            height: 100,
            paddingLeft: 20
        }}
        >
            {isOnline ? <span className="status"
            style={{
                backgroundColor: '#4ccf2d'
            }}
            ></span> 
            : <span className="status"
            style={{
                backgroundColor: '#ef0909'
            }}
            ></span>}
  <img
  style={{
    marginLeft: 10,
    width: 80,
    height: 80,
    borderRadius: 8
  }}
  className="avatar" src={`${avatar}`} alt="User avatar" width="48" />
  <p className="name"
  style={{
    margin: '0 0 0 10px'
  }}
  >{name}</p>
</li>
    )
};

export {FriendListItem}