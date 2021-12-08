import React from "react";
import { useStore } from "./context";

function History() {
  const { historyList } = useStore();

  return (
    <>
      <div className="history-header">
        <h2>History</h2>
        <div className="underline"></div>
      </div>
      <section
        className={`history-container ${
          historyList.length < 1 && "history-container-clear"
        }`}
      >
        {historyList.map((value) => {
          const { title, amount, id, type } = value;
          return (
            <div
              key={id}
              className={`history-box ${
                type === "negative" && "history-box-red"
              }`}
            >
              <p>{title}</p>
              <p>{amount}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default History;
