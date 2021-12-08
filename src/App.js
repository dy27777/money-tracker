import { useStore } from "./context";
import InEx from "./InEx";
import History from "./History";
import AddNew from "./AddNew";

function App() {
  const { balance } = useStore();
  return (
    <div className="app">
      <section className="app-header">
        <h1>Money Tracker</h1>
      </section>
      <section className="balance-container">
        <h2 id="balance">YOUR BALANCE</h2>
        <h2>$ {balance}</h2>
      </section>
      <InEx />
      <History />
      <AddNew />
    </div>
  );
}

export default App;
