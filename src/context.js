import React, { useContext, useState } from "react";

const Store = React.createContext();

const getTotalIncome = () => {
  const income = localStorage.getItem("totalIncome");
  if (income) {
    return JSON.parse(income);
  }
  return 0;
};

const getTotalExpenses = () => {
  const expenses = localStorage.getItem("totalExpenses");
  if (expenses) {
    return JSON.parse(expenses);
  }
  return 0;
};

export const StoreProvider = ({ children }) => {
  const [historyList, setHistoryList] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [isShowTitleAlert, setIsShowTitleAlert] = useState(false);
  const [isShowAmountAlert, setIsShowAmountAlert] = useState(false);
  const [totalIncome, setTotalIncome] = useState(getTotalIncome);
  const [totalExpenses, setTotalExpenses] = useState(getTotalExpenses);
  const [balance, setBalance] = useState(totalIncome + totalExpenses);
  return (
    <Store.Provider
      value={{
        balance,
        historyList,
        title,
        amount,
        isShowTitleAlert,
        isShowAmountAlert,
        totalIncome,
        totalExpenses,
        setBalance,
        setHistoryList,
        setTitle,
        setAmount,
        setIsShowTitleAlert,
        setIsShowAmountAlert,
        setTotalIncome,
        setTotalExpenses,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export const useStore = () => {
  return useContext(Store);
};
