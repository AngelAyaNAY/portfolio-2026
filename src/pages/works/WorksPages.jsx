import '../../styles/worksStyles/worksPages.css'
import ICON_IMG from '../../assets/icons/menu_min.png'
import { useState } from 'react';
import HeroWorks from '../../components/work/HeroWork_Section'
import PortfolioWeb_Section from '../../components/work/PortfolioWeb_Section';

const WorksPages = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(prev => !prev);
    };

    return (
        <div className='works-pages__MAIN'>
            <div className={`navbar-works  ${isMenuActive ? 'active_menu__gradient' : ''}`}>
                <div className={`container-menu__BTN ${isMenuActive ? 'active_menu' : ''}`} onClick={toggleMenu}>
                    <img src={ICON_IMG} alt="Menu_icon" />
                </div>
                <nav className={isMenuActive ? '' : 'nav--close'}>
                    <div className="cube__l">
                        <div className="line-l-l__nav" />
                        <div className="line-l-r__nav" />
                    </div>
                    <div className="cube__r">
                        <div className="line-l-l__nav" />
                        <div className="line-l-r__nav" />
                    </div>
                    <div className="round__nav" />
                    <div className="line__nav" />
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/work" className="active__item">Works</a></li>
                        <li><a href="/contact">Codex - Log</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div id="stage__1">
                <HeroWorks />
            </div>
            <div id="stage__2">
                <PortfolioWeb_Section />
            </div>
            <div id="stage__3">

            </div>
        </div>
    )
}

export default WorksPages