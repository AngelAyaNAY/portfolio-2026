import {
    TrendingUp, Boxes, Receipt, Smartphone, Palette, PenTool, ExternalLink,
} from "lucide-react";

export const PROJECTS = [
    {
        id: "inn", type: "dev", icon: TrendingUp, year: "2025", status: "LIVE",
        name: { es: "Inn Report", en: "Inn Report" },
        role: { es: "Dev Full-Stack — Serlogyc S.A.S", en: "Full-Stack Dev — Serlogyc S.A.S" },
        tagline: {
            es: "Indicadores financieros para cooperativas y entidades.",
            en: "Financial indicators for cooperatives and financial entities.",
        },
        desc: {
            es: "Aplicación web de indicadores financieros. Mantuve y actualicé módulos, maqueté nuevas funcionalidades en React + TypeScript con Tailwind y Flowbite, e implementé APIs REST con Django. Optimicé la base MySQL con procedimientos almacenados y adapté la app a móviles con componentes responsive.",
            en: "Financial-indicators web app. I maintained and updated modules, built new features in React + TypeScript with Tailwind and Flowbite, and implemented REST APIs with Django. I optimized the MySQL database with stored procedures and made the app responsive for mobile.",
        },
        stack: ["React", "TypeScript", "Tailwind", "Flowbite", "Django", "MySQL"],
        high: {
            es: ["Maquetación de nuevos módulos", "APIs REST con Python/Django", "Procedimientos almacenados MySQL", "Automatizaciones en Python"],
            en: ["New module UI build-out", "REST APIs with Python/Django", "MySQL stored procedures", "Python data automations"],
        },
        stats: { Frontend: 9, Backend: 7, Data: 8, Impact: 8 },
        links: [], priv: true,
    },
    {
        id: "ventas", type: "dev", icon: Boxes, year: "2024", status: "ARCHIVED",
        name: { es: "Gestión de Ventas e Inventario", en: "Sales & Inventory System" },
        role: { es: "Dev — Proyecto formativo SENA", en: "Dev — SENA capstone project" },
        tagline: {
            es: "Control de ventas e inventarios para comercios.",
            en: "Sales and inventory control for small retail.",
        },
        desc: {
            es: "Sistema full-stack para gestionar ventas e inventarios: registro de productos, control de stock en tiempo real, reportes y panel de administración. Construido con React, Node.js y MySQL como base de datos relacional.",
            en: "Full-stack system to manage sales and inventory: product registry, real-time stock control, reports and an admin dashboard. Built with React, Node.js and MySQL as the relational database.",
        },
        stack: ["React", "Node.js", "MySQL"],
        high: {
            es: ["Control de stock en tiempo real", "Panel de administración", "Reportes de ventas"],
            en: ["Real-time stock control", "Admin dashboard", "Sales reporting"],
        },
        stats: { Frontend: 7, Backend: 8, Data: 8, Impact: 6 },
        links: [], priv: false,
    },
    {
        id: "factura", type: "dev", icon: Receipt, year: "2024", status: "ARCHIVED",
        name: { es: "Facturación PyME", en: "SMB Billing App" },
        role: { es: "Dev — Proyecto formativo SENA", en: "Dev — SENA capstone project" },
        tagline: {
            es: "Facturación electrónica para pequeñas empresas.",
            en: "E-billing for small businesses.",
        },
        desc: {
            es: "Aplicación de facturación para pequeñas empresas: emisión de facturas, gestión de clientes y productos, e historial de transacciones. Backend en PHP con base de datos MySQL.",
            en: "Billing application for small businesses: invoice issuing, client and product management, and transaction history. PHP backend with a MySQL database.",
        },
        stack: ["PHP", "MySQL", "JavaScript"],
        high: {
            es: ["Emisión y gestión de facturas", "Catálogo de clientes y productos", "Historial de transacciones"],
            en: ["Invoice issuing & management", "Client & product catalog", "Transaction history"],
        },
        stats: { Frontend: 6, Backend: 8, Data: 7, Impact: 6 },
        links: [], priv: false,
    },
    {
        id: "movil", type: "dev", icon: Smartphone, year: "2024", status: "ARCHIVED",
        name: { es: "App Móvil de Inventarios", en: "Mobile Inventory App" },
        role: { es: "Dev — Proyecto formativo SENA", en: "Dev — SENA capstone project" },
        tagline: {
            es: "Gestión de productos e inventario desde el móvil.",
            en: "Product & inventory management on mobile.",
        },
        desc: {
            es: "Aplicación móvil interactiva enfocada en productos y gestión de inventarios, con sincronización de datos y una interfaz pensada para uso en campo. Trabajada con tecnologías web/móviles y MongoDB.",
            en: "Interactive mobile app focused on products and inventory management, with data sync and an interface designed for field use. Built with web/mobile tech and MongoDB.",
        },
        stack: ["React Native", "MongoDB", "Node.js"],
        high: {
            es: ["Interfaz móvil interactiva", "Sincronización de datos", "Almacenamiento flexible NoSQL"],
            en: ["Interactive mobile UI", "Data synchronization", "Flexible NoSQL storage"],
        },
        stats: { Frontend: 8, Backend: 6, Data: 7, Impact: 6 },
        links: [], priv: false,
    },
    {
        id: "posters", type: "design", icon: Palette, year: "2025", status: "ONGOING",
        name: { es: "Pósters Darktech", en: "Darktech Posters" },
        role: { es: "Dirección de arte & diseño", en: "Art direction & design" },
        tagline: { es: "Serie de pósters gótico-cyber.", en: "Gothic-cyber poster series." },
        desc: {
            es: "Serie personal de pósters que mezcla lo gótico-sacro con lo cyber-brutalista: tipografía dramática, texturas, halftone y composición técnica. La estética que define este portafolio nació aquí.",
            en: "Personal poster series blending the gothic-sacred with cyber-brutalism: dramatic type, textures, halftone and technical composition. The aesthetic that defines this portfolio was born here.",
        },
        stack: ["Photoshop", "Illustrator", "Type"],
        high: {
            es: ["Lenguaje visual propio", "Tipografía experimental", "Composición técnica"],
            en: ["Signature visual language", "Experimental typography", "Technical composition"],
        },
        stats: { Concept: 9, Type: 8, Texture: 9, Impact: 8 },
        links: [{ label: "Behance", url: "https://www.behance.net/NayNiNay", icon: ExternalLink }],
        priv: false,
    },
    {
        id: "char", type: "design", icon: PenTool, year: "2024", status: "ONGOING",
        name: { es: "Character Art", en: "Character Art" },
        role: { es: "Ilustración", en: "Illustration" },
        tagline: { es: "Personajes e ilustración digital.", en: "Characters & digital illustration." },
        desc: {
            es: "Exploración de personajes e ilustración digital con influencia del manga y lo oscuro. Un espacio para experimentar con anatomía, luz, color y narrativa visual fuera de la pantalla del código.",
            en: "Character exploration and digital illustration with manga and dark influences. A space to experiment with anatomy, light, color and visual storytelling away from the code editor.",
        },
        stack: ["Procreate", "Photoshop"],
        high: {
            es: ["Diseño de personajes", "Estudio de luz y color", "Narrativa visual"],
            en: ["Character design", "Light & color study", "Visual storytelling"],
        },
        stats: { Concept: 8, Linework: 8, Color: 7, Impact: 7 },
        links: [{ label: "Behance", url: "https://www.behance.net/NayNiNay", icon: ExternalLink }],
        priv: false,
    },
];