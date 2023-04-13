import { Link } from 'react-router-dom'
import img1 from './../../image/IconEmail.svg'
import img2 from './../../image/iconTelegram.svg'

const Navbar = () => {
    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="exchange-top-header">
                        <div className="exchange-logo">
                            <h1><a href="#">exchange</a></h1>
                            <div className="exchange-link">
                                <div className="social-links">
                                    <a href="https://exchange@mail.ru"> 
                                        <img src={img1} alt="" /> 
                                        <span> exchange@mail.ru </span>
                                    </a>
                                </div>
                                <div className="social-links">
                                    <a href="https://t.me/+78005553535"> 
                                        <img src={img2} alt="" /> 
                                        <span> +7 800 555 35 35 </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="navbar">
                            <ul>
                                <li><Link to={'/'}>         Главная      </Link></li>
                                <li><Link to={'/Rates'}>    Тарифы       </Link></li>
                                <li><Link to={'/News'}>     Новости      </Link></li>
                                <li><Link to={'/Reviews'}>  Отзывы       </Link></li>
                                <li><Link to={'/Help'}>     Помощь       </Link></li>
                                <li><Link to={'/Login'}>    Войти        </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
