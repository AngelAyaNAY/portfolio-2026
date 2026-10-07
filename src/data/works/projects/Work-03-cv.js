export default {
    id: "cv",
    type: "dev",
    tags: ["WebApp", "ReactJs", "FrontEnd"],
    stack: ["React", "Vite", "Tailwind"],
    createdAt: "2026-06-30",
    featured: false,
    links: [{ label: "Demo", url: "https://angelnay.vercel.app" }],
    video: { src: "/assets/works/videos/cv.mp4", poster: "/assets/works/cv/cover.webp" },
    metrics: { views: 5200, likes: 64, comments: 9 },
    images: {
        cover: { id: "cv-cover", name: "Portada", src: "/assets/works/cv/cover.webp" },
        thumb: { id: "cv-thumb", name: "Miniatura", src: "/assets/works/cv/thumb.webp" },
    },
    details: [{ id: "d1", images: ["cv-cover"] }],
    text: {
        es: {
            title: "Currículum Interactivo",
            subtitle: "Hoja de vida web",
            description: "Versión web de mi hoja de vida, con secciones navegables, descarga en PDF y cambio de idioma.",
            highlight: ["Interactivo"],
            details: {
                d1: { title: "Qué resuelve", body: "Un CV que se ve bien en pantalla y también se puede descargar listo para enviar." },
            },
        },
        en: {
            title: "Interactive Résumé",
            subtitle: "Web CV",
            description: "Web version of my résumé, with navigable sections, PDF download and language switch.",
            highlight: ["Interactive"],
            details: {
                d1: { title: "What it solves", body: "A CV that looks great on screen and can also be downloaded ready to send." },
            },
        },
    },
};