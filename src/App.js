
import './App.css';
import Button from 'react-bootstrap/Button'; // Import from react-bootstrap
import Header from './components/Header/Header';
import ItemsList from './components/ItemsList/ItemsList';


function App() {
  return (
    <div className="App">
   <Header></Header>
   <ItemsList></ItemsList>

    </div>
  );
}

export default App;
