import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTVWXYZ†✠#%/0123456789".split("");

export function useDecode(text, deps) {
    const [out, setOut] = useState(text);
    useEffect(() => {
        let f = 0;
        const total = 30;
        const id = setInterval(() => {
            f++;
            const p = f / total;
            setOut(
                text.split("").map((ch, i) =>
                    ch === " " ? " " : i / text.length < p ? ch : CHARS[(Math.random() * CHARS.length) | 0]
                ).join("")
            );
            if (f >= total) { setOut(text); clearInterval(id); }
        }, 30);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    return out;
}