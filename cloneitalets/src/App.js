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
      <div className="container">
        <header className="header">
          <Header />
          <User />
        </header>
        
        <aside className="side-nav">
          <CardNav />
        </aside>
        
        <nav className="nav-bar">
          <NavBar />
        </nav>
        
        <main className="content">
          <Content />
        </main>

        <aside className="content-nav">
          <ContentNav />
        </aside>

        <div className="forms-section">
          <Forms />
        </div>
      </div>
    </div>
  );
}

export default App;
