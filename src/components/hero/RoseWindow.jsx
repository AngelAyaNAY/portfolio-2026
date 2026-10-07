import { C } from "../../styles/tokens";

const lobes = Array.from({ length: 12 });

export default function RoseWindow() {
    return (
        <svg viewBox="0 0 400 400" style={{
            position: "absolute", width: "min(92vw,600px)", height: "min(92vw,600px)",
            left: "50%", top: "47%", transform: "translate(-50%,-50%)",
            filter: "drop-shadow(0 0 26px rgba(226,112,26,0.22))", pointerEvents: "none",
        }}>
            <defs>
                <radialGradient id="core" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={C.amber} stopOpacity="0.16" />
                    <stop offset="55%" stopColor={C.amberDeep} stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                </radialGradient>
                <path id="lobe" d="M186,116 Q186,70 200,52 Q214,70 214,116 A14,14 0 0 1 186,116 Z"
                    fill="none" stroke={C.amber} strokeOpacity="0.55" strokeWidth="1" />
            </defs>
            <circle cx="200" cy="200" r="150" fill="url(#core)" />

            <g className="spin-slow" style={{ transformOrigin: "200px 200px" }}>
                <circle cx="200" cy="200" r="164" fill="none" stroke={C.acid} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 9" />
                <circle cx="200" cy="200" r="150" fill="none" stroke={C.amber} strokeOpacity="0.45" strokeWidth="1" />
                {lobes.map((_, i) => (
                    <g key={i} transform={`rotate(${i * 30} 200 200)`}>
                        <use href="#lobe" />
                        <circle cx="200" cy="84" r="9" fill="none" stroke={C.acid} strokeOpacity="0.4" strokeWidth="1" />
                    </g>
                ))}
            </g>

            <g className="spin-rev" style={{ transformOrigin: "200px 200px" }}>
                <circle cx="200" cy="200" r="118" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                {lobes.map((_, i) => (
                    <line key={i} x1="200" y1="200"
                        x2={200 + Math.cos((i / 12) * Math.PI * 2) * 118}
                        y2={200 + Math.sin((i / 12) * Math.PI * 2) * 118}
                        stroke={C.amber} strokeOpacity="0.22" strokeWidth="1" />
                ))}
                <circle cx="200" cy="200" r="92" fill="none" stroke={C.amber} strokeOpacity="0.4" strokeWidth="1" />
            </g>

            <circle cx="200" cy="200" r="60" fill="none" stroke={C.amber} strokeOpacity="0.6" strokeWidth="1.5" className="flick" />
            <circle cx="200" cy="200" r="3" fill={C.acid} />
        </svg>
    );
}