import { C, FONTS } from "../../styles/tokens";
import { useLang } from "../../i18n/useLang";
import { STACK_GROUPS } from "../../data/stack";
import { Ey, H2, Reveal } from "../ui/Primitives";

export default function Stack() {
    const { t } = useLang();

    return (
        <section style={{ padding: "100px 40px", borderBottom: `1px solid ${C.line}`, maxWidth: 1200, margin: "0 auto",  minWidth: "60vw", }}>
            <Reveal><Ey>{t.stackEy}</Ey></Reveal>
            <Reveal><H2>{t.stackTitle}</H2></Reveal>

            <div className="stack-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 32 }}>
                {STACK_GROUPS.map((g, i) => {
                    const Icon = g.icon;
                    return (
                        <Reveal key={g.label} delay={i * 0.06}>
                            <div style={{ border: `1px solid ${C.line}`, padding: 24, background: C.bg2, height: "100%" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                                    <Icon size={18} color={C.amber} strokeWidth={1.6} />
                                    <span style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: "0.22em", color: C.amber }}>{g.label}</span>
                                </div>
                                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                                    {g.items.map((it) => (
                                        <li key={it} style={{ fontFamily: FONTS.serif, fontSize: 18, color: "#C3C3C9", padding: "7px 0", borderBottom: `1px solid ${C.line}` }}>{it}</li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}