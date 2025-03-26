import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav.jsx';

const styles = {
    headerStyle: {
      height: '100px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0px 0px 0px 53px',
      width: '100%',
      border: '3px solid black',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, #dae10b 0%, #ff00ff 100%)',
    },
    headingText: {
      fontSize: '50px',
      alignContent: 'center',
      color: 'white',
      fontFamily: 'merriweather',
      paddingBottom: '30px',
    }
  };

export default function Header() {
  return (
    <div style={styles.headerStyle} className="header">
      <h1 style={styles.headingText}>Portfolio</h1>
      <div>
        <Nav />
      </div>
    </div>
  );
}