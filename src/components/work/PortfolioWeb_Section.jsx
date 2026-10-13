import "../../styles/worksStyles/portfolioWeb_Section.css";

import USAGE_IMAGE_01 from '../../assets/usage/Image_use_1.png'
import USAGE_IMAGE_02 from '../../assets/usage/Image_use_2.png'
import USAGE_IMAGE_03 from '../../assets/usage/Image_use_3.jpg'
import USAGE_IMAGE_04 from '../../assets/usage/Image_use_4.jpg'
import USAGE_IMAGE_05 from '../../assets/usage/Image_use_5.jpg'
import USAGE_IMAGE_06 from '../../assets/usage/Image_use_6.jpg'
import USAGE_SELECTED_01 from '../../assets/usage/Selected_item_card.png'

const PortfolioWeb_Section = () => {

    const items_array = [
        { 'id': 1, 'title_proyect': 'Proyect 1', 'image_back': USAGE_IMAGE_01 },
        { 'id': 2, 'title_proyect': 'Proyect 2', 'image_back': USAGE_IMAGE_02 },
        { 'id': 3, 'title_proyect': 'Proyect 3', 'image_back': USAGE_IMAGE_03 },
        { 'id': 4, 'title_proyect': 'Proyect 4', 'image_back': USAGE_IMAGE_04 },
        { 'id': 5, 'title_proyect': 'Proyect 5', 'image_back': USAGE_IMAGE_05 },
    ]

    return (
        <div className="portf__MAIN">
            <div className="text-top">
                <h1 className="text-portfolio">PORTAFOLIO</h1>
            </div>
            <div className="container__portfolio">
                <div className="content-items">
                    <div className="header-contet">
                        <h2 className="portfolio-sub-txt">PORTAFOLIO</h2>
                        <span className="portfolio-sign-txt">Web</span>
                    </div>
                    <div className="cards-container">
                        <button className="next-btn"><i class="bi bi-chevron-left"></i></button>
                        <button className="back-btn"><i class="bi bi-chevron-right"></i></button>
                        <div className="cards-list">
                            {items_array.map((item) => (
                                <div tabIndex={item.id} className="card__item">
                                    <div className="front-select">
                                        <span>{item.title_proyect}</span>
                                        <img src={USAGE_SELECTED_01} />
                                    </div>
                                    <div className="back-image">
                                        <img src={item.image_back} alt="imagen-card" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PortfolioWeb_Section
