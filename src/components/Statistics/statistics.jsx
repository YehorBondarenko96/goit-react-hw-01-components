import {ItemsStatistics} from './itemsStatistics';

const Statistics = ({title, stats}) => {
    return <section className="statistics"
style={{
  backgroundColor: '#FFF'
}}
>
  {title && title.length > 0 &&
 <h2 className="title"
  style={{
    fontSize: 24,
    margin: 0,
    height: 100,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  }}
  >{title}</h2>}

  <ul className="stat-list"
  style={{
    fontSize: 20,
    display: 'flex'
  }}
  >
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