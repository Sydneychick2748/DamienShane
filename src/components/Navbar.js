// Navbar.js
import  "./NavBar.css"; 
function Navbar() {
  return (
    <>
     <header>
  <h1 className="logo"><a href="#">DAMIEN SHANE</a></h1>
  <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
  <nav>
    <ul>
      <li><a href="#">BIO</a></li>
      <li><a href="#">MUSIC</a></li>
      <li><a href="#">VIDEOS</a></li>
      <li><a href="#">CONTACT</a></li>
    </ul>
  </nav>
  <label htmlFor="nav-toggle" title="Show navbar" className="nav-toggle-label">
    <span></span>
  </label>
</header>
    </>
  );
}

export default Navbar;




