import LogoImg from './img/opticalogo.jpg';
import NavBar from './components/NavBar/NavBar';
function App() {


  const stylesH1 = {
    color: 'blue',
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1 style={stylesH1}>
        BIenvenidos a mi APP
        </h1>
        <img alt="logo optica" src={LogoImg}/>
        <br/>
        <hr/>
        <p style={{marginTop:"120px"}}>Hola Hola</p>
      </header>
    </div>
  );
}

export default App;