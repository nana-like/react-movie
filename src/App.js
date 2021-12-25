import { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const topCoins = ['BTC', 'ETH', 'BNB', 'KLAY'];
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currentUnit, setCurrentUnit] = useState(topCoins[0]);
  const [value, setValue] = useState('');
  const onSelect = (e) => {
    setCurrentUnit(e.target.value);
    setValue('');
  };
  const onChange = (e) => {
    if (!e.target.value.replace(/^[1-9]\d*(\d+)?$/i, '')) {
      setValue(e.target.value);
    }
  };
  const hideDecimal = (number, length) => {
    return Math.floor(number * 10 ** length) / 10 ** length;
  };
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>My Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div className={styles.currentPrice}>
            <h2>Current Price</h2>
            <p></p>
            {topCoins.map((elem, idx) => (
              <p key={idx}>
                <strong>1 {elem} =</strong>
                <span>
                  {hideDecimal(
                    coins.filter((coin) => coin.symbol === elem)[0].quotes.USD
                      .price,
                    3
                  )}
                </span>
                <i>USD</i>
              </p>
            ))}
          </div>
          <div className="convertPrice">
            <h3>Convert Price</h3>
            <select onChange={onSelect}>
              {topCoins.map((elem, idx) => (
                <option key={idx} defaultValue={idx === 0}>
                  {elem}
                </option>
              ))}
            </select>
            <div>
              <input
                type="text"
                value={value}
                placeholder="Enter here..."
                onChange={onChange}
              ></input>
              <span className="unit">USD</span>
            </div>
            <div>
              <input
                type="text"
                disabled
                value={
                  value
                    ? hideDecimal(
                        value /
                          coins.filter((coin) => coin.symbol === currentUnit)[0]
                            .quotes.USD.price,
                        6
                      )
                    : ''
                }
                onChange={onChange}
              ></input>
              <span className="unit">{currentUnit}</span>
            </div>
            <button onClick={() => setValue('')}>Clear</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
