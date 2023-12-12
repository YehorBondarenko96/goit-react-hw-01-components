import {ItemsStatistics} from './itemsStatistics';
import css from '../allStyles.module.css';

const Statistics = ({title, stats}) => {
    return <section className={css.statistics}>
  {title && title.length > 0 && <h2 className={css.title}>{title}</h2>}

  <ul className={css.statList}>
    {stats.map(item =>{
      return (
        <ItemsStatistics 
        key = {item.id}
        label = {item.label}
        percentage = {item.percentage}
        />
      )})}
    </ul>
</section>
};

export {Statistics};