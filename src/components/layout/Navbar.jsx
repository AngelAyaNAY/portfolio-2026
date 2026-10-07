import { Link, useLocation } from "react-router-dom";
import { C, FONTS } from "../../styles/tokens";
import { useLang } from "../../i18n/useLang";

export default function Navbar({ clock }) {
    const { lang, toggle, t } = useLang();
    const loc = useLocation();

    return (
        <header className="hero-header" style={{
            position: "relative", zIndex: 5, display: "flex",
            alignItems: "center", justifyContent: "space-between", padding: "24px 40px", flexWrap: "wrap", gap: 14
        }}>

            <Link to="/" style={{ textDecoration: "none", color: C.text, fontFamily: FONTS.black, fontSize: 26 }}>
                Angel<span style={{ color: C.amber }}>Nay.</span>
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: 30, flexWrap: "wrap" }}>
                <nav style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
                    {t.nav.map((n) => {
                        const active = loc.pathname === n.path;
                        return (
                            <Link key={n.label} to={n.path} className="navlink" style={{
                                fontFamily: FONTS.display,
                                fontSize: 12, letterSpacing: "0.14em", fontWeight: 700, textDecoration: "none",
                                color: active ? C.amber : C.text,
                                textShadow: active ? `0 0 8px ${C.amber}80, 0 0 12px ${C.amber}40` : "none"
                            }}>
                                {n.label}
                            </Link>
                        );
                    })}
                </nav>

                <button onClick={toggle} style={{
                    background: "transparent", border: `1px solid ${C.line}`,
                    color: C.text, fontFamily: FONTS.mono, fontSize: 11, letterSpacing: "0.1em",
                    padding: "5px 10px", cursor: "pointer"
                }}>
                    {lang === "es" ? "Es · en" : "En · es"}
                </button>
            </div>
        </header>
    );
}