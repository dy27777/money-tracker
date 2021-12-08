import React from "react";
import { useStore } from "./context";

function History() {
  const { historyList } = useStore();
  return (
    <section className="history-container">
      <h2>History</h2>
      <div className="underline"></div>
      {
        // historyList.map()
      }
      <div className="history-box">
        <p>Cash</p>
        <p>+500</p>
      </div>
      <div className="history-box">
        <p>Book</p>
        <p>-40</p>
      </div>
      <div className="history-box">
        <p>Camera</p>
        <p>-200</p>
      </div>
    </section>
  );
}

export default History;
