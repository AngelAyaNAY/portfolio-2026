import { useState } from "react";
import { C, FONTS } from "../../styles/tokens";
import { useLang } from "../../i18n/useLang";
import { PROJECTS } from "../../data/projects";
import { Ey, H2, Reveal } from "../ui/Primitives";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Work() {
    const { lang, t } = useLang();
    const [filter, setFilter] = useState("all");
    const [active, setActive] = useState(null);

    const list = PROJECTS.filter((p) => filter === "all" || p.type === filter);

    return (
        <section id="work" style={{ padding: "100px 40px", borderBottom: `1px solid ${C.line}`, minWidth: "60vw", maxWidth: 1200, margin: "0 auto" }}>
            <Reveal><Ey>{t.workEy}</Ey></Reveal>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 18, marginBottom: 38 }}>
                <Reveal>
                    <div>
                        <H2>{t.workTitle}</H2>
                        <p style={{ fontFamily: FONTS.mono, fontSize: 12, letterSpacing: "0.1em", color: C.mute, margin: 0 }}>{t.workSub}</p>
                    </div>
                </Reveal>
                <Reveal>
                    <div style={{ display: "flex", gap: 8 }}>
                        {t.filters.map((f) => {
                            const on = filter === f.k;
                            const fc = f.k === "design" ? C.violet : C.amber;
                            return (
                                <button key={f.k} onClick={() => setFilter(f.k)} style={{
                                    fontFamily: FONTS.mono, fontSize: 11, letterSpacing: "0.12em", padding: "9px 14px", cursor: "pointer",
                                    background: on ? fc : "transparent", color: on ? "#0A0A0A" : C.mute,
                                    border: `1px solid ${on ? fc : C.line}`, transition: "all .2s",
                                }}>
                                    {f.l}
                                </button>
                            );
                        })}
                    </div>
                </Reveal>
            </div>

            <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px,1fr))", gap: 16 }}>
                {list.map((p, i) => (
                    <Reveal key={p.id} delay={(i % 3) * 0.08}>
                        <ProjectCard p={p} lang={lang} index={i} onOpen={setActive} />
                    </Reveal>
                ))}
            </div>

            <ProjectModal project={active} onClose={() => setActive(null)} />
        </section>
    );
}