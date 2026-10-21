import "../../styles/worksStyles/AllWorks_Section.css";
import USAGE_IMGCARD_01 from '../../assets/usage/Image_use_1.png'
import USAGE_TRIBAL_01 from '../../assets/usage/Capa-tatoo.png'
import USAGE_TRIBAL_02 from '../../assets/usage/Capa-tatoo-2.png'
import USAGE_STARMINI_01 from '../../assets/usage/mini-star.png'
import USAGE_STARSPARKS_ALPHA from '../../assets/vids/use_fx/Stars_sparks_3.webm'
import { useState } from "react";

const TAGS = ['Todos', 'Diseño', 'Programación', 'Posters', 'Movil'];
const COLS = 6;
const ROWS = 4;
const TOTAL_CARDS = COLS * ROWS; // 24
const PAGES = [1, 2, 3, 4, 5];

const TEST_COLORS = ['#E46502', '#7a1f1f', '#2b2b6b', '#1f5c4a', '#6b2b5c', '#8a6d1f'];

const SMALL_ITEMS = {
    [TOTAL_CARDS - 3]: { scale: 0.78, fade: 0.85 },
    [TOTAL_CARDS - 2]: { scale: 0.62, fade: 0.45 },
    [TOTAL_CARDS - 1]: { scale: 0.48, fade: 0.2 },
};

const AllWorks_Section = () => {

    const [slectItemTag, setSlectItemTag] = useState('Todos');

    const [selectedCard, setSelectedCard] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="AllWorks__MAIN">
            <div className="video_top">
                <video
                    className="stars-fx"
                    src={USAGE_STARSPARKS_ALPHA}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    disablePictureInPicture
                />
            </div>
            <div className="radial_color_1" />
            <div className="radial_color_2" />
            <div className="radial_color_3" />
            <div className="text-top">
                <h1 className="text-portfolio">PORTAFOLIO</h1>
            </div>
            <div className="text-top-center">
                <h1 className="txt-portfolio">PORTAFOLIO</h1>
                <span className="sub-txt-portfolio">Todo mi trabajo</span>
            </div>
            <div className="container-items">
                <div className="content-all__items">
                    <div className="left-content">
                        <div className="header-items">
                            <div className="left__header">
                                <h3 className="txt-top">Todos los poroyectos</h3>
                                <h2 className="txt-down">Actualmente <span className="focus">(100)</span></h2>
                            </div>
                            <div className="right__header">
                                {/* <span className="count">
                                    <span className="focus">21{' / '}</span>
                                    100
                                </span> */}
                                <div className="tabs-selections">
                                    {TAGS.map((tag, index) => (
                                        <div
                                            key={tag}
                                            className={
                                                'tab-item' +
                                                (index === 0 ? ' __all' : '') +
                                                (index === TAGS.length - 1 ? ' __end' : '') +
                                                (slectItemTag === tag ? ' active_item' : '')
                                            }
                                            onClick={() => setSlectItemTag(tag)}
                                        >
                                            <span>{tag}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                        <div className="items-cards">
                            {Array.from({ length: TOTAL_CARDS }).map((_, i) => {
                                const col = i % COLS;
                                const row = Math.floor(i / COLS);
                                const small = SMALL_ITEMS[i];
                                const hasStar = col < COLS - 1 && row < ROWS - 1;

                                return (
                                    <div
                                        key={i}
                                        className={'card-cell' + (selectedCard === i ? ' selected' : '')}
                                        style={{ '--fade': small ? small.fade : 1 }}
                                        onClick={() => setSelectedCard(i)}
                                    >
                                        <div
                                            className="card-body"
                                            style={{ '--scale': small ? small.scale : 1 }}
                                        >
                                            <div
                                                className="project-card"
                                                style={{ backgroundColor: TEST_COLORS[i % TEST_COLORS.length] }}
                                            />
                                        </div>
                                        {hasStar && (
                                            <img src={USAGE_STARMINI_01} alt="" className="mini-star" draggable="false" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="pagination-container">
                            {PAGES.map((page) => (
                                <button
                                    key={page}
                                    className={'page-item' + (currentPage === page ? ' active_page' : '')}
                                    style={{ '--dist': Math.abs(page - currentPage) }}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {String(page).padStart(2, '0')}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="card-container">
                            <div className="cover-image">
                                <div className="gradient-fade" />
                                <img src={USAGE_IMGCARD_01} alt="" className="image-cover__item" />
                            </div>
                            <div className="details-card">
                                <div className="text-left">
                                    <span className="sub-title">Sub-Titulo del proyecto</span>
                                    <h2 className="title-card">Título del proyecto</h2>
                                    <p className="paragraph-card">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusamus, nisi laborum aperiam deserunt atque libero necessitatibus, quae dolor in omnis porro cumque architecto, deleniti quisquam impedit numquam reiciendis blanditiis?
                                    </p>
                                </div>
                                <div className="items-right__card">
                                    <div className="stats-card">
                                        <div className="item__state"><i className="bi bi-eye-fill" /><span>10000</span></div>
                                        <div className="divider" />
                                        <div className="item__state"><i className="bi bi-heart-fill" /><span>100</span></div>
                                        <div className="divider" />
                                        <div className="item__state"><i className="bi bi-chat-square-dots-fill" /><span>50</span></div>
                                    </div>
                                    <button className="show-project__btn">Ver Proyecto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background__items">
                    <img src={USAGE_TRIBAL_01} alt="" className="back-1__IMG" draggable='false' />
                    <img src={USAGE_TRIBAL_02} alt="" className="back-2__IMG" draggable='false' />
                </div>
            </div>
        </div>
    )
}

export default AllWorks_Section
