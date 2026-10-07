export default {
    // ---------- ESTRUCTURA (se escribe una sola vez) ----------
    id: "welcome",
    type: "dev",                       // dev | design | art
    tags: ["WebArt", "ReactJs", "FrontEnd", "Diseño"],
    stack: ["React", "Vite", "GSAP", "Tailwind"],
    createdAt: "2026-09-24",
    featured: true,
    links: [{ label: "Demo", url: "https://angelnay.vercel.app" }],
    video: { src: "/assets/works/videos/welcome.mp4", poster: "/assets/works/welcome/cover.webp" },
    metrics: { views: 10000, likes: 100, comments: 50 },
    images: {
        cover: { id: "welcome-cover", name: "Portada", src: "/assets/works/welcome/cover.webp" },
        thumb: { id: "welcome-thumb", name: "Miniatura", src: "/assets/works/welcome/thumb.webp" },
        preview: { id: "welcome-preview", name: "Vista previa", src: "/assets/works/welcome/preview.webp" },
        mobile: { id: "welcome-mobile", name: "Móvil", src: "/assets/works/welcome/mobile.webp" },
    },
    details: [
        { id: "d1", images: ["welcome-cover", "welcome-preview"] },
        { id: "d2", images: ["welcome-mobile"] },
    ],

    // ---------- TEXTOS (agrupados por idioma) ----------
    text: {
        es: {
            title: "Portfolio Welcome",
            subtitle: "Landing de bienvenida",
            description: "Landing interactiva con atmósfera roja y partículas, pensada como la puerta de entrada al portafolio.",
            highlight: ["Welcome"],
            details: {
                d1: { title: "Concepto", body: "Una entrada cinematográfica que mezcla ilustración digital con animación web." },
                d2: { title: "Responsive", body: "Se adapta a móvil recortando la composición sin perder el foco central." },
            },
        },
        en: {
            title: "Portfolio Welcome",
            subtitle: "Welcome landing",
            description: "Interactive landing with a red atmosphere and particles, designed as the portfolio's front door.",
            highlight: ["Welcome"],
            details: {
                d1: { title: "Concept", body: "A cinematic entrance blending digital illustration with web animation." },
                d2: { title: "Responsive", body: "Adapts to mobile by cropping the composition while keeping the central focus." },
            },
        },
    },
};