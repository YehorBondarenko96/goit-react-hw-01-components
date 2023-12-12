import css from '../allStyles.module.css';

const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item, index) => {
        return (
            <tr key={item.id}
            style={{
                backgroundColor:
                index % 2 === 0
                ? '#FFF'
                : '#b2b4b3'
            }}
            >
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
        )
    })}
  </tbody>
</table>
    )
};

export { TransactionHistory}