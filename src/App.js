import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new Blog';
  const link = 'http://www.google.com';
  return (
    <div className="App">
      <Navbar />
      <h1>{title}</h1>
      <Home/>
    </div>
  );
}

export default App;
