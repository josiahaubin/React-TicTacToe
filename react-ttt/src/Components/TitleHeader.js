import '../Stylings/TitleHeader.css';
import logo from '../logo.svg';

function TitleHeader() {
    return(
        <div className="Header-titlebox">
            <h1 className="Game-title"><img className='React-img' src={logo} alt="React Logo" />React Tic-Tac-Toe</h1>
            <p>Welcome to React Tic-Tac-Toe! Press play now to get started!</p>
        </div>
    );
}


export default TitleHeader;