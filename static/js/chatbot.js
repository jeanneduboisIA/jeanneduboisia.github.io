/*
  chatbot.js : interface de l'assistant. Les réponses viennent de l'API FastAPI
  (voir portfolio_chatbot_backend). Aucune clé API ici : ce fichier est public.
*/
(() => {
    const API_URL = window.PORTFOLIO_CONFIG?.CHATBOT_API_URL;
    const toggle = document.getElementById("chatbot-toggle");
    const panel = document.getElementById("chatbot-panel");
    const close = document.getElementById("chatbot-close");
    const form = document.getElementById("chatbot-form");
    const input = document.getElementById("chatbot-input");
    const messages = document.getElementById("chatbot-messages");
    const status = document.getElementById("chatbot-status");
    const suggestionsBox = document.getElementById("chat-suggestions");

    if (!toggle || !panel || !form) return;
    if (!API_URL) { panel.remove(); toggle.remove(); return; }
    toggle.hidden = false;

    const t = (k) => (window.PORTFOLIO_T ? window.PORTFOLIO_T(k) : "");
    const lang = () => (document.documentElement.lang === "en" ? "en" : "fr");
    const history = [];
    let busy = false;

    function setOpen(open) {
        panel.classList.toggle("open", open);
        panel.setAttribute("aria-hidden", String(!open));
        toggle.setAttribute("aria-expanded", String(open));
        if (open) input.focus();
    }

    // Mise en forme légère des réponses (sous-ensemble de Markdown).
    // On échappe d'abord tout le HTML : le modèle ne peut rien injecter dans la page.
    function esc(s) {
        return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function inline(s) {
        return esc(s)
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/(^|[\s(])\*(?!\s)(.+?)\*(?=[\s.,;:!?)]|$)/g, "$1<em>$2</em>")
            .replace(/`([^`]+)`/g, "<code>$1</code>");
    }

    function formatAnswer(text) {
        const out = [];
        let list = null;     // "ul" ou "ol" en cours
        let sub = false;     // sous-liste ouverte dans le dernier <li>
        const closeSub = () => { if (sub) { out.push("</ul></li>"); sub = false; } };
        const close = () => {
            if (sub) { out.push("</ul></li>"); sub = false; }
            else if (list) out.push("</li>");
            if (list) { out.push(`</${list}>`); list = null; }
        };

        text.replace(/\r/g, "").split("\n").forEach((raw) => {
            const line = raw.trim();
            const indented = /^\s{2,}/.test(raw);
            const bullet = line.match(/^[-*•]\s+(.*)$/);
            const num = line.match(/^\d+[.)]\s+(.*)$/);
            const title = line.match(/^#{1,6}\s+(.*)$/);

            if (!line) return; // une ligne vide ne coupe pas une liste
            if ((bullet || num) && indented && list) {
                if (!sub) { out.push("<ul>"); sub = true; }
                out.push(`<li>${inline((bullet || num)[1])}</li>`);
            } else if (bullet || num) {
                const type = bullet ? "ul" : "ol";
                if (list === type) {
                    if (sub) { out.push("</ul></li>"); sub = false; } else out.push("</li>");
                } else {
                    close();
                    out.push(`<${type}>`);
                    list = type;
                }
                out.push(`<li>${inline((bullet || num)[1])}`);
            } else if (list && indented) {
                closeSub();
                out.push(` ${inline(line)}`);
            } else {
                close();
                out.push(title ? `<p><strong>${inline(title[1])}</strong></p>` : `<p>${inline(line)}</p>`);
            }
        });
        close();
        return out.join("");
    }    

    function addMessage(role, text, sources = []) {
        const wrap = document.createElement("div");
        wrap.className = `chat-row ${role}`;
        const bubble = document.createElement("div");
        bubble.className = `chat-message ${role}`;
        if (role === "assistant") bubble.innerHTML = formatAnswer(text);
        else bubble.textContent = text;
        wrap.appendChild(bubble);

        const valid = sources.filter((s) => s?.url && s?.title);
        if (valid.length) {
            const box = document.createElement("div");
            box.className = "chat-sources";
            valid.forEach((s) => {
                const a = document.createElement("a");
                a.href = s.url;
                a.textContent = s.section ? `${s.title} · ${s.section}` : s.title;
                a.addEventListener("click", () => { if (window.innerWidth < 700) setOpen(false); });
                box.appendChild(a);
            });
            wrap.appendChild(box);
        }
        messages.appendChild(wrap);
        messages.scrollTop = messages.scrollHeight;
    }

    function renderSuggestions() {
        const list = t("chat.suggestions") || [];
        suggestionsBox.innerHTML = "";
        list.forEach((s) => {
            const b = document.createElement("button");
            b.type = "button";
            b.className = "chat-suggestion";
            b.textContent = s.label;
            b.addEventListener("click", () => ask(s.q));
            suggestionsBox.appendChild(b);
        });
    }

    async function ask(question) {
        question = question.trim();
        if (!question || busy) return;
        busy = true;
        window.PortfolioTrack?.("chatbot/question", "Chatbot : question posée"); // nombre de questions, pas leur contenu
        addMessage("user", question);
        input.value = "";
        status.textContent = t("chat.searching");

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question, lang: lang(), page: location.pathname, history: history.slice(-6) })
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            const answer = data.answer || t("chat.noAnswer");
            addMessage("assistant", answer, data.sources || []);
            history.push({ role: "user", content: question }, { role: "assistant", content: answer });
        } catch (err) {
            console.error(err);
            addMessage("assistant", t("chat.offline"));
        } finally {
            status.textContent = "";
            busy = false;
        }
    }

    toggle.addEventListener("click", () => setOpen(!panel.classList.contains("open")));
    close?.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && panel.classList.contains("open")) setOpen(false); });
    form.addEventListener("submit", (e) => { e.preventDefault(); ask(input.value); });

    // Changement de langue : on repart d'une conversation propre
    document.addEventListener("portfolio:lang", () => {
        messages.innerHTML = "";
        history.length = 0;
        addMessage("assistant", t("chat.welcome"));
        renderSuggestions();
    });

    // Utilisé par le champ « Une question sur mon parcours ? » du haut de page
    window.PortfolioChat = { ask: (q) => { setOpen(true); ask(q); } };

    // Réveille le backend (hébergement gratuit en veille) dès l'ouverture du site
    fetch(API_URL.replace(/\/chat$/, "/health"), { mode: "no-cors" }).catch(() => {});

    addMessage("assistant", t("chat.welcome"));
    renderSuggestions();
})();