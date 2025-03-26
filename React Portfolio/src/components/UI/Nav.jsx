import { Link, useLocation } from 'react-router-dom';

const styles = {
  navBar: {
    background: 'bg-primary',
    fontSize: '25px',
    alignContent: 'center',
    paddingRight: '35px',
    paddingTop: '22px',
    position: 'relative',
    zIndex: '1000',
  },

  navText: {
    color: 'black',
    fontWeight: 'bold',
    margin: '0 10px',
  },
};

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={styles.navBar}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={styles.navText}>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={currentPage === '/' ? 'nav-link active bg-primary-subtle' : 'nav-link'}
                style={styles.navText}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className={currentPage === '/Portfolio' ? 'nav-link active bg-primary-subtle' : 'nav-link'}
                style={styles.navText}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={currentPage === '/Contact' ? 'nav-link active bg-primary-subtle' : 'nav-link'}
                style={styles.navText}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resume"
                className={currentPage === '/Resume' ? 'nav-link active bg-primary-subtle' : 'nav-link'}
                style={styles.navText}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;