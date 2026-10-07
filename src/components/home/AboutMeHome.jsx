import '../../styles/homeStyles/StylesAboutMeHome.css'
import { C, FONTS } from "../../styles/tokens";
import { useLang } from "../../i18n/useLang";
import { Ey, H2, Reveal } from "../ui/Primitives";

const AboutMeHome = () => {
    const { t } = useLang();

    return (
        <section style={{ padding: "100px 40px", borderBottom: `1px solid ${C.line}`, minWidth: "60vw", maxWidth: 1200, margin: "0 auto" }}>
            <Reveal><Ey>{t.aboutEy}</Ey></Reveal>
            <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: 56, alignItems: "start" }}>
                <Reveal>
                    <H2>{t.aboutTitle}</H2>
                    <p style={{ fontFamily: FONTS.serif, fontSize: 21, lineHeight: 1.55, color: "#C3C3C9", maxWidth: 560 }}>
                        {t.about}
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: `1px solid ${C.line}` }}>
                        {t.stats.map((s, i) => (
                            <div key={s.k} style={{
                                padding: "26px 22px",
                                borderRight: i % 2 === 0 ? `1px solid ${C.line}` : "none",
                                borderBottom: i < 2 ? `1px solid ${C.line}` : "none",
                            }}>
                                <div style={{ fontFamily: FONTS.display, fontWeight: 900, fontSize: 38, color: C.text }}>{s.v}</div>
                                <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.22em", color: C.mute, marginTop: 4 }}>{s.k}</div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default AboutMeHome
