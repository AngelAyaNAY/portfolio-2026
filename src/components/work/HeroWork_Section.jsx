import { useEffect, useState } from "react";
import { C, FONTS } from "../../styles/tokens";
import "../../styles/worksStyles/heroWorks_Section.css";
import LOGO_AN from "../../assets/logo/AN_Logo.png";


const SLIDE_MS = 10000; // cada destacado dura 10 s

const MOCK_SLIDES = Array.from({ length: 5 }, (_, i) => ({
    id: `mock-${i + 1}`,
    title: `TÍTULO DEL PROYECTO ${i + 1}`,
    shortTitle: `PROYECTO ${i + 1} TITLE`,
    description:
        "Descripción relativamente larga del proyecto, máximo en tres líneas. Aquí irá el resumen de cada destacado.",
    shortDescription: "DESCRIPCIÓN SIMPLE...",
    video: null, // ej: "/assets/works/videos/welcome.mp4"
    poster: null,
    date: { m: "09", d: "24", y: "2026" },
    tag: "#ArtWeb",
    tech: "Reactjs + Vite",
}));

/* Puente tokens.js → CSS: los valores viven en un solo lugar */
const cssVars = {
    "--hw-accent": C.amber,
    "--hw-text": C.text,
    "--hw-serif": FONTS.serif,
    "--hw-mono": FONTS.mono,
    "--hw-ms": `${SLIDE_MS}ms`,
};

export default function HeroWorks({ slides = MOCK_SLIDES }) {
    const [active, setActive] = useState(0);
    const [reduced] = useState(
        () =>
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    // Avance automático infinito. Se reinicia al hacer clic en un item.
    useEffect(() => {
        if (reduced || slides.length < 2) return;
        const id = setTimeout(
            () => setActive((i) => (i + 1) % slides.length),
            SLIDE_MS
        );
        return () => clearTimeout(id);
    }, [active, slides.length, reduced]);

    const s = slides[active];

    return (
        <section className="hero-works" style={cssVars}>
            {/* ---------- Fondo: video en bucle + capas oscuras ---------- */}
            <div className="hero-works__bg">
                {s.video ? (
                    <video
                        key={s.id}
                        className="hero-works__video"
                        src={s.video}
                        poster={s.poster ?? undefined}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : (
                    <div key={s.id} className="hero-works__fallback" />
                )}
                <div className="hero-works__shade hero-works__shade--left" />
                <div className="hero-works__shade hero-works__shade--bottom" />
            </div>

            {/* ---------- Header interno ---------- */}
            <header className="hero-works__header">
                <div>
                    <h2 className="hero-works__logo">
                        Tr
                        <img src={LOGO_AN} alt="Logo AN" className="hero-works__logo-img" />
                        bajo
                    </h2>
                    <p className="hero-works__tagline">
                        Visualiza los <span className="hero-works__accent">últimos</span> trabajos
                    </p>
                </div>

                {/* TODO: aquí va el navbar que ya usas en Home (HOME / ABOUT / PORTFOLIO / CONTACT) */}

                <div className="hero-works__tagbox">
                    <div className="hero-works__tag-main">{s.tag}</div>
                    <div className="hero-works__tag-sub">{s.tech}</div>
                </div>
            </header>

            {/* ---------- Centro: número, título, descripción, botón ---------- */}
            <div className="hero-works__middle">
                <div key={s.id} className="hero-works__info">
                    <div className="hero-works__rank">
                        <span className="hero-works__rank-number">{active + 1}</span>
                        <span className="hero-works__rank-suffix">°</span>
                    </div>
                    <h3 className="hero-works__title">{s.title}</h3>
                    <p className="hero-works__desc">{s.description}</p>
                    <button className="hero-works__cta" type="button">
                        <span>DESCUBRIR</span>
                        <span aria-hidden>›</span>
                    </button>
                </div>

                {/* Fecha del proyecto */}
                <div className="hero-works__date" aria-label="Fecha del proyecto">
                    <div className="hero-works__date-col">
                        <span className="hero-works__date-month">{s.date.m}</span>
                        <span className="hero-works__date-day">{s.date.d}</span>
                    </div>
                    <div className="hero-works__date-year">
                        {s.date.y.split("").map((n, i) => (
                            <span key={i}>{n}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ---------- Lista inferior de destacados ---------- */}
            <nav className="hero-works__items" aria-label="Proyectos destacados">
                {slides.map((it, i) => {
                    const on = i === active;
                    return (
                        <button
                            key={it.id}
                            type="button"
                            className={`hero-works__item${on ? " is-active" : ""}`}
                            onClick={() => setActive(i)}
                            aria-current={on}
                        >
                            {/* Barra de progreso de los 10 s */}
                            <span className="hero-works__bar">
                                {on && !reduced && (
                                    <span key={`bar-${active}`} className="hero-works__bar-fill" />
                                )}
                            </span>
                            <span className="hero-works__item-num">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="hero-works__item-title">{it.shortTitle}</span>
                            <span className="hero-works__item-desc">{it.shortDescription}</span>
                        </button>
                    );
                })}
            </nav>

            {/* ---------- Flecha: bajar a la siguiente sección ---------- */}
            <button
                className="hero-works__chev"
                type="button"
                aria-label="Ir a la siguiente sección"
                onClick={() =>
                    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
                }
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>
        </section>
    );
}