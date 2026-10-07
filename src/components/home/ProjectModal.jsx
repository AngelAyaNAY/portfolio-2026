import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { C, FONTS } from "../../styles/tokens";
import { useLang } from "../../i18n/useLang";
import { Bracket, Meter } from "../ui/Primitives";

const ProjectModal = ({ project: p, onClose }) => {
    const { lang, t } = useLang();
    
    useEffect(() => {
        if (!p) return;
        const k = (e) => e.key === "Escape" && onClose();
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", k);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", k);
        };
    }, [p, onClose]);

    if (!p) return null;

    const accent = p.type === "design" ? C.violet : C.amber;
    const Icon = p.icon;

    return (
        <div onClick={onClose} style={{
            position: "fixed", inset: 0, zIndex: 60, background: "rgba(4,4,6,0.82)",
            backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: 22,
        }}>
            <div className="modal-pop" onClick={(e) => e.stopPropagation()} style={{
                position: "relative", width: "min(900px,100%)", maxHeight: "88vh", overflowY: "auto",
                background: C.bg, border: `1px solid ${accent}`, boxShadow: `0 30px 80px -20px ${accent}55`,
            }}>
                <Bracket pos="tl" color={accent} /><Bracket pos="tr" color={accent} />
                <Bracket pos="bl" color={accent} /><Bracket pos="br" color={accent} />

                {/* header */}
                <div style={{
                    position: "relative", height: 168,
                    background: `radial-gradient(120% 160% at 12% 0%, ${accent}26, transparent 60%), ${C.bg2}`,
                    borderBottom: `1px solid ${C.line}`, overflow: "hidden", display: "flex",
                    alignItems: "center", padding: "0 34px",
                }}>
                    <div style={{ position: "absolute", right: -10, top: -20, opacity: 0.10, color: accent }}>
                        <Icon size={210} strokeWidth={0.7} />
                    </div>
                    <div style={{ position: "absolute", top: 14, left: 34, fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.2em", color: C.mute }}>
                        {t.preview} · {p.type === "design" ? "ARS" : "OPVS"}_{p.id.toUpperCase()}
                    </div>
                    <div style={{ position: "relative" }}>
                        <div style={{ fontFamily: FONTS.mono, fontSize: 10.5, letterSpacing: "0.2em", color: accent, marginBottom: 8 }}>
                            ● {p.status} · {p.year}
                        </div>
                        <h3 style={{ fontFamily: FONTS.display, fontWeight: 900, fontSize: "clamp(30px,5vw,46px)", margin: 0, lineHeight: 1 }}>
                            {p.name[lang]}
                        </h3>
                    </div>
                </div>

                <button onClick={onClose} aria-label="Close" style={{
                    position: "absolute", top: 14, right: 14, zIndex: 2, width: 38, height: 38, background: C.bg,
                    border: `1px solid ${C.line}`, color: C.text, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                    <X size={18} />
                </button>

                {/* body */}
                <div className="modal-body" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr)", gap: 34, padding: 34 }}>
                    <div>
                        <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.2em", color: C.mute, marginBottom: 6 }}>{t.roleLabel.toUpperCase()}</div>
                        <div style={{ fontFamily: FONTS.serif, fontSize: 18, color: accent, marginBottom: 24 }}>{p.role[lang]}</div>
                        <p style={{ fontFamily: FONTS.serif, fontSize: 19, lineHeight: 1.6, color: "#CACAD0", margin: "0 0 26px" }}>{p.desc[lang]}</p>
                        <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.2em", color: C.mute, marginBottom: 12 }}>{t.high.toUpperCase()}</div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {p.high[lang].map((h) => (
                                <li key={h} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10, fontFamily: FONTS.serif, fontSize: 17, color: "#BFBFC6" }}>
                                    <span style={{ color: accent, marginTop: 4, fontFamily: FONTS.mono, fontSize: 11 }}>†</span>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div style={{ border: `1px solid ${C.line}`, padding: 20, marginBottom: 20 }}>
                            <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.2em", color: accent, marginBottom: 16 }}>{t.attrs.toUpperCase()}</div>
                            {Object.entries(p.stats).map(([k, v]) => (
                                <Meter key={k} label={k} value={v} color={accent} />
                            ))}
                        </div>

                        <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.2em", color: C.mute, marginBottom: 12 }}>{t.tech.toUpperCase()}</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                            {p.stack.map((s) => (
                                <span key={s} style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.06em", color: C.text, border: `1px solid ${C.line}`, padding: "5px 9px" }}>{s}</span>
                            ))}
                        </div>

                        <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.2em", color: C.mute, marginBottom: 12 }}>{t.links.toUpperCase()}</div>
                        {p.priv ? (
                            <div style={{ fontFamily: FONTS.mono, fontSize: 12, color: C.mute, border: `1px dashed ${C.line}`, padding: "10px 12px" }}>{t.priv}</div>
                        ) : p.links.length ? (
                            p.links.map((l) => {
                                const LI = l.icon || ExternalLink;
                                return (
                                    <a key={l.url} href={l.url} target="_blank" rel="noreferrer" style={{
                                        display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none",
                                        color: C.text, border: `1px solid ${C.line}`, padding: "11px 13px",
                                        fontFamily: FONTS.mono, fontSize: 12, letterSpacing: "0.08em", marginBottom: 8,
                                    }}>
                                        <span>{l.label}</span>
                                        <LI size={15} color={accent} />
                                    </a>
                                );
                            })
                        ) : (
                            <div style={{ fontFamily: FONTS.mono, fontSize: 12, color: C.mute }}>—</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal
