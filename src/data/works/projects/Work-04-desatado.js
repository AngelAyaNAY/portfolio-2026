export default {
    id: "desatado",
    type: "design",
    tags: ["Arte", "Póster", "Photoshop"],
    stack: ["Photoshop", "Illustrator"],
    createdAt: "2026-07-18",
    featured: false,
    links: [{ label: "Behance", url: "https://www.behance.net/NayNiNay" }],
    video: null,                        // sin video: el hero usa el poster
    metrics: { views: 6900, likes: 180, comments: 21 },
    images: {
        cover: { id: "desatado-cover", name: "Póster", src: "/assets/works/desatado/cover.webp" },
        thumb: { id: "desatado-thumb", name: "Miniatura", src: "/assets/works/desatado/thumb.webp" },
    },
    details: [{ id: "d1", images: ["desatado-cover"] }],
    text: {
        es: {
            title: "El Desatado",
            subtitle: "Serie de pósters",
            description: "Póster con caligrafía japonesa y composición central, parte de mi serie gótico-cyber.",
            highlight: ["Desatado"],
            details: {
                d1: { title: "Composición", body: "Texto como protagonista, rodeado de textura y ruido para dar peso visual." },
            },
        },
        en: {
            title: "The Unbound",
            subtitle: "Poster series",
            description: "Poster with Japanese calligraphy and a centered composition, part of my gothic-cyber series.",
            highlight: ["Unbound"],
            details: {
                d1: { title: "Composition", body: "Text as the protagonist, surrounded by texture and noise for visual weight." },
            },
        },
    },
};