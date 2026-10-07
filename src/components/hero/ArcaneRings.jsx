import { C } from "../../styles/tokens";

const GLYPHS = "アイウエオカキクケコサシスセソ✦☩⟁⌖✧ΔΩΨΦ0123456789ABCDEFG†✠⟠".split("");

// Genera texto de glifos repetidos para un anillo
const glyphText = (n) =>
    Array.from({ length: n }, () => GLYPHS[(Math.random() * GLYPHS.length) | 0]).join("  ");

// Marcas de grado (ticks) alrededor de un radio
function Ticks({ r, count, len, color, op }) {
    return Array.from({ length: count }).map((_, i) => {
        const a = (i / count) * Math.PI * 2;
        const big = i % 5 === 0;
        const l = big ? len * 1.8 : len;
        return (
            <line
                key={i}
                x1={250 + Math.cos(a) * r}
                y1={250 + Math.sin(a) * r}
                x2={250 + Math.cos(a) * (r - l)}
                y2={250 + Math.sin(a) * (r - l)}
                stroke={color}
                strokeOpacity={big ? op * 1.6 : op}
                strokeWidth="1"
            />
        );
    });
}

// Constelación: nodos unidos por líneas sobre un radio
function Constellation({ r, count, color }) {
    const pts = Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2 + Math.random() * 0.15;
        const rr = r + (Math.random() - 0.5) * 22;
        return [250 + Math.cos(a) * rr, 250 + Math.sin(a) * rr];
    });
    return (
        <>
            {pts.map((p, i) => {
                const n = pts[(i + 1) % pts.length];
                return <line key={"l" + i} x1={p[0]} y1={p[1]} x2={n[0]} y2={n[1]} stroke={color} strokeOpacity="0.18" strokeWidth="1" />;
            })}
            {pts.map((p, i) => (
                <circle key={"c" + i} cx={p[0]} cy={p[1]} r={i % 3 === 0 ? 2.4 : 1.4} fill={color} fillOpacity="0.7" />
            ))}
        </>
    );
}

export default function ArcaneRings() {
    return (
        <svg
            viewBox="0 0 500 500"
            style={{
                position: "absolute",
                width: "min(150vh, 1100px)",
                height: "min(150vh, 1100px)",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                pointerEvents: "none",
                opacity: 0.9,
            }}
        >
            <defs>
                <path id="r1path" d="M250,250 m-232,0 a232,232 0 1,1 464,0 a232,232 0 1,1 -464,0" />
                <path id="r2path" d="M250,250 m-188,0 a188,188 0 1,1 376,0 a188,188 0 1,1 -376,0" />
                <path id="r3path" d="M250,250 m-138,0 a138,138 0 1,1 276,0 a138,138 0 1,1 -276,0" />
            </defs>

            {/* ===== Anillo 1 — exterior, lentísimo ===== */}
            <g className="ring-1" style={{ transformOrigin: "250px 250px" }}>
                <circle cx="250" cy="250" r="240" fill="none" stroke={C.amber} strokeOpacity="0.25" strokeWidth="1" />
                <circle cx="250" cy="250" r="224" fill="none" stroke="#D8C9A0" strokeOpacity="0.12" strokeWidth="1" />
                <Ticks r="240" count={120} len={5} color={C.amber} op={0.25} />
                <text fontSize="9" fill="#D8C9A0" fillOpacity="0.35" letterSpacing="3" fontFamily="monospace">
                    <textPath href="#r1path" startOffset="0">{glyphText(70)}</textPath>
                </text>
            </g>

            {/* ===== Anillo 2 ===== */}
            <g className="ring-2" style={{ transformOrigin: "250px 250px" }}>
                <circle cx="250" cy="250" r="196" fill="none" stroke={C.amber} strokeOpacity="0.3" strokeWidth="1" />
                <Constellation r={196} count={26} color="#E8DCC0" />
                <text fontSize="8" fill={C.amber} fillOpacity="0.4" letterSpacing="4" fontFamily="monospace">
                    <textPath href="#r2path" startOffset="0">{glyphText(60)}</textPath>
                </text>
            </g>

            {/* ===== Anillo 3 ===== */}
            <g className="ring-3" style={{ transformOrigin: "250px 250px" }}>
                <circle cx="250" cy="250" r="156" fill="none" stroke="#D8C9A0" strokeOpacity="0.18" strokeWidth="1" />
                <circle cx="250" cy="250" r="146" fill="none" stroke={C.amber} strokeOpacity="0.22" strokeWidth="1" strokeDasharray="1 7" />
                <Ticks r="156" count={72} len={6} color={C.amber} op={0.3} />
                <text fontSize="8" fill="#E8DCC0" fillOpacity="0.45" letterSpacing="3" fontFamily="monospace">
                    <textPath href="#r3path" startOffset="0">{glyphText(48)}</textPath>
                </text>
            </g>

            {/* ===== Anillo 4 ===== */}
            <g className="ring-4" style={{ transformOrigin: "250px 250px" }}>
                <circle cx="250" cy="250" r="116" fill="none" stroke={C.amber} strokeOpacity="0.35" strokeWidth="1" />
                <Constellation r={116} count={18} color="#E8DCC0" />
            </g>

            {/* ===== Anillo 5 — interior, rápido ===== */}
            <g className="ring-5" style={{ transformOrigin: "250px 250px" }}>
                <circle cx="250" cy="250" r="86" fill="none" stroke="#D8C9A0" strokeOpacity="0.2" strokeWidth="1" />
                <Ticks r="86" count={48} len={5} color={C.amber} op={0.4} />
                {Array.from({ length: 12 }).map((_, i) => {
                    const a = (i / 12) * Math.PI * 2;
                    return (
                        <line key={i} x1="250" y1="250"
                            x2={250 + Math.cos(a) * 86} y2={250 + Math.sin(a) * 86}
                            stroke={C.amber} strokeOpacity="0.12" strokeWidth="1" />
                    );
                })}
            </g>

            {/* glow central sutil (estático) */}
            <circle cx="250" cy="250" r="120" fill="url(#glow)" />
            <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={C.amber} stopOpacity="0.10" />
                    <stop offset="70%" stopColor={C.amberDeep} stopOpacity="0.03" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );
}