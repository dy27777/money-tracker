import React, { useRef } from "react";
import { useStore } from "./context";

function AddNew() {
  const titleInput = useRef();
  const {
    setBalance,
    title,
    setTitle,
    amount,
    setAmount,
    historyList,
    setHistoryList,
    isShowTitleAlert,
    setIsShowTitleAlert,
    isShowAmountAlert,
    setIsShowAmountAlert,
    setTotalIncome,
    setTotalExpenses,
  } = useStore();
  const handleSubmit = (e) => {
    let type;
    e.preventDefault();
    setIsShowAmountAlert(false);
    setIsShowTitleAlert(false);
    if (!title) {
      setIsShowTitleAlert(true);

      return;
    }
    if (!amount) {
      setIsShowAmountAlert(true);
      return;
    }
    if (amount < 0) {
      setTotalExpenses((totalExpenses) => {
        return totalExpenses + Number(amount);
      });
      type = "negative";
    }
    if (amount > 0) {
      setTotalIncome((totalIncome) => {
        return totalIncome + Number(amount);
      });
      type = "positive";
    }
    setBalance((balance) => {
      return balance + Number(amount);
    });
    setHistoryList((historyList) => {
      return [
        ...historyList,
        { title, amount, id: new Date().getTime().toString(), type },
      ];
    });
    setTitle("");
    setAmount("");
    titleInput.current.focus();
  };
  return (
    <section className="add-new-container">
      <h2>Add new transaction</h2>
      <div className="underline"></div>
      <div className="input">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <p className={`alert ${isShowTitleAlert && "alert-show"}`}>
            Please fill in title.
          </p>
          <input
            ref={titleInput}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter title..."
            type="text"
            name="title"
            id="title"
            autoComplete="off"
          />
          <label htmlFor="amount">Amount</label>
          <p className={`alert ${isShowAmountAlert && "alert-show"}`}>
            Please fill in amount.
          </p>
          <input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter amount... (- expenses, e.g. -200)"
            type="number"
            name="amount"
            id="amount"
            autoComplete="off"
          />
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </section>
  );
}

export default AddNew;
