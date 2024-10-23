import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="main">main</div>
        <div className="pyramid">
          <ul className="money-list">
            <li className="money-list-item active">
              <span className="money-list-item-number">4</span>
              <span className="money-list-item-amount">$ 400</span>
            </li>
            <li className="money-list-item">
              <span className="money-list-item-number">4</span>
              <span className="money-list-item-amount">$ 400</span>
            </li>
            <li className="money-list-item">
              <span className="money-list-item-number">4</span>
              <span className="money-list-item-amount">$ 400</span>
            </li>
            <li className="money-list-item">
              <span className="money-list-item-number">4</span>
              <span className="money-list-item-amount">$ 400</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
