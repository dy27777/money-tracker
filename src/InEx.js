import { useStore } from "./context";

const InEx = () => {
  const { totalIncome, totalExpenses } = useStore();
  return (
    <section className="ie-container">
      <div className="income-box">
        <h3>INCOME</h3>
        <p>$ {totalIncome}</p>
      </div>
      <div className="middleline"></div>
      <div className="expenses-box">
        <h3>EXPENSES</h3>
        <p>$ {totalExpenses}</p>
      </div>
    </section>
  );
};

export default InEx;
