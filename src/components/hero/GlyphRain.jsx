import { useRef, useEffect } from "react";

const GLYPHS = "アイウエオカキ✝0123456789/<>{}†✠ANGELNAY".split("");
const TARGET_FPS = 27;
const FRAME_MS = 1000 / TARGET_FPS;

export default function GlyphRain() {
    const ref = useRef(null);

    useEffect(() => {
        const cv = ref.current;
        const ctx = cv.getContext("2d");
        let raf, cols, drops, fs;
        let lastTime = 0;

        const resize = () => {
            cv.width = cv.offsetWidth;
            cv.height = cv.offsetHeight;
            fs = 14;
            cols = Math.floor(cv.width / fs);
            drops = Array.from({ length: cols }, () => Math.random() * -cv.height);
        };
        resize();
        window.addEventListener("resize", resize);

        const draw = (time) => {
            raf = requestAnimationFrame(draw);

            if (document.hidden) return;

            if (time - lastTime < FRAME_MS) return;
            lastTime = time;

            ctx.fillStyle = "rgba(8,8,10,0.10)";
            ctx.fillRect(0, 0, cv.width, cv.height);
            ctx.font = fs + "px ui-monospace, monospace";
            for (let i = 0; i < cols; i++) {
                ctx.fillStyle = Math.random() > 0.985 ? "rgba(226,112,26,0.55)" : "rgba(198,241,53,0.13)";
                ctx.fillText(GLYPHS[(Math.random() * GLYPHS.length) | 0], i * fs, drops[i]);
                drops[i] += fs * (0.45 + Math.random() * 0.4);
                if (drops[i] > cv.height && Math.random() > 0.975) drops[i] = 0;
            }
        };
        raf = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas ref={ref} style={{
            position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6,
            maskImage: "radial-gradient(ellipse 72% 66% at 50% 46%, transparent 16%, #000 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 72% 66% at 50% 46%, transparent 16%, #000 80%)",
        }} />
    );
}