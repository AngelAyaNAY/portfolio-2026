import { useState, useEffect } from "react";
import "../../styles/heroSection.css";
import { ArrowDown } from "lucide-react";
import { C, FONTS } from "../../styles/tokens";
import { useLang } from "../../i18n/useLang";
import { useDecode } from "./useDecode";
import GlyphRain from "./GlyphRain";
// import RoseWindow from "./RoseWindow";
// import ArcaneRings from "./ArcaneRings";
import { Bracket } from "../ui/Primitives";
import Navbar from "../layout/Navbar";
import logo from "../../assets/logo/LogoPage_White-Orange.png";
import RingsBack_1 from "./RingsBack_1";
import RingsBack_2 from "./RingsBack_2";
import RingsBack_3 from "./RingsBack_3";
import RingsBack_4 from "./RingsBack_4";


export default function Hero() {
    const { lang, t } = useLang();
    const [clock, setClock] = useState("--:--:--");
    const [hover, setHover] = useState(false);
    const name = useDecode(t.heroName, [lang]);

    useEffect(() => {
        const tick = () => setClock(new Date().toLocaleTimeString("en-GB", { hour12: false }));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    const scrollToWork = () =>
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });

    return (
        <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", borderBottom: `1px solid ${C.line}` }}>
            <GlyphRain />
            <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(120% 90% at 50% 0%, rgba(94,46,8,0.30), transparent 55%)"
            }} />
            {/* <RoseWindow /> */}
            {/* <ArcaneRings /> */}
            <div className="rings-back">
                <div className="ring-1"><RingsBack_1 /></div>
                <div className="ring-2"><RingsBack_2 /></div>
                <div className="ring-3"><RingsBack_3 /></div>
                <div className="ring-4"><RingsBack_4 /></div>
            </div>
            {/* <Bracket pos="tl" /><Bracket pos="tr" /><Bracket pos="bl" /><Bracket pos="br" /> */}

            <Navbar clock={clock} />

            {/* rieles laterales */}
            <div className="hero-sides" style={{
                position: "absolute", left: 22, top: "50%",
                transform: "translateY(-50%) rotate(180deg)", writingMode: "vertical-rl", fontFamily: FONTS.mono,
                fontSize: 10.5, letterSpacing: "0.3em", color: C.mute, zIndex: 4
            }}>
                28.06.2026 · BOGOTÁ · COLOMBIA
            </div>
            <div className="hero-sides" style={{
                position: "absolute", right: 22, top: "50%",
                transform: "translateY(-50%)", writingMode: "vertical-rl", fontFamily: FONTS.mono,
                fontSize: 10.5, letterSpacing: "0.3em", color: C.mute, zIndex: 4
            }}>
                SCN_01 / HERO — BUILD#A2F9
            </div>

            {/* centro */}
            <div style={{
                position: "relative", zIndex: 5, minHeight: "72vh", display: "flex",
                flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px"
            }}>

                <div style={{
                    fontFamily: FONTS.mono, fontSize: 11.5, letterSpacing: "0.28em", color: C.amber,
                    marginBottom: 22, display: "flex", gap: 12, alignItems: "center"
                }}>
                    <span style={{ width: 28, height: 1, background: C.amber }} />
                    {t.kicker}
                    <span style={{ width: 28, height: 1, background: C.amber }} />
                </div>

                {/* LOGO: usa la imagen si existe; si no, fallback a texto Cinzel */}
                {logo ? (
                    <div className="minShadow">
                        <img src={logo} className="logo_hero"
                            alt="Angel Nay" style={{ width: "min(60vw, 1100px)" }}
                        />
                    </div>
                ) : (
                    <h1 className="glitch" style={{
                        fontFamily: FONTS.display, fontWeight: 900,
                        fontSize: "clamp(46px,10.5vw,142px)", lineHeight: 0.95, letterSpacing: "0.02em", margin: 0,
                        textShadow: `2px 0 ${C.amber}, -2px 0 rgba(198,241,53,0.45)`
                    }}>
                        {name}
                    </h1>
                )}

                <div style={{ fontFamily: FONTS.mono, fontSize: 12, letterSpacing: "0.5em", color: C.amber, marginTop: 18 }}>
                    {t.motto}
                </div>

                <p style={{
                    maxWidth: 560, margin: "22px 0 0", fontFamily: FONTS.serif, fontSize: 22,
                    fontStyle: "italic", lineHeight: 1.45, color: "#C3C3C9"
                }}>
                    “{t.role}”
                </p>

                <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap", justifyContent: "center" }}>
                    <button onClick={scrollToWork} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                        style={{
                            fontFamily: FONTS.mono, fontSize: 13, letterSpacing: "0.14em", padding: "15px 30px",
                            border: "none", cursor: "pointer", background: hover ? C.acid : C.amber,
                            color: hover ? "#0A0A0A" : "#0A0A0A", transition: "all .18s",
                            clipPath: "polygon(0 0,100% 0,100% 70%,94% 100%,0 100%)"
                        }}>
                        {t.ctaA} →
                    </button>
                    <button style={{
                        fontFamily: FONTS.mono, fontSize: 13, letterSpacing: "0.14em", padding: "15px 30px",
                        background: "transparent", border: `1px solid ${C.line}`, color: C.text, cursor: "pointer"
                    }}>
                        {t.ctaB}
                    </button>
                </div>
            </div>

            {/* barra de estado */}
            <div style={{
                position: "relative", zIndex: 5, display: "flex", justifyContent: "space-between",
                alignItems: "center", padding: "12px 40px", fontFamily: FONTS.mono, fontSize: 11,
                letterSpacing: "0.16em", color: C.mute, borderTop: `1px solid ${C.line}`, marginTop: "4rem",
            }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span className="blink_2" style={{ width: 7, height: 7, borderRadius: "50%", background: C.acid }} />
                    {t.status}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>{t.scroll} <ArrowDown size={12} /></span>
                <span style={{ color: C.amber }}>● {t.avail}</span>
            </div>

            {/* ticker de stack */}
            <div style={{
                position: "relative", zIndex: 5, overflow: "hidden", borderTop: `1px solid ${C.line}`,
                background: C.bg2, fontFamily: FONTS.display, fontWeight: 600, fontSize: 13,
                letterSpacing: "0.22em", padding: "16px 0", color: C.mute
            }}>
                <span className="mk">
                    {Array.from({ length: 2 }).map((_, r) => (
                        <span key={r}>
                            {t.ticker.map((tech, i) => (
                                <span key={i}>
                                    <span style={{ color: tech === "REACTJS" ? C.amber : C.mute }}>{tech}</span>
                                    {"  ·  "}
                                </span>
                            ))}
                        </span>
                    ))}
                </span>
            </div>

            <div className="scan" /><div className="grain" />
        </section>
    );
}