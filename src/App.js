import Button from './Button';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={styles.title}>Movie</h1>
      <Button text="Hey!"></Button>
    </div>
  );
}

export default App;
