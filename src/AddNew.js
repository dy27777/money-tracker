import React from "react";
import { useStore } from "./context";

function AddNew() {
  const {
    title,
    setTitle,
    amount,
    setAmount,
    setHistoryList,
    isShowTitleAlert,
    setIsShowTitleAlert,
    isShowAmountAlert,
    setIsShowAmountAlert,
  } = useStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setIsShowTitleAlert(true);
    }
    if (!amount) {
      setIsShowAmountAlert(true);
      return;
    }

    setHistoryList((historyList) => {
      return [
        ...historyList,
        { title, amount, id: new Date().getTime().toString() },
      ];
    });
    setTitle("");
    setAmount("");
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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter title..."
            type="text"
            name="title"
            id="title"
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
            placeholder="Enter amount... (- expenses, + income)"
            type="text"
            name="amount"
            id="amount"
          />
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </section>
  );
}

export default AddNew;
