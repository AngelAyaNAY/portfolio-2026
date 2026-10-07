import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { C, FONTS } from "../../styles/tokens";

export default function ProjectCard({ p, lang, index, onOpen }) {
    const [h, setH] = useState(false);
    const accent = p.type === "design" ? C.violet : C.amber;
    const Icon = p.icon;
    const lat = p.type === "design" ? "ARS" : "OPVS";

    return (
        <button
            onClick={() => onOpen(p)}
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                position: "relative", textAlign: "left", cursor: "pointer",
                width: 380, height: 300,
                background: C.bg2,
                border: `1px solid ${h ? accent : C.line}`,
                padding: "26px 24px 22px",
                transition: "transform .25s, border-color .25s, box-shadow .25s",
                transform: h ? "translateY(-5px)" : "none",
                boxShadow: h ? `0 16px 44px -14px ${accent}66` : "none",
                overflow: "hidden", color: C.text, fontFamily: FONTS.serif,
            }}
        >
            <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: accent, opacity: h ? 1 : 0.35, transition: "opacity .25s" }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
                <div style={{ width: 50, height: 50, border: `1px solid ${h ? accent : C.line}`, display: "flex", alignItems: "center", justifyContent: "center", color: accent, transition: "all .25s", background: h ? accent + "14" : "transparent" }}>
                    <Icon size={22} strokeWidth={1.6} />
                </div>
                <div style={{ textAlign: "right", fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.18em", color: C.mute }}>
                    <div style={{ color: accent }}>● {p.status}</div>
                    <div style={{ marginTop: 5 }}>{p.year}</div>
                </div>
            </div>

            <div style={{ fontFamily: FONTS.mono, fontSize: 9.5, letterSpacing: "0.24em", color: accent, marginBottom: 8 }}>
                {lat} / {String(index + 1).padStart(2, "0")}
            </div>
            <h3 style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: 22, margin: "0 0 8px", lineHeight: 1.1 }}>
                {p.name[lang]}
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.4, color: "#A7A7AE", margin: "0 0 18px", minHeight: 44 }}>
                {p.tagline[lang]}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.stack.slice(0, 4).map((s) => (
                    <span key={s} style={{ fontFamily: FONTS.mono, fontSize: 9.5, letterSpacing: "0.08em", color: C.mute, border: `1px solid ${C.line}`, padding: "3px 7px" }}>
                        {s}
                    </span>
                ))}
            </div>

            <div style={{ position: "absolute", right: 18, bottom: 18, color: accent, opacity: h ? 1 : 0, transform: h ? "none" : "translate(-4px,4px)", transition: "all .25s" }}>
                <ArrowUpRight size={20} />
            </div>
        </button>
    );
}