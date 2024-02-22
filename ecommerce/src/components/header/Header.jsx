import React, {useContext} from "react";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { DataContext } from "../../context/Dataprovider"

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito

    const tooglemenu = () =>{
        setMenu(!menu)
    }

    return (
        <header>
            <Link to="/" >
                <div>
                    <img src={logo} alt="logo" width="70px"></img>
                </div>
            </Link>
            <ul>
                <li>
                    <Link className="title-inicio" to="/">Inicio</Link>
                </li>
                <li>
                    <Link className="store-icon" to="/producto"><box-icon name="store-alt"></box-icon></Link>
                </li>
                <li>
                    <Link className="title-productos" to="/producto">Productos</Link>
                </li>
            </ul>
            <div className="cart" onClick={tooglemenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
        </header>
    )
}