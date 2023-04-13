import { Link } from 'react-router-dom'
import footer1 from './../../image/footer1.svg'
import footer2 from './../../image/footer2.svg'
import footer3 from './../../image/footer3.svg'
import footer4 from './../../image/footer4.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <h2>Партнеры</h2>
                    <div className="exchange-footer-content">
                        <div className="exchange-footer-partners">
                            <div className="footer-partners-header">
                                <div className="footer-partners-header-title">BestExchange</div>
                                <div className="footer-partners-header-img"> <img src={footer1} alt="" /> </div> 
                            </div>
                            <p>Ссылки</p>
                            <ul>
                                <li><Link to={'/'}>         Главная      </Link></li>
                                <li><Link to={'/Rates'}>    Тарифы       </Link></li>
                                <li><Link to={'/News'}>     Новости      </Link></li>
                                <li><Link to={'/Reviews'}>  Отзывы       </Link></li>
                                <li><Link to={'/Help'}>     Помощь       </Link></li>
                            </ul>
                        </div>
                        <div className="exchange-footer-partners">
                            <div className="footer-partners-header">
                                <div className="footer-partners-header-title">Qiwi</div>
                                <div className="footer-partners-header-img"> <img src={footer2} alt="" /> </div> 
                            </div>
                            <p>Ссылки партнеров</p>
                            <a href="#">Яндекс.Деньги</a>
                            <a href="#">BestExchange</a>
                            <a href="#">Qiwi</a>
                        </div>
                        <div className="exchange-footer-partners">
                            <div className="footer-partners-header">
                                <div className="footer-partners-header-title">Яндекс Деньги</div>
                                <div className="footer-partners-header-img"> <img src={footer3} alt="" /> </div> 
                            </div>
                            <p>Аккаунт</p>
                            <button type="button"> Войти → </button>
                        </div>
                        <div className="exchange-footer-partners _partners">
                            <div className="footer-partners-header">
                                <div className="footer-partners-header-title">BestExchange</div>
                                <div className="footer-partners-header-img"> 
                                    <img src={footer4} alt="" /> 
                                </div> 
                            </div>
                            <p> Контакты </p>
                            <span>+7 800 555 35 35 </span>
                            <span>exchange@mail.ru</span>
                            <h3> © All rights reserved</h3>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
