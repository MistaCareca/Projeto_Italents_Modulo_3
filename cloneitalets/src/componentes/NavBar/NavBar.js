import './NavBar.css';

const NavBar = ({ children }) => {
    return (
      <nav className="NavBar">
        <img
          src="https://api-organizer.italents.com.br/portal/uploads/customer/5e26eafb-5f93-43da-a3e0-e991e3a439e5/upload/Logo_italents_padrao_horizontal_1685713962770.png"
          alt="Logo"
          className="logo"
        />
        <div className="nav-items">
          {children}
        </div>
      </nav>
    );
  };
  
  export default NavBar;