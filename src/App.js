import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setTodos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setTodos((currentTodos) => [toDo, ...currentTodos]);
    setToDo('');
    // 왜 이벤트 내부에서 콘솔을 찍으면 이전 state까지만 표시되는지 궁금
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your to do..."
          value={toDo}
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
