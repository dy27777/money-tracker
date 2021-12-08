import React, { useContext, useState } from "react";

const Store = React.createContext();

export const StoreProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [historyList, setHistoryList] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [isShowTitleAlert, setIsShowTitleAlert] = useState(false);
  const [isShowAmountAlert, setIsShowAmountAlert] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
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
