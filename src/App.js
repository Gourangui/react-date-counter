import './index.css';

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(1);

  const date = new Date("1 Março 2021");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <input 
        type='range' 
        min={1}
        max={10} 
        value={step} 
        onChange={(e) => setStep(Number(e.target.value))}>
      </input>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input 
          type='number' 
          value={count} 
          onChange={(e) => setCount(Number(e.target.value))}>
          {count}
        </input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <span>{count === 0 
        ? "Today is" : count > 0 
        ? `${count} days from today is` 
        : `${Math.abs(count)} days from today was `} {date}
      </span>

      {count !== 0 || step !== 1 && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}

export default App;
