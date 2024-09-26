import './App.css';
import CardNav from './componentes/CardNav/CardNav.js';
import NavBar from './componentes/NavBar/NavBar.js';
import Content from './componentes/Content/Content.js';
import ContentNav from './componentes/ContentNav/ContentNav.js';
import Header from './componentes/Header/Header.js';
import User from './componentes/User/User.js';


function App() {
  return (
    <div className="App">
      <NavBar>
        <CardNav/> 
      </NavBar>    
      <Content/>
      <ContentNav/>
      <Header/>
      <User/>
    </div>
  );
}

export default App;
