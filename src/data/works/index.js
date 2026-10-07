// src/data/works/index.js
// Carga automática: cualquier archivo nuevo en ./projects/ se registra solo.
const modules = import.meta.glob("./projects/*.js", { eager: true });
export const WORKS = Object.values(modules).map((m) => m.default);

/**
 * Mezcla estructura + textos del idioma pedido.
 * Si falta una traducción, usa español como respaldo.
 */
export function localizeWork(work, lang = "es") {
    const { text, details = [], ...base } = work;
    const fb = text.es;
    const t = text[lang] ?? fb;
    const pick = (key) => t[key] ?? fb[key];

    return {
        ...base,
        title: pick("title"),
        subtitle: pick("subtitle"),
        description: pick("description"),
        highlight: pick("highlight") ?? [],
        details: details.map((d) => {
            const dt = t.details?.[d.id] ?? fb.details?.[d.id] ?? {};
            return { ...d, title: dt.title, body: dt.body };
        }),
    };
}

export const getWorks = (lang = "es") => WORKS.map((w) => localizeWork(w, lang));
export const getWork = (id, lang = "es") => {
    const w = WORKS.find((x) => x.id === id);
    return w ? localizeWork(w, lang) : null;
};