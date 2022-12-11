import './App.css';
import Navbar from './Navbar';

function App() {
  const title = 'Welcome to the new Blog';
  const link = 'http://www.google.com';
  return (
    <div className="App">
      <Navbar />
      <h1>{title}</h1>
      <a href={link}>Google</a>
      
    </div>
  );
}

export default App;
