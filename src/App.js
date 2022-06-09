import LogoImg from './img/opticalogo.jpg';
import NavBar from './components/NavBar';
function App() {

  const stylesH1 = {
    color: 'blue',
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1 style= {stulesH1}>
          Bienvenidos a mi APP
        </h1>
        <img alt="logo optica" src={ logoImg }/>
        <br/>
        <hr/>
        <p style={ {marginTop: "120px"} }>Hola Hola</p>
      </header>
    </div>
  );
}

export default App;