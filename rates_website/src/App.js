import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(100);

  const fetchCoins = async (customCount = count) => {
    try {
      setLoading(true);
      const url =
        customCount === "all"
          ? "https://corsproxy.io/?https://cryptorates.ai/v1/coins"
          : `https://corsproxy.io/?https://cryptorates.ai/v1/coins/${customCount}`;
      const response = await axios.get(url);
      setCoins(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [count]);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <div className="App">
      <h1>Top {count === "all" ? "All" : count} Cryptocurrencies</h1>

      <div className="button-group">
        <button className="refresh-btn" onClick={fetchCoins} disabled={loading}>
        {loading ? "Refreshing..." : "Refresh"}
      </button>
        {[100, 500, 1000, "all"].map((val) => (
          <div className="button-wrapper" key={val}>
            <button
              className={`count-btn ${count === val ? "selected" : ""}`}
              onClick={() => handleCountChange(val)}
            >
              {val}
            </button>
          </div>
        ))}
      </div>


      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>24h Change (%)</th>
            <th>7d Change (%)</th>
            <th>Market Cap ($)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            const oldPrice24h = coin.price / (1 + coin.change24h);
            const oldPrice7d = coin.price / (1 + coin.change7d);
            const oldCap24h = coin.marketcap / (1 + coin.change24h);
            const oldCap7d = coin.marketcap / (1 + coin.change7d);

            return (
              <tr key={coin.symbol}>
                <td>{coin.rank}</td>
                <td>{coin.symbol}</td>
                <td>{coin.name}</td>
                <td>{coin.price.toFixed(2)}</td>

                <td className={`tooltip-parent ${coin.change24h >= 0 ? 'pos' : 'neg'}`}>
                  {(coin.change24h * 100).toFixed(2)}%
                  <div className="tooltip-box">
                    ${oldPrice24h.toFixed(2)} → ${coin.price.toFixed(2)}<br />
                    ${oldCap24h.toLocaleString()} → ${coin.marketcap.toLocaleString()}
                  </div>
                </td>

                <td className={`tooltip-parent ${coin.change7d >= 0 ? 'pos' : 'neg'}`}>
                  {(coin.change7d * 100).toFixed(2)}%
                  <div className="tooltip-box">
                    ${oldPrice7d.toFixed(2)} → ${coin.price.toFixed(2)}<br />
                    ${oldCap7d.toLocaleString()} → ${coin.marketcap.toLocaleString()}
                  </div>
                </td>

                <td>{coin.marketcap.toLocaleString()}</td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </div>
  );
}

export default App;

