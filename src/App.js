import logo from './logo.svg';
import './App.css';
import Row from './Row'
function App() {
  return (
    <div className='container'>
      <h3 className='title'>Tic, Tac, Toe.</h3>
      <div className='game'>
        <Row></Row>
        <Row></Row>
        <Row></Row>
      </div>
    </div>
  );
}

export default App;
