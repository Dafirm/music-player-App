import { searchIcon } from "../../assets";
import { Dafirmlogo } from "../../assets";
const Header = props => {
    return(
        <header className = "header flex justify-sb">
            <div className= "logo">
                <img className="Dafirm" src= {Dafirmlogo} alt= "logo"/>
            </div>
            <div>
                <img src={searchIcon} alt = "Search"/>
            </div>
        </header>
    );
}
export default Header;