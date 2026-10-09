// Génère la base de connaissances du chatbot à partir de static/js/content.js,
// pour que le site et le chatbot aient toujours le même contenu.
//
// Usage (depuis le dossier du site) :
//   node tools/export-chatbot-data.mjs
// Écrit dans ../backend/data/portfolio.json (ou ../portfolio_chatbot_backend/data/
// si c'est ce dossier qui existe). Un autre chemin peut être passé en argument.

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(here, "..");
const candidates = ["portfolio-backend"].map((d) => path.join(siteDir, "..", d));
const backendDir = candidates.find((d) => fs.existsSync(d)) || candidates[0];
const outFile = path.resolve(process.argv[2] || path.join(backendDir, "data", "portfolio.json"));

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(siteDir, "static/js/content.js"), "utf8"), sandbox);
const C = sandbox.window.CONTENT;

const pick = (v, lang) => (v && typeof v === "object" && !Array.isArray(v) ? (v[lang] ?? v.fr) : v);
// [libellé](lien) -> libellé
const plain = (s) => String(s ?? "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
const docs = [];
const add = (lang, id, title, section, url, content) =>
    docs.push({ id: `${lang}-${id}`, lang, project: title, section, url, content: plain(content) });

for (const lang of ["fr", "en"]) {
    const ui = C.ui[lang];
    const L = ui.projects.detail;
    const profile = lang === "fr" ? "Profil" : "Profile";
    const groups = ui.projects.filters;

    add(lang, "about", profile, ui.about.title, "#about", ui.about.paragraphs.join("\n"));
    add(lang, "hero", profile, ui.hero.title, "#top",
        [ui.hero.kicker, ui.hero.lead, ...ui.hero.facts.map((f) => `${f.label} : ${f.value}`)].join("\n"));
    add(lang, "method", profile, ui.projects.methodTitle, "#projects",
        ui.projects.method.map((s) => `${s.title} : ${s.text}`).join("\n"));
    add(lang, "education", profile, ui.about.educationTitle, "#about",
        C.education.map((e) => `${e.school} (${e[lang].period}, ${e[lang].place}) : ${e[lang].degree}`).join("\n") + "\n" +
        `${ui.skills.languages} : ` + C.languages.map((l) => `${l[lang].name} ${l[lang].level}`).join(", ") + "\n" +
        "Certifications : " + C.certifications.map((c) => `${c.name} (${c.issuer}, ${pick(c.date, lang)})`).join(", "));

    C.experiences.forEach((x, i) => {
        const d = x[lang];
        add(lang, `exp-${i}`, `${x.company} · ${d.role}`, ui.experience.title, "#experience",
            [`${x.years} · ${d.type} · ${x.location}`, d.context, ...d.missions.map((m) => `- ${m.t} : ${m.d}`),
             `${ui.experience.impact} : ${d.impact}`, `Stack : ${x.stack.join(", ")}`].join("\n"));
    });

    for (const p of C.projects) {
        const d = p[lang];
        const url = `#projet/${p.id}`;
        add(lang, `${p.id}-overview`, d.title, ui.nav.projects, url,
            [`${ui.projects.where[p.group] || ""} · ${d.label}`,
             `Type : ${(p.types || []).map((k) => groups[k]).filter(Boolean).join(", ")}`, `${L.period} : ${d.period}`, `${L.team} : ${d.team}`, d.summary,
             `${L.stack} : ${p.stack.join(", ")}`, p.link ? `URL : ${p.link}` : ""].filter(Boolean).join("\n"));
        add(lang, `${p.id}-context`, d.title, L.context, url,
            `${d.context}\n${L.goal} : ${d.goal}\n${L.role} : ${d.role}`);
        add(lang, `${p.id}-steps`, d.title, L.steps, url, d.steps.map((s) => `- ${s}`).join("\n"));
        (d.decisions || []).forEach((x, i) => {
            add(lang, `${p.id}-decision-${i}`, d.title, `${L.decisions} · ${x.q}`, url, `${x.q}\n${x.a}`);
        });
        add(lang, `${p.id}-results`, d.title, L.results, url,
            [d.results,
             (d.challenges || []).length ? `${L.challenges} :` : "", ...(d.challenges || []).map((s) => `- ${s}`),
             (d.learnings || []).length ? `${L.learnings} :` : "", ...(d.learnings || []).map((s) => `- ${s}`)]
                .filter(Boolean).join("\n"));
    }

    add(lang, "skills", ui.skills.title, ui.skills.title, "#skills",
        [...C.skills.map((g) => `${pick(g.name, lang)} : ` +
            [...(g.tools || []).map((x) => pick(x.label, lang)), ...pick(g.items, lang)].join(", ")),
         `${ui.skills.languages} : ` + C.languages.map((l) => `${l[lang].name} ${l[lang].level}`).join(", ")].join("\n"));
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(docs, null, 2) + "\n", "utf8");
console.log(`${docs.length} passages écrits dans ${outFile}`);
