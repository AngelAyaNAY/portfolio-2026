import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import "../../styles/worksStyles/portfolioWeb_Section.css";

import USAGE_IMAGE_01 from '../../assets/usage/Image_use_1.png'
import USAGE_IMAGE_02 from '../../assets/usage/Image_use_2.png'
import USAGE_IMAGE_03 from '../../assets/usage/Image_use_3.jpg'
import USAGE_IMAGE_04 from '../../assets/usage/Image_use_4.jpg'
import USAGE_IMAGE_05 from '../../assets/usage/Image_use_5.jpg'
import USAGE_IMAGE_06 from '../../assets/usage/Image_use_6.jpg'
import USAGE_SELECTED_01 from '../../assets/usage/Selected_item_card.png'

const items_array = [
    { 'id': 1, 'title_proyect': 'Título largo del proyecto Seleccionado', 'sub_title': 'Proyect 1', 'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut ipsam numquam cupiditate illum quam, impedit hic animi adipisci explicabo repudiandae dolores unde consequuntur accusamus molestias! Soluta minus debitis numquam? item 1', 'image_back': USAGE_IMAGE_01, 'tags': ['ReactJs', 'FrontEnd', 'Diseño', 'Photoshop', 'React Router Doom', 'Photoshop CC'], 'link': 'https://link.com' },
    { 'id': 2, 'title_proyect': 'Proyect 2', 'sub_title': 'Proyect 2', 'description': 'descripción larga del item 2', 'image_back': USAGE_IMAGE_02, 'tags': ['ReactJs'], 'link': 'https://link.com' },
    { 'id': 3, 'title_proyect': 'Proyect 3', 'sub_title': 'Proyect 3', 'description': 'descripción larga del item 3', 'image_back': USAGE_IMAGE_03, 'tags': ['ReactJs'], 'link': 'https://link.com' },
    { 'id': 4, 'title_proyect': 'Proyect 4', 'sub_title': 'Proyect 4', 'description': 'descripción larga del item 4', 'image_back': USAGE_IMAGE_04, 'tags': ['ReactJs'], 'link': 'https://link.com' },
    { 'id': 5, 'title_proyect': 'Proyect 5', 'sub_title': 'Proyect 5', 'description': 'descripción larga del item 5', 'image_back': USAGE_IMAGE_05, 'tags': ['ReactJs'], 'link': 'https://link.com' },
]

const FADE_MS = 300;

const PortfolioWeb_Section = () => {

    const [itemSelected, setItemSelected] = useState(items_array[0]);
    const [selectedId, setSelectedId] = useState(items_array[0].id);
    const [isChanging, setIsChanging] = useState(false);

    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);

    const listRef = useRef(null);
    const trackRef = useRef(null);
    const timeoutRef = useRef(null);

    const maxStart = Math.max(0, items_array.length - visibleCount);
    const canPrev = startIndex > 0;
    const canNext = startIndex < maxStart;

    const measure = useCallback(() => {
        const list = listRef.current;
        const track = trackRef.current;
        const card = track?.firstElementChild;
        if (!list || !card) return;

        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        const step = card.offsetWidth + gap;
        const count = Math.max(1, Math.floor((list.clientWidth + gap + 1) / step));
        setVisibleCount(count);
    }, []);

    useLayoutEffect(() => {
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [measure]);

    useEffect(() => {
        setStartIndex((i) => Math.min(i, maxStart));
    }, [maxStart]);

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    const handlePrev = () => canPrev && setStartIndex((i) => i - 1);
    const handleNext = () => canNext && setStartIndex((i) => i + 1);

    const handleSelect = (item) => {
        if (item.id === selectedId) return;

        setSelectedId(item.id);
        setIsChanging(true); // fade-out

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setItemSelected(item);
            setIsChanging(false);
        }, FADE_MS);
    };

    const handleOpenProject = () => {
        if (itemSelected.link) window.open(itemSelected.link, '_blank', 'noopener,noreferrer');
    };

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
                        <div className={`fade-cards ${canPrev ? '' : 'is-hidden'}`} />
                        <button type="button" className={`next-btn ${canPrev ? '' : 'is-disabled'}`} onClick={handlePrev} disabled={!canPrev} aria-label="Anterior">
                            <i className="bi bi-chevron-left" />
                        </button>
                        <button type="button" className={`back-btn ${canNext ? '' : 'is-disabled'}`} onClick={handleNext} disabled={!canNext} aria-label="Siguiente">
                            <i className="bi bi-chevron-right" />
                        </button>
                        <div className="cards-list" ref={listRef}>
                            <div
                                className="cards-track"
                                ref={trackRef}
                                style={{ '--start-index': startIndex }}
                            >
                                {items_array.map((item) => (
                                    <div key={item.id} tabIndex={0} className={`card__item ${item.id === selectedId ? 'is-active' : ''}`}
                                        onClick={() => handleSelect(item)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleSelect(item);
                                            }
                                        }}
                                    >
                                        <div className="front-select">
                                            <span>{item.title_proyect}</span>
                                            <img src={USAGE_SELECTED_01} draggable='false' />
                                        </div>
                                        <div className="back-image">
                                            <img src={item.image_back} alt="imagen-card" draggable='false' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content_itemselect__back">
                <div className="gradient-top" />
                <div className="item_show__left">
                    <div className={`text-content ${isChanging ? 'is-changing' : ''}`}>
                        <span className="sub-extra__title">{itemSelected.sub_title}</span>
                        <h1 className="large-title__item">{itemSelected.title_proyect}</h1>
                        <p className="description-project__item">{itemSelected.description}</p>
                        <div className="tags-container">
                            {itemSelected.tags.map((selectItem, idx) => (
                                <span key={idx} className="tag-project__item">#{selectItem}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="item_show__right">
                    <div className="front-style-container">
                        <button className="show-project__btn" onClick={handleOpenProject}>Ver Proyecto</button>
                        <div className="gradient-0" />
                        <div className="gradient-1" />
                        <div className="gradient-2" />
                    </div>
                    <img
                        src={itemSelected.image_back}
                        alt={itemSelected.sub_title}
                        className={`cover-project__item ${isChanging ? 'is-changing' : ''}`}
                        draggable='false' />
                </div>
            </div>
        </div>
    )
}

export default PortfolioWeb_Section
