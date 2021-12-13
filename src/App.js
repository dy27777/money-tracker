import { useStore } from "./context";
import InEx from "./InEx";
import History from "./History";
import AddNew from "./AddNew";
import { BiRefresh } from "react-icons/bi";

function App() {
  const {
    balance,
    setBalance,
    setTotalIncome,
    setTotalExpenses,
    setHistoryList,
  } = useStore();

  const refresh = () => {
    setTotalIncome(0);
    setTotalExpenses(0);
    setBalance(0);
    setHistoryList([]);
  };

  return (
    <div className="app">
      <section className="app-header">
        <h1>Money Tracker</h1>
      </section>
      <div className="header">
        <div className="header-left">
          <section className="balance-container">
            <h2 id="balance">YOUR BALANCE</h2>
            <h2>$ {balance}</h2>
          </section>
        </div>
        <div className="header-right">
          <BiRefresh onClick={refresh}></BiRefresh>
        </div>
      </div>
      <InEx />
      <History />
      <AddNew />
    </div>
  );
}

export default App;
