import css from '../allStyles.module.css';

const ItemsStatistics = ({label, percentage}) => {
   return <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
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