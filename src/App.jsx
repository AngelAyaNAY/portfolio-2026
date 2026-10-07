import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider, useLang } from "./i18n/useLang";
import { C, FONTS } from "./styles/tokens";
import Hero from "./components/hero/Hero";
import HomePage from "./pages/home/HomePage";
import WorksPages from "./pages/works/WorksPages";

function Stub({ titleKey }) {
  const { t, toggle, lang } = useLang();
  return (
    <div style={{ minHeight: "100vh", padding: 48, fontFamily: FONTS.serif }}>
      <button onClick={toggle}
        style={{
          fontFamily: FONTS.mono, background: "transparent", color: C.text,
          border: `1px solid ${C.line}`, padding: "6px 12px", cursor: "pointer"
        }}>
        {lang === "es" ? "ES · en" : "EN · es"}
      </button>
      <h1 style={{ fontFamily: FONTS.display, fontSize: 64, color: C.text, marginTop: 24 }}>
        {t.heroName}
      </h1>
      <p style={{ color: C.amber, fontFamily: FONTS.mono }}>{t[titleKey]}</p>
      <p style={{ color: "#C3C3C9", fontSize: 20, maxWidth: 540 }}>{t.role}</p>
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<Stub titleKey="status" />} /> */}
           <Route path="/workss" element={<Stub titleKey="workTitle" />} />
           {/*
          <Route path="/art" element={<Stub titleKey="teaserArtT" />} />
          <Route path="/codex" element={<Stub titleKey="teaserLogT" />} />
          <Route path="/contact" element={<Stub titleKey="contactTitle" />} /> */}
          <Route path="/work" element={<WorksPages />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}