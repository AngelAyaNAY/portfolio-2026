export default {
    id: "angelnay",
    type: "dev",
    tags: ["WebArt", "Tipografía", "ReactJs", "Diseño"],
    stack: ["React", "Vite", "CSS", "Framer Motion"],
    createdAt: "2026-08-12",
    featured: true,
    links: [{ label: "Demo", url: "https://angelnay.vercel.app" }],
    video: { src: "/assets/works/videos/angelnay.mp4", poster: "/assets/works/angelnay/cover.webp" },
    metrics: { views: 8400, likes: 210, comments: 32 },
    images: {
        cover: { id: "angelnay-cover", name: "Portada", src: "/assets/works/angelnay/cover.webp" },
        thumb: { id: "angelnay-thumb", name: "Miniatura", src: "/assets/works/angelnay/thumb.webp" },
        preview: { id: "angelnay-preview", name: "Vista previa", src: "/assets/works/angelnay/preview.webp" },
    },
    details: [
        { id: "d1", images: ["angelnay-cover"] },
        { id: "d2", images: ["angelnay-preview"] },
    ],
    text: {
        es: {
            title: "Angel Nay — Hero",
            subtitle: "Identidad tipográfica",
            description: "Hero con tipografía gótica y un anillo de texto giratorio. Arte, código y yo en una sola pantalla.",
            highlight: ["Hero"],
            details: {
                d1: { title: "Tipografía", body: "Letras góticas personalizadas como eje visual de toda la marca." },
                d2: { title: "Animación", body: "Anillo de texto en rotación lenta y brillos sutiles sobre el logotipo." },
            },
        },
        en: {
            title: "Angel Nay — Hero",
            subtitle: "Typographic identity",
            description: "Hero with gothic type and a rotating text ring. Art, code and self on a single screen.",
            highlight: ["Hero"],
            details: {
                d1: { title: "Typography", body: "Custom gothic lettering as the visual backbone of the whole brand." },
                d2: { title: "Animation", body: "Slowly rotating text ring and subtle glows over the logotype." },
            },
        },
    },
};