import { searchIcon } from "../../assets";
import { Dafirmlogo } from "../../assets";
import './style.css';
const Header = (props) => {
    return(
        <header className = "header flex justify-sb">
            <div className= "logo">
                <img className="Dafirm" src= {Dafirmlogo} alt= "W"/>
            </div>
            <div>
                <img src={searchIcon} alt = "Search"/>
            </div>
        </header>
    );
}
export default Header;