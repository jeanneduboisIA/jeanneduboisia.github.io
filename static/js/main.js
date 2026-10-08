/*
  main.js : langue, thème, affichage du contenu (content.js), fiches projets,
  aperçu du CV, navigation.
*/
(() => {
    const C = window.CONTENT;
    const CFG = window.PORTFOLIO_CONFIG || {};
    const root = document.documentElement;

    let lang = root.lang === "en" ? "en" : "fr";
    let filter = "all";
    let revealObserver = null;

    /* ---------- petits utilitaires ---------- */

    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

    // Texte avec liens : [libellé](#projet/id) ou [libellé](https://...)
    const rich = (s) => esc(s).replace(/\[([^\]]+)\]\((#[\w/-]+|https:\/\/[^)\s]+)\)/g, (_, label, href) =>
        href.startsWith("#")
            ? `<a href="${href}">${label}</a>`
            : `<a href="${href}" target="_blank" rel="noopener">${label}</a>`);

    // Texte d'interface : t("hero.title")
    const t = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), C.ui[lang]) ?? "";

    // Valeur bilingue : "texte" ou { fr, en }
    const pick = (v) => (v && typeof v === "object" && !Array.isArray(v) ? (v[lang] ?? v.fr) : v);

    const colon = () => (lang === "fr" ? " :" : ":");

    const store = {
        get(k) { try { return localStorage.getItem(k); } catch { return null; } },
        set(k, v) { try { localStorage.setItem(k, v); } catch { /* navigation privée */ } }
    };

    // Logo d'une techno (static/img/logos/<nom>.svg)
    const logo = (name, alt = "") => name
        ? `<img class="logo" src="static/img/logos/${esc(name)}.svg" alt="${esc(alt)}" width="18" height="18">`
        : "";

    const cvUrl = () => pick(CFG.cv) || "static/cv/CV_JeanneDubois_Ingenieure_IA.pdf";

    /* ---------- icônes (traits simples, 24×24) ---------- */

    const ICONS = {
        users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 19c.6-3.3 3-5 6-5s5.4 1.7 6 5"/><path d="M16 5.2a3 3 0 0 1 0 5.6M18 14.3c1.6.6 2.7 2.1 3 4.7"/>',
        layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
        search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
        server: '<rect x="4" y="4" width="16" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="16" height="6.5" rx="1.5"/><path d="M8 7.25h.01M8 16.75h.01"/>',
        message: '<path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9.5h8M8 12.5h5"/>',
        chart: '<path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
        code: '<path d="m9 8-4 4 4 4M15 8l4 4-4 4"/>',
        shield: '<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z"/>',
        mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="m4 7 8 6 8-6"/>',
        linkedin: '<rect x="3.5" y="3.5" width="17" height="17" rx="2"/><path d="M8 10.5V16M8 7.6v.01M11.5 16v-5.5M11.5 13c0-1.7 1-2.6 2.3-2.6 1.4 0 2.2.9 2.2 2.7V16"/>',
        github: '<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.6 2.9 5.6 3.2 5.6 3.2a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.6c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
        file: '<path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v4h4M10 12h5M10 15.5h5"/>',
        arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
        external: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',
        phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
        video: '<rect x="3" y="6" width="13" height="12" rx="1.5"/><path d="m16 10 5-3v10l-5-3"/>'
    };
    const icon = (name) => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;

    /* ---------- illustrations des projets (sans image) ---------- */
    // Schémas volontairement simples, dessinés en SVG ; couleurs = variables CSS du thème.

    const COVERS = {
        rag: `
            <g class="c-line">
                <rect x="20" y="40" width="34" height="44" rx="3"/><rect x="26" y="48" width="34" height="44" rx="3" class="c-fill"/>
                <path d="M34 60h18M34 67h18M34 74h12"/>
                <path d="M66 70h14"/><path d="M80 70 C90 70 90 48 102 48"/><path d="M80 70 C90 70 90 94 102 94"/>
                <rect x="102" y="36" width="80" height="24" rx="3"/><rect x="102" y="82" width="80" height="24" rx="3"/>
                <path d="M182 48 C194 48 194 71 204 71"/><path d="M182 94 C194 94 194 71 204 71"/>
                <rect x="204" y="58" width="52" height="26" rx="3" class="c-accent-stroke"/>
                <path d="M256 71h8"/>
                <path d="M264 54h40v28h-26l-10 8v-8h-4z" class="c-accent-fill"/>
            </g>
            <g class="c-text"><text x="142" y="52">TF-IDF</text><text x="142" y="98">embeddings</text><text x="230" y="75">rerank</text></g>
            <g class="c-dots"><circle cx="274" cy="68" r="2"/><circle cx="284" cy="68" r="2"/><circle cx="294" cy="68" r="2"/></g>
            <g class="c-text"><text x="160" y="150">docs → retrieval → answer</text></g>`,
        exam: `
            <g class="c-line">
                <rect x="30" y="26" width="104" height="128" rx="3" class="c-fill"/>
                <path d="M44 48c8-4 14 4 22 0s14-4 22 0 10 2 16 0" /><path d="M44 66c10-3 16 3 26 0s12-3 20 0"/>
                <path d="M44 84c7-4 13 3 20 0s14-4 22 0 10 2 18-1"/><path d="M44 102c9-3 15 3 24 0"/>
                <path d="M44 124h30" class="c-accent-stroke"/>
                <path d="M146 90h26"/><path d="m166 84 6 6-6 6"/>
            </g>
            <g class="c-cluster">
                <circle cx="206" cy="62" r="5"/><circle cx="220" cy="54" r="5"/><circle cx="214" cy="74" r="5"/><circle cx="228" cy="68" r="5"/>
                <circle cx="252" cy="116" r="5" class="alt"/><circle cx="266" cy="106" r="5" class="alt"/><circle cx="270" cy="122" r="5" class="alt"/>
                <circle cx="206" cy="124" r="5" class="alt2"/><circle cx="220" cy="132" r="5" class="alt2"/>
            </g>
            <g class="c-line"><circle cx="217" cy="64" r="22" class="dash"/><circle cx="262" cy="115" r="19" class="dash"/><circle cx="213" cy="128" r="15" class="dash"/></g>`,
        gesture: `
            <g class="c-line">
                <path d="M120 150v-38l-16-22M120 112l-4-50M120 112l10-54M120 112l20-48M120 112l30-28"/>
                <path d="M104 90l-6-16M116 62l-2-18M130 58l2-18M140 64l6-16M150 84l12-10"/>
            </g>
            <g class="c-cluster">
                <circle cx="120" cy="150" r="4"/><circle cx="120" cy="112" r="4"/><circle cx="104" cy="90" r="4"/><circle cx="98" cy="74" r="4"/>
                <circle cx="116" cy="62" r="4"/><circle cx="114" cy="44" r="4"/><circle cx="130" cy="58" r="4"/><circle cx="132" cy="40" r="4"/>
                <circle cx="140" cy="64" r="4"/><circle cx="146" cy="48" r="4"/><circle cx="150" cy="84" r="4"/><circle cx="162" cy="74" r="4"/>
            </g>
            <g class="c-line">
                <path d="M196 120c8 0 8-30 16-30s8 50 16 50 8-70 16-70 8 40 16 40 8-10 16-10" class="c-accent-stroke"/>
                <path d="M196 150h96"/>
            </g>`,
        board: `
            <g class="c-line">
                ${[0,1,2,3,4,5].map(i => `<rect x="${40 + i * 38}" y="40" width="34" height="34" rx="3" class="${i === 5 ? "c-accent-stroke" : ""}"/>`).join("")}
                ${[0,1,2,3,4,5].map(i => `<rect x="${230 - i * 38}" y="104" width="34" height="34" rx="3" class="${i === 0 ? "c-fill" : ""}"/>`).join("")}
                <path d="M264 74v30"/><path d="M40 104V88"/>
            </g>
            <g class="c-cluster"><circle cx="95" cy="57" r="8"/><circle cx="171" cy="121" r="8" class="alt"/></g>
            <g class="c-text"><text x="160" y="164">random · greedy · minimax</text><text x="247" y="61">LLM</text></g>`,
        devops: `
            <g class="c-line">
                <rect x="20" y="70" width="50" height="36" rx="3"/><rect x="90" y="70" width="50" height="36" rx="3"/>
                <rect x="160" y="70" width="50" height="36" rx="3"/><rect x="230" y="70" width="70" height="36" rx="3" class="c-accent-stroke"/>
                <path d="M70 88h20M140 88h20M210 88h20"/>
                <path d="M265 70V46H45v24" class="dash"/><path d="m51 64-6 6-6-6"/>
                <path d="M244 132l12-10 10 6 14-16 12 8" class="c-accent-stroke"/><path d="M236 140h64"/>
            </g>
            <g class="c-text"><text x="45" y="92">build</text><text x="115" y="92">test</text><text x="185" y="92">image</text><text x="265" y="92">k8s</text></g>`,
        tfidf: `
            <g class="c-grid">
                ${Array.from({ length: 6 }, (_, r) => Array.from({ length: 11 }, (_, c) => {
                    const v = ((r * 7 + c * 13) % 10) / 10;
                    return `<rect x="${40 + c * 22}" y="${34 + r * 20}" width="18" height="16" rx="2" style="opacity:${(0.08 + v * v * 0.9).toFixed(2)}"/>`;
                }).join("")).join("")}
            </g>
            <g class="c-line"><rect x="36" y="110" width="246" height="24" rx="3" class="c-accent-stroke"/></g>`,
        gpu: `
            <g class="c-line">
                <rect x="104" y="44" width="112" height="92" rx="6" class="c-fill"/>
                <rect x="126" y="64" width="68" height="52" rx="3" class="c-accent-stroke"/>
                ${[0,1,2,3,4,5].map(i => `<path d="M${116 + i * 18} 44V30M${116 + i * 18} 136v14"/>`).join("")}
                ${[0,1,2,3].map(i => `<path d="M104 ${60 + i * 20}H90M216 ${60 + i * 20}h14"/>`).join("")}
                <path d="M30 90h60M230 90h60" class="dash"/>
            </g>
            <g class="c-text"><text x="160" y="94">24B · 4 bit</text><text x="48" y="80">prod</text><text x="272" y="80">dev</text></g>`,
        ingest: `
            <g class="c-line">
                <rect x="26" y="34" width="44" height="30" rx="3" class="c-fill"/><rect x="26" y="74" width="44" height="30" rx="3" class="c-fill"/><rect x="26" y="114" width="44" height="30" rx="3" class="c-fill"/>
                <path d="M78 49c30 0 30 41 54 41M78 89h54M78 129c30 0 30-39 54-39"/>
                <rect x="132" y="70" width="56" height="40" rx="4" class="c-accent-stroke"/>
                <path d="M196 90h18"/>
                <path d="M222 48h70M236 66h56M250 84h42M236 102h56M222 120h70M236 138h56"/>
                <path d="M222 48v90" class="dash"/>
            </g>
            <g class="c-text"><text x="48" y="53">docx</text><text x="48" y="93">pdf</text><text x="48" y="133">pptx</text><text x="160" y="94">sections</text></g>`,
        versions: `
            <g class="c-line">
                <path d="M30 96h260"/>
                ${[0,1,2,3,4].map(i => `<circle cx="${50 + i * 55}" cy="96" r="7" class="${i === 3 ? "c-accent-stroke" : "c-fill"}"/>`).join("")}
                <path d="M215 89V58h60v20h-60" class="c-accent-fill"/>
            </g>
            <g class="c-text">${["1.8", "1.9", "1.10", "1.11", "1.12"].map((v, i) => `<text x="${50 + i * 55}" y="124">${v}</text>`).join("")}<text x="245" y="72">diff</text></g>`,
        docgen: `
            <g class="c-line">
                <path d="M34 50h56l14 14v72H34z" class="c-fill"/><path d="M90 50v14h14"/>
                <path d="M118 92h34"/><path d="m146 86 6 6-6 6"/>
                <rect x="166" y="38" width="122" height="106" rx="3" class="c-fill"/>
                <path d="M178 54h70" class="c-accent-stroke"/>
                ${[0,1,2,3].map(r => [0,1,2].map(c => `<rect x="${178 + c * 36}" y="${68 + r * 16}" width="32" height="12" rx="1"/>`).join("")).join("")}
            </g>
            <g class="c-text"><text x="69" y="100">JSON</text></g>`,
        dash: `
            <g class="c-line">
                <rect x="30" y="30" width="260" height="120" rx="6" class="c-fill"/>
                <path d="M30 52h260"/>
                ${[0,1,2,3,4].map(i => `<rect x="${48 + i * 22}" y="${130 - [40, 62, 34, 70, 52][i]}" width="14" height="${[40, 62, 34, 70, 52][i]}" class="${i === 3 ? "c-accent-fill" : ""}"/>`).join("")}
                <path d="M172 118l22-20 18 10 22-30 24 12" class="c-accent-stroke"/>
                <circle cx="268" cy="41" r="4"/><circle cx="254" cy="41" r="4"/>
            </g>`,
        monitor: `
            <g class="c-line">
                <path d="M30 140h150M30 140V40"/>
                <path d="M34 120c20-4 30-40 50-36s26 30 46 24 26-44 46-48" class="c-accent-stroke"/>
                <path d="M30 70h150" class="dash"/>
            </g>
            <g class="c-cluster">
                <circle cx="222" cy="58" r="5"/><circle cx="236" cy="50" r="5"/><circle cx="232" cy="68" r="5"/>
                <circle cx="268" cy="112" r="5" class="alt"/><circle cx="282" cy="102" r="5" class="alt"/><circle cx="276" cy="122" r="5" class="alt"/>
                <circle cx="224" cy="124" r="5" class="alt2"/><circle cx="238" cy="132" r="5" class="alt2"/>
            </g>
            <g class="c-text"><text x="160" y="64">P95</text></g>`,
        scan: `
            <g class="c-line">
                <rect x="60" y="18" width="120" height="150" rx="2" class="c-fill"/>
                <path d="M160 30v12M154 36h12M72 152v12M66 158h12" class="c-accent-stroke"/>
                ${[0,1,2,3].map(r => `<rect x="70" y="${50 + r * 24}" width="14" height="14" rx="1" class="c-accent-stroke"/>` +
                    [0,1,2,3].map(c => `<rect x="${94 + c * 20}" y="${50 + r * 24}" width="14" height="14" rx="1"/>`).join("")).join("")}
                <path d="M190 93h26"/><path d="m210 87 6 6-6 6"/>
                ${[0,1,2].map(r => [0,1,2].map(c => `<rect x="${228 + c * 26}" y="${54 + r * 26}" width="20" height="20" rx="2" class="${c === 0 ? "c-accent-stroke" : "c-fill"}"/>`).join("")).join("")}
            </g>
            <g class="c-text"><text x="254" y="150">SIFT</text></g>`,
        chat: `
            <g class="c-line">
                <path d="M40 44h120v40H74l-14 12V84H40z" class="c-fill"/>
                <path d="M56 58h86M56 70h60"/>
                <path d="M280 96H150v48h78l16 12v-12h36z" class="c-accent-fill"/>
                <rect x="186" y="30" width="30" height="38" rx="3"/><rect x="226" y="30" width="30" height="38" rx="3"/>
                <path d="M193 42h16M193 50h16M233 42h16M233 50h10"/>
                <path d="M201 68v20M241 68v20" class="dash"/>
            </g>
            <g class="c-dots"><circle cx="196" cy="120" r="3"/><circle cx="210" cy="120" r="3"/><circle cx="224" cy="120" r="3"/></g>`
    };
    const cover = (key) => `<svg class="cover-svg" viewBox="0 0 320 180" aria-hidden="true">${COVERS[key] || COVERS.chat}</svg>`;

    /* ---------- traduction des éléments statiques ---------- */

    function applyStaticText() {
        $$("[data-i18n]").forEach((el) => {
            const v = t(el.dataset.i18n);
            if (typeof v === "string" && v) el.textContent = v;
        });
        $$("[data-i18n-attr]").forEach((el) => {
            el.dataset.i18nAttr.split(",").forEach((pair) => {
                const [attr, key] = pair.split(":");
                el.setAttribute(attr.trim(), t(key.trim()));
            });
        });
        document.title = t("meta.title");
        $('meta[name="description"]')?.setAttribute("content", t("meta.description"));
        $$("[data-lang-opt]").forEach((el) => el.classList.toggle("is-current", el.dataset.langOpt === lang));
        updateThemeLabel();
    }

    /* ---------- rendu des sections ---------- */

    function renderHero() {
        $("#hero-facts").innerHTML = t("hero.facts")
            .map((f) => `<li><span>${esc(f.label)}</span>${esc(f.value)}</li>`).join("");

        // Questions suggérées dans la fenêtre de l'assistant
        $("#hero-ask-chips").innerHTML = (t("chat.suggestions") || [])
            .map((s) => `<button type="button" class="chip-btn" data-q="${esc(s.q)}">${esc(s.label)}</button>`).join("");
    }

    function renderLinks() {
        const cv = cvUrl();
        $$("[data-social]").forEach((ul) => {
            const full = ul.hasAttribute("data-with-cv"); // contact : libellés complets + CV
            const items = [];
            if (CFG.email) items.push({ href: `mailto:${CFG.email}`, icon: "mail", label: CFG.email });
            if (CFG.phone) items.push({ href: `tel:${CFG.phone.replace(/\s/g, "")}`, icon: "phone", label: CFG.phone });
            if (CFG.linkedin) items.push({ href: CFG.linkedin, icon: "linkedin", label: "LinkedIn", ext: true });
            if (CFG.github) items.push({ href: CFG.github, icon: "github", label: "GitHub", ext: true });
            if (full) items.push({ href: cv, icon: "file", label: t("experience.cv"), cv: true });
            ul.innerHTML = items.map((i) => `
                <li><a href="${esc(i.href)}" ${i.ext ? 'target="_blank" rel="noopener"' : ""} ${i.cv ? "data-cv-open" : ""}
                    ${full ? "" : `aria-label="${esc(i.label)}" title="${esc(i.label)}"`}>${icon(i.icon)}${full ? `<span>${esc(i.label)}</span>` : ""}</a></li>`).join("");
        });
    }

    function renderAbout() {
        $("#about-text").innerHTML = t("about.paragraphs").map((p) => `<p>${rich(p)}</p>`).join("");

        // Frise : expériences (quelques liens vers les fiches) puis diplôme
        const projTitle = (id) => C.projects.find((p) => p.id === id)?.[lang].title || id;
        const exp = C.experiences.map((x) => {
            const d = x[lang];
            const links = (x.projectIds || []).slice(0, 3).map((id) =>
                `<a href="#projet/${esc(id)}">${esc(projTitle(id))}</a>`).join("");
            return `<li>
                <p class="path-period">${esc(x.years)}</p>
                <h4>${esc(d.role)}</h4>
                <p class="path-org">${esc(x.company)} · ${esc(d.short)}</p>
                ${links ? `<p class="path-links">${links}</p>` : ""}
            </li>`;
        }).join("");
        const edu = C.education.map((e) => `<li class="is-edu">
                <p class="path-period">${esc(t("about.educationTitle"))} · ${esc(e[lang].period)}</p>
                <h4>${esc(e.school)}</h4>
                <p class="path-org">${esc(e[lang].degree)}</p>
            </li>`).join("");
        $("#path-list").innerHTML = exp + edu;

        const hobbies = C.hobbies || [];
        $("#hobbies-block").hidden = hobbies.length === 0;
        $("#hobbies").innerHTML = hobbies.map((h) => `
            <li><div><strong>${esc(h[lang].name)}</strong><p>${esc(h[lang].text)}</p></div></li>`).join("");
    }

    // Démarche : une frise courte en tête de la section Projets
    function renderMethod() {
        $("#method-strip").innerHTML = t("projects.method").map((s, i) => `
            <li><span class="ms-num">${String(i + 1).padStart(2, "0")}</span><strong>${esc(s.title)}</strong><span class="ms-text">${esc(s.text)}</span></li>`).join("");
    }

    function renderExperience() {
        $("#timeline").innerHTML = C.experiences.map((x) => {
            const d = x[lang];
            return `<li class="tl-item reveal">
                <div class="tl-meta">
                    <p class="tl-period">${esc(x.years)}</p>
                    <p class="tl-type">${esc(d.type)}</p>
                    <p class="tl-place">${esc(x.location)}</p>
                </div>
                <div class="tl-body">
                    <p class="tl-company">${esc(x.company)}</p>
                    <h3>${esc(d.role)}</h3>
                    <p class="tl-context">${esc(d.context)}</p>
                    <div class="tl-missions-grid">${d.missions.map((m) => `
                        <div class="mission">
                            <h4>${m.link ? `<a href="#projet/${esc(m.link)}">${esc(m.t)}</a>` : esc(m.t)}</h4>
                            <p>${rich(m.d)}</p>
                        </div>`).join("")}</div>
                    <p class="tl-impact"><strong>${esc(t("experience.impact"))}${colon()}</strong> ${esc(d.impact)}</p>
                    <ul class="tags">${x.stack.map((st) => `<li>${esc(st)}</li>`).join("")}</ul>
                </div>
            </li>`;
        }).join("");
    }

    const hasType = (p, k) => k === "all" || (p.types || []).includes(k);

    function renderFilters() {
        const keys = Object.keys(t("projects.filters"));
        $("#filters").setAttribute("aria-label", t("projects.title"));
        $("#filters").innerHTML = keys.map((k) => {
            const count = C.projects.filter((p) => hasType(p, k)).length;
            if (!count) return "";
            return `<button type="button" class="filter" data-filter="${k}" aria-pressed="${k === filter}">
                ${esc(t(`projects.filters.${k}`))}<span class="count">${count}</span></button>`;
        }).join("");
    }

    // Visuel d'un projet : image -> image de secours -> illustration dessinée
    function visual(p, cls = "") {
        if (!p.image) return cover(p.cover);
        return `<img class="${cls}" src="${esc(p.image)}" alt="" loading="lazy"
            data-fallback="${esc(p.fallback || "")}" data-cover="${esc(p.cover || "")}">`;
    }

    function wireImageFallbacks(ctx = document) {
        $$("img[data-cover]", ctx).forEach((img) => {
            if (img.dataset.wired) return;
            img.dataset.wired = "1";
            img.addEventListener("error", () => {
                const fb = img.dataset.fallback;
                if (fb && !img.dataset.triedFallback) {
                    img.dataset.triedFallback = "1";
                    img.src = fb;
                } else {
                    img.outerHTML = cover(img.dataset.cover);
                }
            });
        });
        $$("img.logo", ctx).forEach((img) => {
            img.addEventListener("error", () => img.remove(), { once: true });
        });
    }

    const where = (p) => t(`projects.where.${p.group}`);

    // Projets phares en cartes, les autres en liste compacte (même fiche au clic)
    function renderProjects() {
        const list = C.projects.filter((p) => hasType(p, filter));
        const featured = list.filter((p) => p.featured);
        const others = list.filter((p) => !p.featured);
        $("#projects-empty").hidden = list.length > 0;

        $("#project-grid").hidden = featured.length === 0;
        $("#project-grid").innerHTML = featured.map((p) => {
            const d = p[lang];
            return `<article class="project-card reveal">
                <div class="pc-head">
                    <p class="pc-label">${p.pro ? `<span class="badge">${esc(t("projects.pro"))}</span>` : ""}<span>${esc(where(p))}</span><span class="pc-period">${esc(d.period)}</span></p>
                    <h3><a href="#projet/${esc(p.id)}">${esc(d.title)}</a></h3>
                </div>
                <a class="pc-visual" href="#projet/${esc(p.id)}" tabindex="-1" aria-hidden="true">${visual(p)}</a>
                <div class="pc-body">
                    <p class="pc-summary">${esc(d.summary)}</p>
                    <div class="pc-foot">
                        <span class="logos">${(p.logos || []).slice(0, 6).map((l) => logo(l, l)).join("")}</span>
                        <a class="text-link" href="#projet/${esc(p.id)}">${esc(t("projects.details"))} ${icon("arrow")}</a>
                    </div>
                </div>
            </article>`;
        }).join("");

        $("#project-others").hidden = others.length === 0;
        // sans projet phare dans le filtre, pas besoin du titre « Autres projets »
        $("#project-others .mini-title").hidden = featured.length === 0;
        $("#project-list").innerHTML = others.map((p) => {
            const d = p[lang];
            return `<li class="pl-item reveal">
                <a href="#projet/${esc(p.id)}">
                    <span class="pl-meta">${p.pro ? `<span class="badge">${esc(t("projects.pro"))}</span>` : ""}${esc(where(p))}</span>
                    <span class="pl-main">
                        <strong>${esc(d.title)}</strong>
                        <span class="pl-sum">${esc(d.summary)}</span>
                    </span>
                    <span class="logos">${(p.logos || []).slice(0, 4).map((l) => logo(l, l)).join("")}</span>
                    ${icon("arrow")}
                </a>
            </li>`;
        }).join("");
        wireImageFallbacks($("#projects"));
    }

    function renderSkills() {
        const row = (name, tools, items, cls = "") => `
            <div class="skill-row ${cls}">
                <h3>${esc(name)}</h3>
                <div>
                    ${tools.length ? `<ul class="skill-tools">${tools.map((s) =>
                        `<li>${logo(s.logo, "")}<span>${esc(pick(s.label))}</span></li>`).join("")}</ul>` : ""}
                    <p class="skill-items">${items}</p>
                </div>
            </div>`;
        $("#skills-list").innerHTML =
            C.skills.map((g) => row(pick(g.name), g.tools || [],
                pick(g.items).map((s) => `<span>${esc(s)}</span>`).join(""))).join("") +
            row(t("skills.languages"), [],
                C.languages.map((l) => `<span>${esc(l[lang].name)} <em>${esc(l[lang].level)}</em></span>`).join(""), "is-lang");
        wireImageFallbacks($("#skills-list"));
    }

    function renderAll() {
        applyStaticText();
        renderHero();
        renderLinks();
        renderAbout();
        renderMethod();
        renderFilters();
        renderProjects();
        renderSkills();
        renderExperience();
        observeReveals();
        if (dialog.open && currentProject) renderDetail(currentProject);
    }

    /* ---------- fiche projet ---------- */

    const dialog = $("#project-dialog");
    let currentProject = null;
    let pushes = 0;          // nombre de fiches ouvertes via un lien (pour revenir en arrière proprement)
    let closingByBack = false;

    function renderDetail(p) {
        const d = p[lang];
        const L = (k) => esc(t(`projects.detail.${k}`));
        const links = [
            p.link && `<a class="btn btn-primary btn-sm" href="${esc(p.link)}" target="_blank" rel="noopener">${icon("external")}${esc(t("projects.link"))}</a>`,
            p.github && `<a class="btn btn-ghost btn-sm" href="${esc(p.github)}" target="_blank" rel="noopener">${icon("github")}${esc(t("projects.code"))}</a>`,
            p.demo && `<a class="btn btn-ghost btn-sm" href="${esc(p.demo)}" target="_blank" rel="noopener">${icon("external")}${esc(t("projects.demo"))}</a>`
        ].filter(Boolean).join("");
        const gallery = (p.screenshots || []).length
            ? `<div class="pd-gallery">${p.screenshots.map((s) => `<a href="${esc(s)}" target="_blank" rel="noopener"><img src="${esc(s)}" alt="" loading="lazy"></a>`).join("")}</div>` : "";
        const videos = (p.videos || []).map((v) => `<video controls preload="metadata" src="${esc(v)}"></video>`).join("");
        const list = (arr) => (arr || []).map((s) => `<li>${rich(s)}</li>`).join("");
        // Choix techniques : liste numérotée de décisions + panneau de lecture
        const dec = d.decisions || [];
        const two = (n) => String(n).padStart(2, "0");
        const decisions = dec.length ? `
            <div class="adr" data-adr>
                <ol class="adr-list" role="tablist" aria-label="${L("decisions")}">${dec.map((x, i) => `
                    <li><button type="button" role="tab" id="adr-tab-${i}" aria-controls="adr-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-adr-i="${i}">
                        <span class="adr-num">${two(i + 1)}</span><span class="adr-q">${esc(x.q)}</span></button></li>`).join("")}
                </ol>
                <div class="adr-panel" id="adr-panel" role="tabpanel" aria-live="polite"></div>
            </div>` : "";
        $("#project-detail").innerHTML = `
            <button class="pd-close" type="button" aria-label="${esc(t("a11y.close"))}">×</button>
            <header class="pd-head">
                <p class="pc-label">${p.pro ? `<span class="badge">${esc(t("projects.pro"))}</span>` : ""}<span>${esc(d.label)}</span></p>
                <h2 id="pd-title">${esc(d.title)}</h2>
                <p class="pd-lead">${esc(d.summary)}</p>
                <dl class="pd-facts">
                    <div><dt>${L("period")}</dt><dd>${esc(d.period)}</dd></div>
                    <div><dt>${L("team")}</dt><dd>${esc(d.team)}</dd></div>
                </dl>
                ${links ? `<div class="pd-links">${links}</div>` : ""}
            </header>
            <div class="pd-visual">${visual(p)}</div>
            <div class="pd-body">
                <section><h3>${L("context")}</h3><p>${rich(d.context)}</p></section>
                <section><h3>${L("goal")}</h3><p>${rich(d.goal)}</p></section>
                <section><h3>${L("role")}</h3><p>${rich(d.role)}</p></section>
                <section><h3>${L("steps")}</h3><ol class="pd-steps">${list(d.steps)}</ol></section>
                ${decisions ? `<section class="pd-decisions"><h3>${L("decisions")}</h3>${decisions}</section>` : ""}
                ${(d.challenges || []).length ? `<section><h3>${L("challenges")}</h3><ul class="pd-list">${list(d.challenges)}</ul></section>` : ""}
                <section><h3>${L("results")}</h3><p>${rich(d.results)}</p></section>
                ${(d.learnings || []).length ? `<section><h3>${L("learnings")}</h3><ul class="pd-list">${list(d.learnings)}</ul></section>` : ""}
                ${videos || gallery ? `<section>${videos}${gallery}</section>` : ""}
                <section><h3>${L("stack")}</h3>
                    <ul class="skill-chips">${p.stack.map((s) => `<li><span>${esc(s)}</span></li>`).join("")}</ul>
                </section>
            </div>`;
        $(".pd-close", dialog).addEventListener("click", closeDetail);
        if (dec.length) wireAdr($("[data-adr]", dialog), dec);
        wireImageFallbacks($("#project-detail"));
    }

    function wireAdr(box, dec) {
        const tabs = $$("[data-adr-i]", box);
        const panel = $(".adr-panel", box);
        const two = (n) => String(n).padStart(2, "0");
        const show = (i, focus = false) => {
            i = (i + dec.length) % dec.length;
            tabs.forEach((b, k) => {
                b.setAttribute("aria-selected", String(k === i));
                b.tabIndex = k === i ? 0 : -1;
            });
            panel.setAttribute("aria-labelledby", `adr-tab-${i}`);
            panel.innerHTML = `
                <p class="adr-count">${esc(t("projects.adr.label"))} <b>${two(i + 1)}</b> / ${two(dec.length)}</p>
                <h4>${esc(dec[i].q)}</h4>
                <p>${rich(dec[i].a)}</p>
                <div class="adr-nav">
                    <button type="button" data-adr-step="-1" aria-label="${esc(t("projects.adr.prev"))}">←</button>
                    <button type="button" data-adr-step="1" aria-label="${esc(t("projects.adr.next"))}">→</button>
                </div>`;
            box.dataset.current = i;
            if (focus) tabs[i].focus();
        };
        box.addEventListener("click", (e) => {
            const tab = e.target.closest("[data-adr-i]");
            if (tab) return show(+tab.dataset.adrI);
            const step = e.target.closest("[data-adr-step]");
            if (step) show(+box.dataset.current + +step.dataset.adrStep);
        });
        $(".adr-list", box).addEventListener("keydown", (e) => {
            const delta = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
            if (!delta) return;
            e.preventDefault();
            show(+box.dataset.current + delta, true);
        });
        show(0);
    }

    function openDetail(id) {
        const p = C.projects.find((x) => x.id === id);
        if (!p) return;
        currentProject = p;
        renderDetail(p);
        if (!dialog.open) {
            typeof dialog.showModal === "function" ? dialog.showModal() : dialog.setAttribute("open", "");
            document.body.classList.add("no-scroll");
        }
        $(".pd-inner", dialog).scrollTop = 0;
    }

    function closeDetail() {
        if (!dialog.open) return;
        typeof dialog.close === "function" ? dialog.close() : dialog.removeAttribute("open");
    }

    dialog.addEventListener("close", () => {
        document.body.classList.remove("no-scroll");
        currentProject = null;
        if (location.hash.startsWith("#projet/")) {
            if (pushes > 0) {
                closingByBack = true;
                history.go(-pushes);
            } else {
                history.replaceState(null, "", "#projects");
            }
        }
        pushes = 0;
    });

    // Clic en dehors de la fiche = fermeture
    dialog.addEventListener("click", (e) => { if (e.target === dialog) closeDetail(); });

    // Liens #projet/xxx : on garde l'URL partageable
    document.addEventListener("click", (e) => {
        const a = e.target.closest('a[href^="#projet/"]');
        if (!a) return;
        e.preventDefault();
        const id = a.getAttribute("href").slice("#projet/".length);
        if (location.hash !== `#projet/${id}`) {
            history.pushState(null, "", `#projet/${id}`);
            pushes++;
        }
        openDetail(id);
    });

    function routeFromHash() {
        const m = location.hash.match(/^#projet\/([\w-]+)$/);
        if (m) openDetail(m[1]);
        else closeDetail();
    }
    window.addEventListener("popstate", () => {
        if (closingByBack) { closingByBack = false; return; }
        if (pushes > 0) pushes--;
        routeFromHash();
    });

    /* ---------- image en grand (clic sur une image de fiche projet) ---------- */

    const lightbox = $("#lightbox");

    document.addEventListener("click", (e) => {
        const img = e.target.closest(".pd-visual img, .pd-gallery img");
        if (!img) return;
        e.preventDefault(); // les images de la galerie sont dans des liens
        $("#lightbox-img").src = img.currentSrc || img.src;
        $("#lightbox-img").alt = img.alt || "";
        typeof lightbox.showModal === "function" ? lightbox.showModal() : lightbox.setAttribute("open", "");
    });
    // un clic n'importe où (image, fond, croix) referme ; Échap aussi
    lightbox.addEventListener("click", () => lightbox.close());

    /* ---------- aperçu du CV ---------- */

    const cvDialog = $("#cv-dialog");

    function openCv() {
        const url = cvUrl();
        $("#cv-download").href = url;
        $("#cv-newtab").href = url;
        $("#cv-image").src = CFG.cvPreview || "static/cv/cv-apercu.jpg";
        const obj = $("#cv-object");
        if (obj.getAttribute("data") !== url) obj.setAttribute("data", url);
        typeof cvDialog.showModal === "function" ? cvDialog.showModal() : cvDialog.setAttribute("open", "");
        document.body.classList.add("no-scroll");
    }

    document.addEventListener("click", (e) => {
        const b = e.target.closest("[data-cv-open]");
        if (!b) return;
        e.preventDefault();
        openCv();
    });
    $(".cv-close", cvDialog).addEventListener("click", () => cvDialog.close());
    cvDialog.addEventListener("click", (e) => { if (e.target === cvDialog) cvDialog.close(); });
    cvDialog.addEventListener("close", () => document.body.classList.remove("no-scroll"));

    /* ---------- « demander à l'assistant » dans le hero ---------- */

    const heroAsk = $("#hero-ask");
    if (CFG.CHATBOT_API_URL) {
        heroAsk.hidden = false;
        const askChat = (q) => {
            q = q.trim();
            if (!q) return;
            if (window.PortfolioChat) window.PortfolioChat.ask(q);
        };
        heroAsk.addEventListener("submit", (e) => {
            e.preventDefault();
            const input = $("#hero-ask-input");
            askChat(input.value);
            input.value = "";
        });
        $("#hero-ask-chips").addEventListener("click", (e) => {
            const b = e.target.closest("[data-q]");
            if (b) askChat(b.dataset.q);
        });
    }

    /* ---------- filtres ---------- */

    $("#filters").addEventListener("click", (e) => {
        const b = e.target.closest("[data-filter]");
        if (!b) return;
        filter = b.dataset.filter;
        $$("#filters .filter").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        renderProjects();
        observeReveals(true);
    });

    /* ---------- thème ---------- */

    const themeBtn = $("#theme-toggle");

    function updateThemeLabel() {
        const dark = root.dataset.theme === "dark";
        themeBtn.setAttribute("aria-label", t(dark ? "a11y.themeToLight" : "a11y.themeToDark"));
        $('meta[name="theme-color"]')?.setAttribute("content", dark ? "#14171c" : "#f7f5f0");
    }

    themeBtn.addEventListener("click", () => {
        const next = root.dataset.theme === "dark" ? "light" : "dark";
        root.dataset.theme = next;
        store.set("theme", next);
        updateThemeLabel();
    });

    /* ---------- langue ---------- */

    $("#lang-toggle").addEventListener("click", () => {
        lang = lang === "fr" ? "en" : "fr";
        root.lang = lang;
        store.set("lang", lang);
        const url = new URL(location.href);
        url.searchParams.delete("lang");
        history.replaceState(history.state, "", url);
        renderAll();
        document.dispatchEvent(new CustomEvent("portfolio:lang", { detail: { lang } }));
    });

    /* ---------- navigation ---------- */

    const menuBtn = $("#menu-toggle");
    const nav = $("#main-nav");
    const header = $(".site-header");

    const setMenu = (open) => {
        nav.classList.toggle("open", open);
        menuBtn.setAttribute("aria-expanded", String(open));
    };
    menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
    $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if ("IntersectionObserver" in window) {
        const links = $$("a", nav);
        const spy = new IntersectionObserver((entries) => {
            entries.forEach((en) => {
                if (!en.isIntersecting) return;
                links.forEach((l) => {
                    const on = l.getAttribute("href") === `#${en.target.id}`;
                    l.classList.toggle("is-active", on);
                    on ? l.setAttribute("aria-current", "true") : l.removeAttribute("aria-current");
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        $$("main section[id]").forEach((s) => spy.observe(s));
    }

    /* ---------- apparition au défilement ---------- */

    function observeReveals(immediate = false) {
        const els = $$(".reveal:not(.visible)");
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (immediate || reduce || !("IntersectionObserver" in window)) {
            els.forEach((el) => el.classList.add("visible"));
            return;
        }
        revealObserver ??= new IntersectionObserver((entries) => {
            entries.forEach((en) => {
                if (en.isIntersecting) {
                    en.target.classList.add("visible");
                    revealObserver.unobserve(en.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
        els.forEach((el) => revealObserver.observe(el));
    }

    /* ---------- photo de profil (facultative) ---------- */

    if (CFG.photo) {
        const img = new Image();
        img.onload = () => {
            img.alt = "Jeanne Dubois";
            img.className = "portrait-img";
            $("#portrait").appendChild(img);
            $("#portrait").classList.add("has-photo");
        };
        img.src = CFG.photo;
    }

    /* ---------- démarrage ---------- */

    $("#year").textContent = new Date().getFullYear();
    window.PORTFOLIO_T = t; // utilisé par chatbot.js
    renderAll();
    routeFromHash();
})();
