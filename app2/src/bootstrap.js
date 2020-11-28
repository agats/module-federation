import React from 'react';
import ReactDOM from 'react-dom';

const ContactForm = React.lazy(() => import('app3/ContactForm'));

const submitContact = (e) => {
  e.preventDefault();
  console.log('app2 submit!');
}

function App() {
  return (
    <>
      <h1>Hello from second app</h1>
      <React.Suspense fallback="Loading ContactForm...">
        <ContactForm onSubmit={submitContact} />
      </React.Suspense>
    </>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
