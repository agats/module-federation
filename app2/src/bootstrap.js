import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';


function App() {
  const [count, setCount] = useState(0);
return (
    <>
        <h1>Hello from second app</h1>
        <Counter
          count={count}
          onIncrement={() => setCount(count + 1)}
          onDecrement={() => setCount(count - 1)}
        />
    </>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
