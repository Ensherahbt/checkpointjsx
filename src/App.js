import imj from './imj.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Ensherah</h1>
          <br />
              </div>

          <img src="/imag.jfif" alt="logo" />
          <br />
          <img src={imj} alt="logo" />
          <br />
          
    </div>
  );
}

export default App;
