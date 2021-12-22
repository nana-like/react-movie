import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  const iRunOnlyOnce = () => console.log('I run only once!');
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if (keyword !== '') {
      console.log(`keyword' changes: SEARCH FOR ${keyword}`);
    }
  }, [keyword]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        value={keyword}
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
