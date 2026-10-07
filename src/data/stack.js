import { Code2, Server, Database, GitBranch } from "lucide-react";

export const STACK_GROUPS = [
    { label: "FRONTEND", icon: Code2, items: ["React 18.2", "TypeScript", "JavaScript ES13", "Tailwind", "Flowbite"] },
    { label: "BACKEND", icon: Server, items: ["Node.js 20", "Python / Django 3.11", "PHP 8.2", "C# 11"] },
    { label: "DATA", icon: Database, items: ["MySQL 8.0", "SQL Server", "MongoDB 6.0"] },
    { label: "TOOLS", icon: GitBranch, items: ["Git & GitHub", "Linux", "AWS Essentials", "TIBCO BW"] },
];