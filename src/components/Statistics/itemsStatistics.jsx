const ItemsStatistics = ({label, percentage}) => {
   return <li className="item"
   style={{
    width: 100, 
    height: 100,
    backgroundColor: getRandomHexColor(),
    display: "flex",
    gap: 5,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    color: '#FFF'
   }}
   >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
};

export {ItemsStatistics};



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }