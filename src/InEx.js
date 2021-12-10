import { useEffect } from "react";
import { useStore } from "./context";

const InEx = () => {
  const { totalIncome, totalExpenses } = useStore();

  useEffect(() => {
    localStorage.setItem("totalIncome", JSON.stringify(totalIncome));
  }, [totalIncome]);

  useEffect(() => {
    localStorage.setItem("totalExpenses", JSON.stringify(totalExpenses));
  }, [totalExpenses]);

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
