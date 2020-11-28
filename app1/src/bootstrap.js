import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = React.lazy(() => import('app2/Counter'));
const ContactForm = React.lazy(() => import('app3/ContactForm'));

const submitLead = (e) => {
  e.preventDefault();
  console.log('app1 submit!');
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello from React component</h1>
      <React.Suspense fallback='Loading Counter...'>
        <Counter
          count={count}
          onIncrement={() => setCount(count + 1)}
          onDecrement={() => setCount(count - 1)}
        />
      </React.Suspense>
      <React.Suspense fallback='Loading ContactForm...'>
        <ContactForm onSubmit={submitLead} />
      </React.Suspense>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
