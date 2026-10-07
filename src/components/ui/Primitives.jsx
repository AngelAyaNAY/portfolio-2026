import { useState, useEffect, useRef } from "react";
import { C, FONTS } from "../../styles/tokens";

export function Bracket({ pos, color = C.amber }) {
    const m = {
        tl: { top: 18, left: 18, borderTop: "2px solid", borderLeft: "2px solid" },
        tr: { top: 18, right: 18, borderTop: "2px solid", borderRight: "2px solid" },
        bl: { bottom: 18, left: 18, borderBottom: "2px solid", borderLeft: "2px solid" },
        br: { bottom: 18, right: 18, borderBottom: "2px solid", borderRight: "2px solid" },
    };
    return <div style={{ position: "absolute", width: 24, height: 24, borderColor: color, ...m[pos] }} />;
}

export function Ey({ children, color = C.amber }) {
    return (
        <div style={{
            display: "flex", alignItems: "center", gap: 12, fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: "0.26em", color, marginBottom: 18
        }}>
            <span style={{ width: 26, height: 1, background: color }} />
            {children}
        </div>
    );
}

export function H2({ children }) {
    return (
        <h2 style={{
            fontFamily: FONTS.display, fontWeight: 700, fontSize: "clamp(30px,4.5vw,52px)",
            lineHeight: 1.04, margin: "0 0 10px", letterSpacing: "0.01em"
        }}>
            {children}
        </h2>
    );
}

export function Reveal({ children, style, delay = 0 }) {
    const ref = useRef(null);
    const [v, setV] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } },
            { threshold: 0.12 }
        );
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);
    return (
        <div ref={ref} style={{
            ...style, opacity: v ? 1 : 0, transform: v ? "none" : "translateY(26px)",
            transition: `opacity .8s ease ${delay}s, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}s`
        }}>
            {children}
        </div>
    );
}

export function Meter({ label, value, color }) {
    return (
        <div style={{ marginBottom: 12 }}>
            <div style={{
                display: "flex", justifyContent: "space-between", fontFamily: FONTS.mono,
                fontSize: 10, letterSpacing: "0.14em", color: C.mute, marginBottom: 5
            }}>
                <span>{label.toUpperCase()}</span>
                <span style={{ color }}>{value}/10</span>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.06)", position: "relative" }}>
                <div style={{
                    position: "absolute", inset: 0, width: `${value * 10}%`, background: color,
                    boxShadow: `0 0 10px ${color}99`
                }} />
            </div>
        </div>
    );
}