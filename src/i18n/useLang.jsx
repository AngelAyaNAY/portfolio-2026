import { createContext, useContext, useState } from "react";
import { es } from "./es";
import { en } from "./en";

const LangCtx = createContext();
const LANGS = { es, en };

export function LangProvider({ children }) {
    const [lang, setLang] = useState("es");
    const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));
    return (
        <LangCtx.Provider value={{ lang, setLang, toggle, t: LANGS[lang] }}>
            {children}
        </LangCtx.Provider>
    );
}

export function useLang() {
    return useContext(LangCtx);
}