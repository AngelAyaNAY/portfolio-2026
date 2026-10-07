export default {
    id: "portfolio2026",
    type: "dev",
    tags: ["Portfolio", "ReactJs", "FullStack", "Diseño"],
    stack: ["React", "Vite", "React Router", "i18n"],
    createdAt: "2026-07-01",
    featured: true,
    links: [{ label: "Sitio", url: "https://angelnay.vercel.app" }],
    video: { src: "/assets/works/videos/portfolio2026.mp4", poster: "/assets/works/portfolio2026/cover.webp" },
    metrics: { views: 9100, likes: 150, comments: 40 },
    images: {
        cover: { id: "p26-cover", name: "Portada", src: "/assets/works/portfolio2026/cover.webp" },
        thumb: { id: "p26-thumb", name: "Miniatura", src: "/assets/works/portfolio2026/thumb.webp" },
        preview: { id: "p26-preview", name: "Vista previa", src: "/assets/works/portfolio2026/preview.webp" },
    },
    details: [
        { id: "d1", images: ["p26-cover"] },
        { id: "d2", images: ["p26-preview"] },
    ],
    text: {
        es: {
            title: "Portafolio 2026",
            subtitle: "Sitio personal darktech",
            description: "Mi portafolio completo: Home, Works, Codex y Contacto, con estética darktech y soporte ES/EN.",
            highlight: ["2026"],
            details: {
                d1: { title: "Arquitectura", body: "Vite + React con router de 4 páginas y datos separados por sección." },
                d2: { title: "Diseño", body: "Paleta ámbar, ácido y violeta sobre negro, con tipografía mono y serif." },
            },
        },
        en: {
            title: "Portfolio 2026",
            subtitle: "Darktech personal site",
            description: "My full portfolio: Home, Works, Codex and Contact, with a darktech look and ES/EN support.",
            highlight: ["2026"],
            details: {
                d1: { title: "Architecture", body: "Vite + React with a 4-page router and data split by section." },
                d2: { title: "Design", body: "Amber, acid and violet palette on black, with mono and serif typography." },
            },
        },
    },
};