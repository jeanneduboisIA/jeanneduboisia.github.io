/*
  Tout le contenu du site, en français et en anglais.
  Pour modifier un texte, un projet ou une expérience : c'est ici, pas dans index.html.

  Dans les textes, [libellé](#projet/id) crée un lien vers la fiche d'un projet,
  et [libellé](https://...) un lien externe.

  Après une modification, relancer `node tools/export-chatbot-data.mjs`
  pour que le chatbot connaisse aussi la nouvelle version.
*/

window.CONTENT = {

    /* ------------------------------------------------------------------ */
    /* Textes de l'interface                                               */
    /* ------------------------------------------------------------------ */
    ui: {
        fr: {
            meta: {
                title: "Portfolio de Jeanne Dubois · Ingénieure IA & Data",
                description: "Portfolio de Jeanne Dubois, ingénieure IA & Data diplômée de l'INSA Rennes : conception et développement de solutions d'IA, de la donnée à la mise en production."
            },
            a11y: {
                skip: "Aller au contenu",
                menu: "Ouvrir le menu",
                themeToLight: "Passer en mode clair",
                themeToDark: "Passer en mode sombre",
                lang: "Switch to English",
                close: "Fermer"
            },
            brand: { role: "Ingénieure IA" },
            nav: {
                about: "Profil",
                projects: "Projets",
                skills: "Compétences",
                experience: "Expériences professionnelles",
                contact: "Me contacter"
            },
            hero: {
                kicker: "Ingénieure IA & Data · INSA Rennes",
                title: "De la donnée brute à l'outil utilisé chaque jour.",
                lead: "Je conçois et développe des solutions d'IA de bout en bout, jusqu'à leur mise en production. Machine learning, traitement du langage ou IA générative : l'approche dépend du problème, pas l'inverse.",
                ctaProjects: "Parcourir les projets",
                ctaAsk: "Interroger l'assistant",
                facts: [
                    { label: "Je recherche", value: "un CDI · data scientist, ingénieure IA, développement IA & Data" },
                    { label: "Disponible", value: "immédiatement · Bretagne · permis B" }
                ],
                ask: {
                    title: "Assistant du portfolio",
                    online: "en ligne",
                    hello: "Bonjour ! Je suis un RAG développé par Jeanne pour ce site. Posez-moi une question sur son parcours, je réponds avec mes sources.",
                    placeholder: "Votre question…",
                    send: "Envoyer"
                }
            },
            about: {
                title: "Profil",
                paragraphs: [
                    "Ingénieure informatique diplômée de l'INSA Rennes, spécialisée en IA et Data. Chez Groupe API, j'ai conçu, développé et mis en production [un assistant IA](#projet/assistant-ia) utilisé au quotidien par plusieurs services : RH, commerce, automatisme, électricité, support du logiciel LINA. J'ai travaillé sur chaque partie, de la [recherche hybride](#projet/assistant-ia) à l'[infrastructure GPU](#projet/infra-llm) en passant par le [suivi des usages](#projet/monitoring), en lien étroit avec les équipes métier, les développeurs et l'équipe réseau.",
                    "Au fil de ma formation et de mes expériences, j'ai aussi travaillé sur la [recherche d'information](#projet/tfidf), la [reconnaissance d'écriture](#projet/correctexam), la [reconnaissance de gestes en temps réel](#projet/gestures), l'[analyse de formulaires scannés](#projet/traitement-images), un [langage dédié avec IA de jeu](#projet/boardrace), une [chaîne CI/CD sur Kubernetes](#projet/devops) et des [tableaux de bord décisionnels](#projet/digdash). Toujours avec la même idée : partir d'un besoin concret et aller jusqu'à une application déployée.",
                    "Aujourd'hui, je souhaite rejoindre une équipe pour concevoir des solutions d'IA qui servent réellement les métiers, avec la perspective d'y évoluer."
                ],
                timelineTitle: "Repères",
                educationTitle: "Formation",
                hobbiesTitle: "Quand je ne code pas"
            },
            experience: {
                title: "Expériences professionnelles",
                missions: "Missions",
                impact: "Résultat",
                cv: "Aperçu du CV"
            },
            projects: {
                title: "Projets",
                intro: "Chaque fiche détaille le contexte, ce que j'ai fait et les choix techniques : pourquoi telle approche plutôt qu'une autre.",
                methodTitle: "Ma démarche, d'un projet à l'autre",
                method: [
                    { title: "Cadrer", text: "comprendre le besoin métier" },
                    { title: "Comprendre les données", text: "formats, qualité, biais" },
                    { title: "Choisir l'approche", text: "du plus simple au plus complexe" },
                    { title: "Évaluer", text: "métriques adaptées, analyse d'erreurs" },
                    { title: "Déployer", text: "API, conteneurs, contraintes GPU" },
                    { title: "Faire adopter", text: "suivi d'usage, retours, formation" }
                ],
                filters: {
                    all: "Tous",
                    genai: "IA générative",
                    search: "Recherche d'info",
                    ml: "ML & vision",
                    data: "Data & BI",
                    eng: "MLOps & infra",
                    tools: "Outils métier"
                },
                pro: "Pro",
                where: { pro: "Groupe API", school: "INSA Rennes", perso: "Projet perso" },
                details: "Lire la fiche",
                code: "Code",
                demo: "Démo",
                link: "Voir en ligne",
                others: "Autres projets",
                empty: "Aucun projet dans cette catégorie.",
                adr: { label: "Décision", prev: "Précédente", next: "Suivante" },
                detail: {
                    context: "Contexte",
                    goal: "Objectif",
                    role: "Mon rôle",
                    steps: "Ce que j'ai fait",
                    decisions: "Choix techniques",
                    challenges: "Difficultés",
                    results: "Résultat",
                    learnings: "Ce que j'en retiens",
                    stack: "Technologies",
                    team: "Format",
                    period: "Période"
                }
            },
            skills: {
                title: "Compétences",
                languages: "Langues"
            },
            cv: {
                title: "Mon CV",
                download: "Télécharger le PDF",
                open: "Ouvrir dans un onglet",
                fallback: "L'aperçu n'est pas disponible sur cet appareil."
            },
            contact: {
                title: "Me contacter",
                heading: "Un poste, un projet ou une question ?",
                intro: "Je cherche un CDI en IA ou en data. N'hésitez pas à m'écrire."
            },
            footer: {
                made: "Fait par mes soins, en HTML, CSS et JavaScript, sans framework.",
                top: "Haut de page"
            },
            chat: {
                open: "Poser une question",
                title: "Assistant du portfolio",
                subtitle: "Il répond à partir du contenu de ce site, avec ses sources. Les questions sont conservées de façon anonyme pour l'améliorer.",
                welcome: "Bonjour ! Je peux répondre à vos questions sur le parcours, les compétences et les projets de Jeanne. Mes réponses s'appuient uniquement sur ce portfolio.",
                placeholder: "Votre question…",
                send: "Envoyer",
                searching: "Recherche dans le portfolio…",
                offline: "L'assistant n'est pas disponible pour le moment. Le reste du site fonctionne normalement.",
                noAnswer: "Je n'ai pas trouvé de réponse.",
                suggestions: [
                    { label: "Projets en production", q: "Quels projets de Jeanne sont en production ?" },
                    { label: "Recherche hybride", q: "Pourquoi a-t-elle utilisé une recherche hybride TF-IDF + embeddings ?" },
                    { label: "Infrastructure", q: "Comment a-t-elle déployé le LLM sur un seul GPU ?" }
                ]
            },
            noscript: "Ce site affiche ses projets et expériences avec JavaScript. Mon CV est aussi disponible en PDF."
        },

        en: {
            meta: {
                title: "Jeanne Dubois · AI & Data Engineer portfolio",
                description: "Portfolio of Jeanne Dubois, AI & Data engineer (INSA Rennes): designing and building AI solutions, from data to production."
            },
            a11y: {
                skip: "Skip to content",
                menu: "Open menu",
                themeToLight: "Switch to light mode",
                themeToDark: "Switch to dark mode",
                lang: "Passer en français",
                close: "Close"
            },
            brand: { role: "AI Engineer" },
            nav: {
                about: "Profile",
                projects: "Projects",
                skills: "Skills",
                experience: "Experience",
                contact: "Get in touch"
            },
            hero: {
                kicker: "AI & Data Engineer · INSA Rennes",
                title: "From raw data to a tool people use every day.",
                lead: "I design and build AI solutions end to end, all the way to production. Machine learning, natural language processing or generative AI: the approach depends on the problem, not the other way round.",
                ctaProjects: "Browse the projects",
                ctaAsk: "Ask the assistant",
                facts: [
                    { label: "Looking for", value: "a permanent role · data scientist, AI engineer, AI & Data developer" },
                    { label: "Available", value: "immediately · Brittany, France · driving licence" }
                ],
                ask: {
                    title: "Portfolio assistant",
                    online: "online",
                    hello: "Hello! I'm a RAG system Jeanne built for this site. Ask me anything about her background, I answer with my sources.",
                    placeholder: "Your question…",
                    send: "Send"
                }
            },
            about: {
                title: "Profile",
                paragraphs: [
                    "Computer science engineer from INSA Rennes, specialised in AI and Data. At Groupe API, I designed, built and put into production [an AI assistant](#projet/assistant-ia) used daily by several departments: HR, sales, automation, electrical, LINA software support. I worked on every part of it, from [hybrid search](#projet/assistant-ia) to the [GPU infrastructure](#projet/infra-llm) and [usage monitoring](#projet/monitoring), in close contact with the business teams, the developers and the network team.",
                    "Through my studies and work, I have also tackled [information retrieval](#projet/tfidf), [handwriting recognition](#projet/correctexam), [real-time gesture recognition](#projet/gestures), [scanned form analysis](#projet/traitement-images), a [domain-specific language with game AI](#projet/boardrace), a [CI/CD pipeline on Kubernetes](#projet/devops) and [decision-making dashboards](#projet/digdash). Always with the same idea: start from a concrete need and go all the way to a deployed application.",
                    "Today, I want to join a team to build AI solutions that genuinely serve the business, with room to grow within it."
                ],
                timelineTitle: "At a glance",
                educationTitle: "Education",
                hobbiesTitle: "When I'm not coding"
            },
            experience: {
                title: "Work experience",
                missions: "What I did",
                impact: "Outcome",
                cv: "Preview my CV"
            },
            projects: {
                title: "Projects",
                intro: "Each case study covers the context, what I did and the technical choices: why one approach rather than another.",
                methodTitle: "My approach, project after project",
                method: [
                    { title: "Frame", text: "understand the business need" },
                    { title: "Understand the data", text: "formats, quality, bias" },
                    { title: "Pick the approach", text: "from simplest to most complex" },
                    { title: "Evaluate", text: "suitable metrics, error analysis" },
                    { title: "Deploy", text: "APIs, containers, GPU constraints" },
                    { title: "Drive adoption", text: "usage monitoring, feedback, training" }
                ],
                filters: {
                    all: "All",
                    genai: "Generative AI",
                    search: "Search & IR",
                    ml: "ML & vision",
                    data: "Data & BI",
                    eng: "MLOps & infra",
                    tools: "Business tools"
                },
                pro: "Work",
                where: { pro: "Groupe API", school: "INSA Rennes", perso: "Personal project" },
                details: "Read the case study",
                code: "Code",
                demo: "Demo",
                link: "See it online",
                others: "Other projects",
                empty: "No project in this category.",
                adr: { label: "Decision", prev: "Previous", next: "Next" },
                detail: {
                    context: "Context",
                    goal: "Goal",
                    role: "My role",
                    steps: "What I did",
                    decisions: "Technical choices",
                    challenges: "Challenges",
                    results: "Outcome",
                    learnings: "What I learned",
                    stack: "Tech stack",
                    team: "Format",
                    period: "Period"
                }
            },
            skills: {
                title: "Skills",
                languages: "Languages"
            },
            cv: {
                title: "My CV",
                download: "Download the PDF",
                open: "Open in a new tab",
                fallback: "The preview isn't available on this device."
            },
            contact: {
                title: "Get in touch",
                heading: "A role, a project or a question?",
                intro: "I'm looking for a permanent role in AI or data. Feel free to get in touch."
            },
            footer: {
                made: "Handmade in plain HTML, CSS and JavaScript, no framework.",
                top: "Back to top"
            },
            chat: {
                open: "Ask a question",
                title: "Portfolio assistant",
                subtitle: "It answers from the content of this site and shows its sources. Questions are kept anonymously to improve it.",
                welcome: "Hello! I can answer questions about Jeanne's background, skills and projects. My answers are based only on this portfolio.",
                placeholder: "Your question…",
                send: "Send",
                searching: "Searching the portfolio…",
                offline: "The assistant is not available right now. The rest of the site works normally.",
                noAnswer: "I couldn't find an answer.",
                suggestions: [
                    { label: "Projects in production", q: "Which of Jeanne's projects are in production?" },
                    { label: "Hybrid search", q: "Why did she use hybrid TF-IDF + embedding search?" },
                    { label: "Infrastructure", q: "How did she deploy the LLM on a single GPU?" }
                ]
            },
            noscript: "This site uses JavaScript to display projects and experience. My CV is also available as a PDF."
        }
    },

    /* ------------------------------------------------------------------ */
    /* Expériences (la plus récente en premier)                             */
    /* projectIds : projets liés (liens dans la frise « Parcours »)         */
    /* ------------------------------------------------------------------ */
    experiences: [
        {
            company: "Groupe API · IMS Trégor",
            location: "Yffiniac (22)",
            years: "2025 - 2026",
            projectIds: ["assistant-ia", "infra-llm", "ingestion", "lina-client", "lina-versions", "af-generator", "digdash", "monitoring"],
            stack: ["Python", "PyTorch", "Mistral", "FAISS", "spaCy", "FastAPI", "Streamlit", "DigDash"],
            fr: {
                role: "Ingénieure IA & Data",
                type: "Stage de fin d'études, puis CDD · en poste",
                short: "Assistant IA, infrastructure LLM, modules métier, tableaux de bord",
                context: "Groupe API conçoit et intègre des systèmes d'automatisme et d'informatique industrielle. J'ai pris en charge son assistant IA depuis la première version : architecture, développement, déploiement sur le serveur GPU de l'entreprise, puis évolutions à partir des retours des services.",
                missions: [
                    { t: "Assistant IA multi-services", d: "Recherche hybride TF-IDF + embeddings (FAISS), reranking par cross-encoder, réécriture des questions de suivi, réponses citant leurs sources. Un mode généraliste en plus : rédaction, mails, analyse de documents et d'images.", link: "assistant-ia" },
                    { t: "Infrastructure LLM", d: "Mistral Small 24B quantifié en 4 bits : une seule copie en mémoire GPU partagée entre prod et dev, file d'attente pour les requêtes, services Windows qui redémarrent seuls.", link: "infra-llm" },
                    { t: "Ingestion et modules métier", d: "Chaîne automatisée qui découpe Word, PDF et PowerPoint en sections indexées ; suivi des versions du logiciel LINA ; génération d'analyses fonctionnelles au format Word.", link: "ingestion" },
                    { t: "Version publique pour les clients", d: "Une recherche sémantique sans LLM, plus légère, mise en ligne pour les clients du logiciel LINA.", link: "lina-client" },
                    { t: "Décisionnel et suivi d'usage", d: "Conception de tableaux de bord métiers pour l'aide à la décision stratégique et managériale (DigDash) ; tableau de bord d'usage de l'assistant (questions regroupées par thème, temps de réponse, retours).", link: "digdash" },
                    { t: "Adoption de l'IA", d: "Gestion des agents ChatGPT internes, recueil des besoins auprès de chaque service et animation de « Cafés IA » pour les équipes non techniques." }
                ],
                impact: "Un assistant en production, utilisé chaque jour par plusieurs services, et ouvert aux clients dans une version sans LLM."
            },
            en: {
                role: "AI & Data Engineer",
                type: "Final-year internship, then fixed-term contract · current",
                short: "AI assistant, LLM infrastructure, business modules, dashboards",
                context: "Groupe API designs and integrates industrial automation and IT systems. I took charge of its AI assistant from the first version: architecture, development, deployment on the company's GPU server, then improvements driven by feedback from the departments.",
                missions: [
                    { t: "Multi-department AI assistant", d: "Hybrid TF-IDF + embedding search (FAISS), cross-encoder reranking, follow-up question rewriting, answers that cite their sources. Plus a general mode: writing, emails, document and image analysis.", link: "assistant-ia" },
                    { t: "LLM infrastructure", d: "Mistral Small 24B quantised to 4 bits: a single copy in GPU memory shared by prod and dev, a request queue, Windows services that restart on their own.", link: "infra-llm" },
                    { t: "Ingestion and business modules", d: "An automated pipeline that splits Word, PDF and PowerPoint files into indexed sections; release tracking for the LINA software; functional specifications generated as Word documents.", link: "ingestion" },
                    { t: "Public version for customers", d: "A lighter semantic search without an LLM, published for customers of the LINA software.", link: "lina-client" },
                    { t: "BI and usage analytics", d: "Designing business dashboards to support strategic and managerial decisions (DigDash); a usage dashboard for the assistant (questions grouped by topic, response times, feedback).", link: "digdash" },
                    { t: "AI adoption", d: "Managing internal ChatGPT agents, gathering needs from each department and running \"AI Cafés\" for non-technical teams." }
                ],
                impact: "An assistant in production, used daily by several departments, and opened to customers in a version without an LLM."
            }
        },
        {
            company: "Association Hospitalière de Bretagne",
            location: "Plouguernével (22)",
            years: "2024",
            projectIds: [],
            stack: ["SentinelOne", "DarkTrace", "Active Directory", "ORADAD", "CVSS"],
            fr: {
                role: "Ingénieure stagiaire, cybersécurité",
                type: "Stage de cycle ingénieur",
                short: "Choix d'un EDR, audits Active Directory et exposition Internet",
                context: "Établissement de santé mentale réparti sur plusieurs sites en Bretagne, avec une équipe informatique récente qui modernisait un SI vieillissant. Deux chantiers : choisir une solution de protection et avancer sur le programme national CaRE.",
                missions: [
                    { t: "Comparatif SentinelOne / DarkTrace", d: "Analyse des alertes de l'EDR sur environ 500 postes, réduction des faux positifs, règles de détection. Côté DarkTrace, scénarios de test (exfiltration simulée) et règles de réponse automatique. Recommandation de SentinelOne : détection fiable, alertes plus simples à gérer, coût adapté." },
                    { t: "Audits Active Directory (ORADAD, ANSSI)", d: "Correction des failles relevées : droits excessifs sur les modèles de certificats, délégation Kerberos non contrainte (risque de pass-the-ticket), comptes à privilèges sans expiration de mot de passe, groupes de sécurité et GPO obsolètes." },
                    { t: "Exposition Internet", d: "Cartographie des domaines, adresses IP et services exposés, vulnérabilités classées par score CVSS. Retrait des services et domaines inutiles, règles de pare-feu resserrées, protocoles TLS modernisés." }
                ],
                impact: "Niveau ORADAD passé de 1 à 2 et SentinelOne déployé sur plus de 1 500 postes."
            },
            en: {
                role: "Engineering intern, cybersecurity",
                type: "Engineering internship",
                short: "EDR selection, Active Directory and Internet exposure audits",
                context: "A mental health organisation spread over several sites in Brittany, with a recently formed IT team modernising an ageing information system. Two workstreams: choose a protection solution and make progress on CaRE, the French national programme for hospital cybersecurity.",
                missions: [
                    { t: "SentinelOne vs DarkTrace", d: "Analysed EDR alerts on about 500 workstations, reduced false positives, wrote detection rules. For DarkTrace, built test scenarios (simulated data exfiltration) and automated response rules. Recommended SentinelOne: reliable detection, easier alert handling, suitable cost." },
                    { t: "Active Directory audits (ORADAD, ANSSI)", d: "Fixed the issues found: excessive rights on certificate templates, unconstrained Kerberos delegation (pass-the-ticket risk), privileged accounts with non-expiring passwords, outdated security groups and GPOs." },
                    { t: "Internet exposure", d: "Mapped exposed domains, IP addresses and services, with vulnerabilities ranked by CVSS score. Removed unused services and domains, tightened firewall rules, upgraded TLS protocols." }
                ],
                impact: "ORADAD level raised from 1 to 2, and SentinelOne rolled out to more than 1,500 workstations."
            }
        }
    ],


    /* ------------------------------------------------------------------ */
    /* Recommandations (non affichées pour l'instant)                       */
    /* ------------------------------------------------------------------ */
    recommendations: [
        {
            name: "Candice Charritte",
            fr: {
                role: "Ma tutrice chez Groupe API",
                text: "Jeanne fait preuve de connaissances solides et d'une grande autonomie. Elle a su parfaitement appliquer le cahier des charges de notre assistant intelligent pour en faire une réalité. Elle a maîtrisé chaque étape, du développement à la mise en production, le tout en créant et maintenant une documentation claire. […] Son implication humaine pour expliquer, former et faire adopter l'IA au sein du groupe API est fortement appréciée."
            },
            en: {
                role: "My supervisor at Groupe API",
                text: "Jeanne shows solid knowledge and a great deal of autonomy. She turned the specification of our intelligent assistant into a reality, handling every step from development to production, while writing and maintaining clear documentation. […] Her personal involvement in explaining AI, training people and getting it adopted within Groupe API is greatly appreciated."
            }
        },
        {
            name: "Ewen Hervé",
            fr: {
                role: "Ingénieur dans la même équipe",
                text: "Jeanne a fait preuve d'un grand professionnalisme, d'autonomie et de sérieux tout au long de sa mission. Elle possède de solides compétences en développement, en algorithmie et en traitement de données. […] Au-delà de ses qualités techniques, c'est une personne agréable, souriante et très appréciée des équipes."
            },
            en: {
                role: "Engineer in the same team",
                text: "Jeanne showed great professionalism, autonomy and reliability throughout her assignment. She has solid skills in software development, algorithms and data processing. […] Beyond her technical qualities, she is pleasant, cheerful and well liked by the teams."
            }
        }
    ],

    /* ------------------------------------------------------------------ */
    /* Projets                                                             */
    /* group : "pro" (Groupe API), "school" (INSA), "perso"                */
    /* image : capture dans static/img/projets/ ; fallback : image de       */
    /*         secours si la première n'existe pas ; sinon illustration     */
    /*         générée (cover).                                             */
    /* logos : fichiers de static/img/logos/ (sans .svg)                    */
    /* decisions : les « mini-fiches » de choix techniques                  */
    /* ------------------------------------------------------------------ */
    projects: [
        {
            id: "assistant-ia",
            featured: true,
            group: "pro",
            types: ["genai", "search"],
            pro: true,
            cover: "rag",
            image: "static/img/projets/assistant-ia/demo.gif",
            fallback: "static/img/projets/assistant-ia/interface.png",
            link: "",
            logos: ["python", "fastapi", "pytorch", "huggingface", "mistral", "spacy", "scikitlearn", "javascript"],
            stack: ["Python", "FastAPI", "PyTorch", "Transformers", "Mistral Small 24B", "FAISS", "spaCy", "scikit-learn", "Cross-encoder", "SSE", "JavaScript"],
            fr: {
                title: "Assistant IA documentaire (RAG hybride)",
                label: "Groupe API · en production",
                period: "Depuis juin 2025",
                team: "Projet porté de bout en bout : gestion de projet, architecture, développement, déploiement",
                summary: "Un assistant qui répond en langage naturel à partir de vingt ans de documentation interne, cite ses sources, et tourne sur un LLM hébergé en interne.",
                context: "Toute la documentation interne du groupe vit dans une arborescence de dossiers : livrets d'accueil, guides de l'ERP GDP, chartes, conditions générales de vente, guides techniques des outils métier. Plus de vingt ans d'historique, régulièrement mis à jour, sur des domaines très hétérogènes, des procédures RH à la programmation d'automates. En théorie, tout le monde y a accès. En pratique, il faut connaître l'arborescence, se souvenir du nom du fichier, ou demander à un collègue. Pour les nouveaux arrivants et les profils non informatiques, c'est une perte de temps quotidienne.",
                goal: "Rendre l'information disponible rapidement, avec une réponse sourcée, sans qu'aucune donnée ne quitte l'infrastructure de l'entreprise.",
                role: "Gestion du projet et réalisation complète, du recueil des besoins à la mise en production.",
                steps: [
                    "Sept espaces : un assistant généraliste (rédaction, reformulation de mails, analyse de documents et d'images) et six modules documentaires (vie d'entreprise et RH, ERP GDP, commerce, automatisme, électricité, logiciel LINA).",
                    "Deux modes de recherche : une recherche documentaire instantanée, sans LLM, et une recherche détaillée qui rédige une réponse sourcée.",
                    "Pipeline de la recherche détaillée : réécriture de la question si elle dépend de l'historique, recherche lexicale TF-IDF et recherche dense FAISS, fusion, découpage en passages, reranking par cross-encoder, génération par Mistral Small 24B, réponse streamée (Server-Sent Events) avec citations.",
                    "Une [chaîne d'ingestion automatisée](#projet/ingestion) et une [infrastructure LLM partagée](#projet/infra-llm), détaillées dans leurs propres fiches.",
                    "Des modules métier ajoutés au fil des demandes : [suivi de versions LINA](#projet/lina-versions), [génération d'analyses fonctionnelles](#projet/af-generator), [accès aux tableaux de bord DigDash](#projet/digdash).",
                    "Prompts système en fichiers Markdown rechargés à chaud et configuration des modules dynamique : ajouter un module ne demande aucune ligne de Python.",
                    "Interface web sans framework (modules ES), aperçus PDF/PNG des sections citées, feedback sur chaque réponse, notifications de nouveaux documents.",
                    "Travail transversal : recueil des besoins et accompagnement des services utilisateurs (notamment lors de « Cafés IA »), coordination avec les développeurs et l'équipe réseau pour intégrer l'outil au système d'information, documentation technique et guide utilisateur."
                ],
                decisions: [
                    { q: "Pourquoi une recherche hybride plutôt que des embeddings seuls ?", a: "Les embeddings captent le sens mais ratent souvent les termes exacts : références produit, sigles, noms de menus de l'ERP. TF-IDF (texte lemmatisé avec spaCy, unigrammes et bigrammes) fait l'inverse. Je lance les deux (10 et 12 candidats), je normalise chaque liste de scores en min-max pour les rendre comparables, puis je fusionne : une section trouvée par les deux moteurs voit son score multiplié par 1,5. Les 5 meilleures sections passent à l'étape suivante." },
                    { q: "Pourquoi un cross-encoder après la recherche ?", a: "Le modèle d'embeddings (un bi-encodeur MiniLM multilingue) encode la question et les documents séparément : rapide, mais approximatif. Le cross-encoder (entraîné sur mMARCO) lit la paire question/passage d'un seul bloc, ce qui est bien plus précis mais trop coûteux pour tout le corpus. Il ne note donc que les candidats déjà filtrés. Score final : 0,7 × score du cross-encoder + 0,3 × score de recherche." },
                    { q: "Pourquoi indexer des sections et ne découper qu'ensuite ?", a: "Un découpage à taille fixe coupe les procédures en plein milieu. J'indexe des sections logiques (titres Word, signets PDF, slides), précédées de leur fil d'Ariane « document > chapitre > titre », ce qui donne du contexte à l'embedding. Seules les sections longues (plus de 500 caractères) sont redécoupées avant le reranking, en passages d'environ 400 mots avec 50 mots de recouvrement, en respectant les fins de phrases. Les listes numérotées restent entières." },
                    { q: "Recherche exacte ou approximative dans FAISS ?", a: "Exacte : un index IndexFlatIP sur des vecteurs normalisés en norme L2, ce qui revient à une similarité cosinus. À l'échelle d'un corpus d'entreprise, la recherche exhaustive reste quasi instantanée ; un index approximatif (IVF, HNSW) n'apporterait qu'une perte de rappel." },
                    { q: "Pourquoi un LLM hébergé en interne ?", a: "La documentation contient des informations internes : pas question de l'envoyer à une API externe. Mistral Small 24B, quantifié en 4 bits, tient sur le GPU du serveur et sait aussi analyser des images. Le détail est dans la fiche [infrastructure](#projet/infra-llm)." },
                    { q: "Comment éviter les réponses inventées ?", a: "Le prompt impose de répondre uniquement à partir des passages fournis, numérotés S1 à S6, et de les citer. Je récupère ensuite les identifiants cités pour n'afficher que les vraies sources, complétées jusqu'à trois. Si le modèle répond qu'il ne trouve pas l'information, aucune source n'est affichée, pour ne pas donner une fausse impression de fiabilité." },
                    { q: "Comment régler la longueur et le ton des réponses ?", a: "La longueur maximale suit la taille du prompt réellement envoyé : max_new_tokens = min(max(tokens d'entrée, 256), 3000). Une question courte n'autorise pas trois pages de réponse ; un contexte documentaire chargé en justifie une plus développée. Température 0,5, top-p 0,7, pénalité de répétition 1,15 pour les réponses ; température 0,1 pour la réécriture de questions, qui doit être quasi déterministe." }
                ],
                challenges: [
                    "Gagner en pertinence sans allonger le temps de réponse, sur un seul GPU partagé.",
                    "Faire évoluer un outil en production sans casser les habitudes des utilisateurs.",
                    "Des documents de qualité très inégale : PDF sans structure, schémas, tableaux."
                ],
                results: "En production sur le serveur de l'entreprise et utilisé par plusieurs services. Les feedbacks et les logs alimentent un [tableau de bord de suivi](#projet/monitoring) qui oriente chaque évolution.",
                learnings: [
                    "Un RAG qui marche en démo et un RAG qui marche au quotidien, ce n'est pas le même travail : la qualité se joue surtout sur l'ingestion et la recherche, avant même le LLM.",
                    "Mesurer avant de modifier : logs, P95, feedbacks négatifs."
                ]
            },
            en: {
                title: "Document AI assistant (hybrid RAG)",
                label: "Groupe API · in production",
                period: "Since June 2025",
                team: "Owned end to end: project management, architecture, development, deployment",
                summary: "An assistant that answers in plain language from twenty years of internal documentation, cites its sources, and runs on an in-house LLM.",
                context: "All of the group's internal documentation lives in a folder tree: onboarding booklets, guides for the GDP ERP, internal charters, terms of sale, technical guides for business tools. More than twenty years of history, regularly updated, across very different fields, from HR procedures to PLC programming. In theory everyone can access it. In practice you have to know the folder tree, remember the file name, or ask a colleague. For newcomers and non-technical staff, that is time lost every day.",
                goal: "Make information available quickly, with a sourced answer, without any data leaving the company's infrastructure.",
                role: "Project management and full delivery, from gathering needs to production.",
                steps: [
                    "Seven spaces: a general assistant (writing, email rewording, document and image analysis) and six document modules (company life and HR, GDP ERP, sales, automation, electrical, LINA software).",
                    "Two search modes: instant document search without an LLM, and detailed search that writes a sourced answer.",
                    "Detailed search pipeline: question rewriting when it depends on history, lexical TF-IDF search and dense FAISS search, fusion, passage chunking, cross-encoder reranking, generation with Mistral Small 24B, streamed answer (Server-Sent Events) with citations.",
                    "An [automated ingestion pipeline](#projet/ingestion) and a [shared LLM infrastructure](#projet/infra-llm), each with its own case study.",
                    "Business modules added on request: [LINA release tracking](#projet/lina-versions), [functional specification generator](#projet/af-generator), [access to DigDash dashboards](#projet/digdash).",
                    "System prompts stored as Markdown files reloaded on the fly and dynamic module configuration: adding a module takes no Python code.",
                    "Framework-free web interface (ES modules), PDF/PNG previews of cited sections, feedback on every answer, notifications for new documents.",
                    "Cross-functional work: gathering needs from the business departments and supporting them (notably through \"AI Cafés\"), coordinating with the developers and the network team to integrate the tool into the company's IT systems, technical documentation and user guide."
                ],
                decisions: [
                    { q: "Why hybrid search rather than embeddings alone?", a: "Embeddings capture meaning but often miss exact terms: product references, acronyms, ERP menu names. TF-IDF (spaCy-lemmatised text, unigrams and bigrams) does the opposite. I run both (10 and 12 candidates), min-max normalise each score list so they are comparable, then merge: a section found by both engines gets its score multiplied by 1.5. The top 5 sections go to the next stage." },
                    { q: "Why a cross-encoder after retrieval?", a: "The embedding model (a multilingual MiniLM bi-encoder) encodes the question and documents separately: fast, but approximate. The cross-encoder (trained on mMARCO) reads the question/passage pair jointly, which is much more accurate but too expensive for the whole corpus. So it only scores the pre-filtered candidates. Final score: 0.7 × cross-encoder score + 0.3 × retrieval score." },
                    { q: "Why index sections and only chunk afterwards?", a: "Fixed-size chunking cuts procedures in half. I index logical sections (Word headings, PDF bookmarks, slides), prefixed with their breadcrumb \"document > chapter > title\", which gives the embedding some context. Only long sections (over 500 characters) are re-chunked before reranking, into passages of about 400 words with a 50-word overlap, respecting sentence boundaries. Numbered lists stay whole." },
                    { q: "Exact or approximate search in FAISS?", a: "Exact: an IndexFlatIP index over L2-normalised vectors, which amounts to cosine similarity. At the scale of a company corpus, exhaustive search is near-instant; an approximate index (IVF, HNSW) would only cost recall." },
                    { q: "Why an in-house LLM?", a: "The documentation contains internal information: sending it to an external API was out of the question. Mistral Small 24B, 4-bit quantised, fits on the server's GPU and can also analyse images. Details in the [infrastructure](#projet/infra-llm) case study." },
                    { q: "How do you prevent made-up answers?", a: "The prompt requires answering only from the passages provided, numbered S1 to S6, and citing them. I then extract the cited IDs to show only the real sources, topped up to three. If the model says it cannot find the information, no source is shown, so as not to give a false impression of reliability." },
                    { q: "How are answer length and tone tuned?", a: "The maximum length follows the size of the prompt actually sent: max_new_tokens = min(max(input tokens, 256), 3000). A short question doesn't allow three pages; a large document context justifies a longer answer. Temperature 0.5, top-p 0.7, repetition penalty 1.15 for answers; temperature 0.1 for question rewriting, which must be near-deterministic." }
                ],
                challenges: [
                    "Improving relevance without slowing down answers, on a single shared GPU.",
                    "Evolving a tool in production without breaking users' habits.",
                    "Documents of very uneven quality: unstructured PDFs, diagrams, tables."
                ],
                results: "In production on the company's server and used by several departments. Feedback and logs feed a [monitoring dashboard](#projet/monitoring) that guides every evolution.",
                learnings: [
                    "A RAG system that works in a demo and one that works every day are two different jobs: quality is decided mostly by ingestion and retrieval, before the LLM even comes in.",
                    "Measure before changing: logs, P95, negative feedback."
                ]
            }
        },
        {
            id: "infra-llm",
            featured: true,
            group: "pro",
            types: ["eng"],
            pro: true,
            cover: "gpu",
            image: "static/img/projets/infra-llm/performances.png",
            link: "",
            logos: ["python", "fastapi", "pytorch", "huggingface", "nvidia", "windows11"],
            stack: ["Python", "FastAPI", "asyncio", "PyTorch", "bitsandbytes", "Transformers", "CUDA", "NSSM"],
            fr: {
                title: "Infrastructure et industrialisation du LLM",
                label: "Groupe API · production",
                period: "2026",
                team: "Conception et mise en œuvre",
                summary: "Faire tourner un LLM de 24 milliards de paramètres en production et en développement, sur un seul GPU, sans conflit ni rechargement inutile.",
                context: "Plusieurs applications internes et leurs environnements de développement avaient chacune besoin de Mistral. Chaque copie chargée en mémoire GPU coûtait cher et risquait de la saturer dès qu'un environnement de développement tournait à côté de la production.",
                goal: "Une seule copie du modèle en mémoire, partagée proprement, et un déploiement reproductible.",
                role: "Conception de l'architecture dev/prod et développement.",
                steps: [
                    "API de production unifiée (FastAPI) qui charge le modèle une seule fois et l'expose en interne : génération, génération streamée, vision, statut.",
                    "Environnements de développement sur d'autres ports, qui appellent ce LLM à distance via un petit client HTTP : plus aucun chargement de modèle en dev.",
                    "File d'attente des générations (asyncio.Semaphore) : le GPU traite une génération à la fois, sans risque de saturer sa mémoire.",
                    "Modèle quantifié en 4 bits (bitsandbytes) ; cross-encoder placé sur GPU seulement s'il reste au moins 0,5 Go de VRAM libre, sinon sur CPU.",
                    "Chargement paresseux des modèles, déchargement du LLM après une période d'inactivité, caches invalidés par empreinte du corpus.",
                    "Déploiement en service Windows (NSSM), tâches planifiées, rechargement du corpus à chaud via une route d'administration."
                ],
                decisions: [
                    { q: "Pourquoi quantifier en 4 bits ?", a: "En 16 bits, 24 milliards de paramètres occupent environ 48 Go rien que pour les poids (24 × 10⁹ × 2 octets). En 4 bits, environ 12 Go : le modèle tient sur le GPU du serveur, avec une perte de qualité faible pour ce type de tâche." },
                    { q: "Comment servir plusieurs utilisateurs avec un seul GPU ?", a: "Les demandes de génération passent par une file d'attente : le GPU traite une réponse à la fois, à pleine vitesse. Lancer deux générations en parallèle sur le même GPU doublerait la mémoire occupée et risquerait de faire tomber le service pour tout le monde. Comme les réponses sont streamées et ne durent que quelques secondes, l'attente reste courte et rare, et les recherches documentaires, qui n'utilisent pas le LLM, ne passent pas par cette file. Pour monter en charge, la suite logique serait un serveur d'inférence capable de regrouper les requêtes (vLLM, par exemple) ou un second GPU." },
                    { q: "Pourquoi des caches par empreinte du corpus ?", a: "Lemmatiser tout le corpus et recalculer les embeddings prend du temps. Une empreinte (hash) des sections indique si le corpus a changé ; si ce n'est pas le cas, la matrice TF-IDF et l'index FAISS sont réutilisés et seule la question est traitée." },
                    { q: "Pourquoi décharger le modèle après inactivité ?", a: "Le GPU sert aussi à d'autres traitements. Libérer la mémoire quand l'assistant n'est pas utilisé (la nuit, par exemple) évite de la bloquer pour rien ; le rechargement au premier appel est un coût ponctuel et prévisible." }
                ],
                challenges: [
                    "Coordonner production et développement sans jamais dégrader la production.",
                    "Diagnostiquer des problèmes de mémoire GPU à partir des métriques système (CPU, RAM, VRAM) journalisées."
                ],
                results: "Une seule copie du modèle sur toute l'infrastructure, et des environnements de développement qui démarrent sans charger de modèle.",
                learnings: [
                    "En production, la contrainte principale n'est pas toujours la qualité du modèle, mais la mémoire, la concurrence et la reprise après incident."
                ]
            },
            en: {
                title: "LLM infrastructure and industrialisation",
                label: "Groupe API · production",
                period: "2026",
                team: "Design and implementation",
                summary: "Running a 24-billion-parameter LLM in production and development on a single GPU, with no conflicts and no needless reloads.",
                context: "Several internal applications and their development environments each needed Mistral. Every copy loaded into GPU memory was expensive and could saturate it as soon as a development environment ran alongside production.",
                goal: "A single copy of the model in memory, cleanly shared, and a reproducible deployment.",
                role: "Designed the dev/prod architecture and built it.",
                steps: [
                    "A unified production API (FastAPI) that loads the model once and exposes it internally: generation, streamed generation, vision, status.",
                    "Development environments on other ports calling this LLM remotely through a small HTTP client: no more model loading in dev.",
                    "A generation queue (asyncio.Semaphore): the GPU handles one generation at a time, with no risk of running out of memory.",
                    "4-bit quantised model (bitsandbytes); cross-encoder placed on GPU only if at least 0.5 GB of VRAM is free, otherwise on CPU.",
                    "Lazy model loading, LLM unloaded after a period of inactivity, caches invalidated by a corpus fingerprint.",
                    "Deployed as a Windows service (NSSM), scheduled tasks, hot corpus reload through an admin route."
                ],
                decisions: [
                    { q: "Why 4-bit quantisation?", a: "In 16-bit, 24 billion parameters take about 48 GB for the weights alone (24 × 10⁹ × 2 bytes). In 4-bit, about 12 GB: the model fits on the server's GPU, with little quality loss for this kind of task." },
                    { q: "How do you serve several users with a single GPU?", a: "Generation requests go through a queue: the GPU handles one answer at a time, at full speed. Running two generations in parallel on the same GPU would double the memory in use and could bring the service down for everyone. Since answers are streamed and only take a few seconds, waits stay short and rare, and document searches, which do not use the LLM, skip the queue. To scale further, the natural next step would be an inference server that batches requests (vLLM, for instance) or a second GPU." },
                    { q: "Why caches keyed on a corpus fingerprint?", a: "Lemmatising the whole corpus and recomputing embeddings takes time. A fingerprint (hash) of the sections tells whether the corpus has changed; if not, the TF-IDF matrix and FAISS index are reused and only the question is processed." },
                    { q: "Why unload the model when idle?", a: "The GPU is also used for other work. Freeing memory when the assistant is not in use (at night, for instance) avoids blocking it for nothing; reloading on the first call is a one-off, predictable cost." }
                ],
                challenges: [
                    "Coordinating production and development without ever degrading production.",
                    "Diagnosing GPU memory issues from logged system metrics (CPU, RAM, VRAM)."
                ],
                results: "A single copy of the model across the infrastructure, and development environments that start without loading a model.",
                learnings: [
                    "In production, the main constraint is not always model quality, but memory, concurrency and recovery."
                ]
            }
        },
        {
            id: "ingestion",
            group: "pro",
            types: ["data", "eng"],
            pro: true,
            cover: "ingest",
            image: "",
            link: "",
            logos: ["python", "windows11", "markdown"],
            stack: ["Python", "PyMuPDF", "python-docx", "python-pptx", "Modèle de vision", "Automatisation"],
            fr: {
                title: "Ingestion et traitement documentaire automatisés",
                label: "Groupe API · production",
                period: "2025 - 2026",
                team: "Conception et développement",
                summary: "Transformer des Word, PDF, PowerPoint et Markdown hétérogènes en sections propres, hiérarchisées et prévisualisables, sans intervention manuelle.",
                context: "Les documents arrivent dans tous les formats, avec des structures très inégales : titres Word, PDF avec ou sans signets, présentations, schémas en image. La qualité des réponses de l'assistant dépend d'abord de cette étape.",
                goal: "Qu'un simple dépôt de fichier suffise pour qu'un document soit consultable dans l'assistant.",
                role: "Conception et développement de toute la chaîne.",
                steps: [
                    "Word : parcours des blocs dans l'ordre réel (paragraphes et tableaux), hiérarchie reconstruite à partir des styles de titre grâce à une pile de titres parents ; tableaux convertis en texte structuré.",
                    "PDF (PyMuPDF) : signets d'abord, puis heuristique sur la taille de police, sinon document entier ; calcul des limites verticales de chaque section.",
                    "PowerPoint : une section par slide, slides masquées ignorées. Markdown : hiérarchie des titres, mise en forme nettoyée.",
                    "Images : description par le modèle de vision pour rendre les schémas et captures cherchables, après filtrage des logos et icônes, avec un cache par empreinte de l'image.",
                    "Filtrage des contenus inutiles (sommaires, sections purement structurelles, check-lists sans phrase) et normalisation du texte.",
                    "Aperçus PDF et PNG par section, avec découpage vertical quand deux sections partagent une page.",
                    "Automatisation : dépôt dans un dossier « à traiter », détection des nouvelles versions (_v2, _v3) et suppression des anciennes, verrou contre les exécutions concurrentes, notification aux utilisateurs, rechargement à chaud de l'API."
                ],
                decisions: [
                    { q: "Pourquoi découper par structure plutôt qu'en blocs de taille fixe ?", a: "Une section correspond à une unité de sens : une procédure, un paramétrage, un article de charte. La garder entière, avec son chemin de titres, donne au moteur de recherche et au LLM un contexte lisible, et permet de montrer à l'utilisateur exactement la page concernée." },
                    { q: "Pourquoi décrire les images avec un modèle de vision ?", a: "Une partie de l'information est dans des captures d'écran et des schémas, invisibles pour une recherche textuelle. Les appels au modèle de vision sont coûteux : un filtre écarte les petites images (logos, puces) et chaque description est mise en cache pour n'être calculée qu'une fois." },
                    { q: "Pourquoi un verrou de traitement ?", a: "Le script tourne en tâche planifiée mais peut aussi être lancé à la main. Sans verrou, deux exécutions simultanées pourraient modifier les mêmes fichiers et laisser des aperçus incohérents." }
                ],
                challenges: [
                    "Des PDF sans signets ni styles exploitables.",
                    "Deux sections sur une même page : n'afficher que la bonne partie."
                ],
                results: "Ajouter un document, ou même un module métier entier, ne demande plus aucune intervention dans le code.",
                learnings: [
                    "La qualité d'un RAG se décide en grande partie avant l'IA, au moment où l'on structure les documents."
                ]
            },
            en: {
                title: "Automated document ingestion and processing",
                label: "Groupe API · production",
                period: "2025 - 2026",
                team: "Design and development",
                summary: "Turning heterogeneous Word, PDF, PowerPoint and Markdown files into clean, hierarchical, previewable sections, with no manual work.",
                context: "Documents arrive in every format, with very uneven structures: Word headings, PDFs with or without bookmarks, slide decks, diagrams as images. The quality of the assistant's answers depends first and foremost on this step.",
                goal: "Dropping a file into a folder should be enough for a document to become searchable in the assistant.",
                role: "Designed and built the whole pipeline.",
                steps: [
                    "Word: blocks read in their actual order (paragraphs and tables), hierarchy rebuilt from heading styles with a stack of parent titles; tables converted into structured text.",
                    "PDF (PyMuPDF): bookmarks first, then a font-size heuristic, otherwise the whole document; vertical boundaries computed for each section.",
                    "PowerPoint: one section per slide, hidden slides skipped. Markdown: heading hierarchy, inline formatting cleaned.",
                    "Images: described by the vision model so diagrams and screenshots become searchable, after filtering out logos and icons, with a cache keyed on the image fingerprint.",
                    "Filtering of useless content (tables of contents, purely structural sections, checklists without sentences) and text normalisation.",
                    "PDF and PNG previews per section, with vertical cropping when two sections share a page.",
                    "Automation: drop into a \"to process\" folder, detection of new versions (_v2, _v3) and removal of old ones, a lock against concurrent runs, user notifications, hot reload of the API."
                ],
                decisions: [
                    { q: "Why split by structure rather than into fixed-size blocks?", a: "A section is a unit of meaning: a procedure, a setting, an article of a charter. Keeping it whole, with its heading path, gives the search engine and the LLM readable context, and lets the user see exactly the right page." },
                    { q: "Why describe images with a vision model?", a: "Part of the information sits in screenshots and diagrams, invisible to text search. Vision calls are expensive: a filter discards small images (logos, bullets) and each description is cached so it is only computed once." },
                    { q: "Why a processing lock?", a: "The script runs as a scheduled task but can also be started by hand. Without a lock, two simultaneous runs could modify the same files and leave inconsistent previews." }
                ],
                challenges: [
                    "PDFs without usable bookmarks or styles.",
                    "Two sections on the same page: showing only the right part."
                ],
                results: "Adding a document, or even a whole business module, no longer requires touching the code.",
                learnings: [
                    "The quality of a RAG system is largely decided before the AI, when the documents are structured."
                ]
            }
        },
        {
            id: "lina-versions",
            group: "pro",
            types: ["genai", "tools"],
            pro: true,
            cover: "versions",
            image: "static/img/projets/lina-versions/suivi-versions.png",
            link: "",
            logos: ["python", "fastapi", "git", "markdown", "mistral"],
            stack: ["Python", "FastAPI", "Git", "Markdown", "Mistral", "SSE"],
            fr: {
                title: "Suivi de versions d'un logiciel métier",
                label: "Groupe API · module de l'assistant IA",
                period: "2026",
                team: "Développement complet",
                summary: "Savoir en quelques secondes ce qui a changé entre deux versions d'un logiciel édité par le groupe, ou dans quelle version une fonctionnalité est apparue.",
                context: "Groupe API édite LINA, un logiciel métier utilisé par ses clients. Ses notes de version sont tenues dans un wiki Git, une page par version. Pour répondre à un client (« qu'est-ce qui a changé depuis ma version ? »), il fallait tout relire.",
                goal: "Une synthèse fiable des évolutions entre deux versions, filtrable par thème et par mot-clé.",
                role: "Analyse du besoin avec les équipes du logiciel, développement du back-end et de l'interface.",
                steps: [
                    "Synchronisation hebdomadaire du wiki (git pull authentifié) ; la dernière version n'est publiée qu'une fois finalisée.",
                    "Analyse des fichiers Markdown : blocs « évolutions » et « corrections », plusieurs formats détectés, thèmes normalisés par une table d'alias.",
                    "Filtres par plage de versions, thèmes, mots-clés, avec ou sans corrections.",
                    "Recherche « dans quelle version ? » sur tout l'historique, insensible à la casse et aux accents, déclenchée pendant la saisie (debounce de 350 ms) avec protection contre les réponses obsolètes.",
                    "Synthèse rédigée par le LLM ou liste brute, au choix, avec possibilité de comparer les deux."
                ],
                decisions: [
                    { q: "Pourquoi laisser le choix entre synthèse IA et liste brute ?", a: "Sur des listes d'évolutions denses, le LLM pouvait reformuler de façon imprécise ou omettre un point. Pour répondre à un client, l'exactitude prime : l'utilisateur peut désactiver l'IA, ou comparer la synthèse avec le texte d'origine." },
                    { q: "Comment gérer un grand écart entre deux versions ?", a: "Selon la taille du contexte : jusqu'à 8 000 caractères, le LLM reçoit un contexte structuré ; jusqu'à 12 000, une version Markdown compacte ; au-delà, les évolutions sont affichées directement. Passé un certain volume, une synthèse devient lente et moins fiable : autant montrer la source." },
                    { q: "Pourquoi trier les versions numériquement ?", a: "Un tri alphabétique place 1.10 avant 1.9. Chaque numéro est converti en tuple d'entiers, complété par des zéros pour comparer des versions de longueurs différentes (1.2 et 1.2.1)." }
                ],
                challenges: [
                    "Des notes de version rédigées dans des formats légèrement différents d'une version à l'autre."
                ],
                results: "Les équipes répondent aux questions des clients sur les versions sans relire l'historique.",
                learnings: [
                    "Une IA utile laisse à l'utilisateur la possibilité de vérifier, voire de s'en passer."
                ]
            },
            en: {
                title: "Release tracking for business software",
                label: "Groupe API · AI assistant module",
                period: "2026",
                team: "Full development",
                summary: "Finding out in seconds what changed between two releases of a software product published by the group, or in which release a feature appeared.",
                context: "Groupe API publishes LINA, a business software product used by its customers. Its release notes are kept in a Git wiki, one page per version. To answer a customer (\"what has changed since my version?\"), someone had to reread everything.",
                goal: "A reliable summary of changes between two versions, filterable by theme and keyword.",
                role: "Needs analysis with the software teams, back-end and interface development.",
                steps: [
                    "Weekly wiki sync (authenticated git pull); the latest release is only published once finalised.",
                    "Parsing of the Markdown files: \"changes\" and \"fixes\" blocks, several formats detected, themes normalised through an alias table.",
                    "Filters by version range, theme and keyword, with or without fixes.",
                    "\"In which version?\" search across the whole history, case- and accent-insensitive, triggered while typing (350 ms debounce) with protection against stale responses.",
                    "LLM-written summary or raw list, as the user prefers, with the option to compare both."
                ],
                decisions: [
                    { q: "Why offer a choice between an AI summary and a raw list?", a: "On dense change lists, the LLM could rephrase imprecisely or leave a point out. When answering a customer, accuracy comes first: users can turn the AI off, or compare the summary with the original text." },
                    { q: "How to handle a large gap between two versions?", a: "Depending on context size: up to 8,000 characters, the LLM gets a structured context; up to 12,000, a compact Markdown version; beyond that, the changes are shown directly. Past a certain volume, a summary becomes slow and less reliable: better to show the source." },
                    { q: "Why sort versions numerically?", a: "Alphabetical sorting puts 1.10 before 1.9. Each number is converted into a tuple of integers, padded with zeros to compare versions of different lengths (1.2 and 1.2.1)." }
                ],
                challenges: [
                    "Release notes written in slightly different formats from one version to the next."
                ],
                results: "Teams answer customers' questions about versions without rereading the history.",
                learnings: [
                    "A useful AI lets the user check its work, or do without it."
                ]
            }
        },
        {
            id: "lina-client",
            group: "pro",
            types: ["search"],
            pro: true,
            cover: "chat",
            image: "static/img/projets/lina-client/recherche.png",
            link: "https://novy.groupe-api.fr",
            logos: ["python", "fastapi", "huggingface"],
            stack: ["Python", "FastAPI", "Recherche sémantique", "Déploiement web"],
            fr: {
                title: "Recherche documentaire publique pour les clients",
                label: "Groupe API · en ligne",
                period: "Depuis 2026",
                team: "Adaptation et mise en ligne",
                summary: "Une version publique, sémantique et sans LLM, de l'assistant, mise en ligne sur le site Solutions Industrielles pour les clients d'un logiciel du groupe.",
                context: "Groupe API édite LINA, un logiciel utilisé par ses clients industriels. Ces clients avaient besoin d'accéder facilement à la documentation du produit. Exposer un LLM sur Internet posait des questions de coût, de charge GPU et de fiabilité.",
                goal: "Donner aux clients un accès direct à la bonne section de documentation, sans risque de réponse inventée.",
                role: "Adaptation de l'outil interne et mise en ligne.",
                steps: [
                    "Réutilisation du moteur de recherche sémantique sur la documentation du logiciel, sans étape de génération.",
                    "Mise en ligne sur Solutions Industrielles, accessible aux clients."
                ],
                decisions: [
                    { q: "Pourquoi pas de LLM pour les clients ?", a: "En usage externe, une réponse fausse engage l'entreprise. Une recherche qui renvoie directement les passages de la documentation est vérifiable, instantanée et ne consomme pas de GPU. La génération reste réservée aux usages internes, où l'on peut accompagner les utilisateurs." }
                ],
                challenges: [
                    "Passer d'un outil interne à un service exposé à des clients."
                ],
                results: "La documentation du logiciel est consultable en ligne par les clients.",
                learnings: [
                    "Le bon niveau d'IA dépend de qui l'utilise et de ce que coûte une erreur."
                ]
            },
            en: {
                title: "Public document search for customers",
                label: "Groupe API · online",
                period: "Since 2026",
                team: "Adaptation and release",
                summary: "A public, semantic-only version of the assistant, without an LLM, published on the Solutions Industrielles website for customers of one of the group's software products.",
                context: "Groupe API publishes LINA, a software product used by its industrial customers. Those customers needed easy access to the product documentation. Exposing an LLM on the internet raised questions of cost, GPU load and reliability.",
                goal: "Give customers direct access to the right documentation section, with no risk of a made-up answer.",
                role: "Adapted the internal tool and published it.",
                steps: [
                    "Reused the semantic search engine on the software documentation, without any generation step.",
                    "Published on Solutions Industrielles, available to customers."
                ],
                decisions: [
                    { q: "Why no LLM for customers?", a: "For external use, a wrong answer commits the company. A search that returns documentation passages directly is verifiable, instant and uses no GPU. Generation stays for internal use, where users can be supported." }
                ],
                challenges: [
                    "Moving from an internal tool to a customer-facing service."
                ],
                results: "The software documentation is available online to customers.",
                learnings: [
                    "The right amount of AI depends on who uses it and what a mistake costs."
                ]
            }
        },
        {
            id: "af-generator",
            group: "pro",
            types: ["tools"],
            pro: true,
            cover: "docgen",
            image: "",
            link: "",
            logos: ["python", "fastapi"],
            stack: ["Python", "python-docx", "JSON", "FastAPI"],
            fr: {
                title: "Génération automatique d'analyses fonctionnelles",
                label: "Groupe API · module de l'assistant IA",
                period: "2026",
                team: "Développement complet",
                summary: "Générer en un clic le chapitre d'analyse fonctionnelle d'un projet d'automatisme à partir de son fichier de configuration.",
                context: "Pour chaque projet d'automatisme, l'analyse fonctionnelle (un document Word) décrit la structure de l'installation : processus, unités, équipements, modules, entrées et sorties. Une saisie longue, répétitive et source d'erreurs.",
                goal: "Produire un chapitre conforme au modèle de l'entreprise, exact et reproductible.",
                role: "Analyse du format avec les automaticiens, développement et intégration dans l'assistant.",
                steps: [
                    "Lecture et validation du fichier de configuration du projet (JSON) : processus, unités, équipements, modules de contrôle, entrées/sorties.",
                    "Copie du modèle Word de l'entreprise et remplacement, au niveau XML, du seul contenu situé entre le titre ciblé et le titre suivant de même niveau.",
                    "Tableaux générés par processus : unités, équipements, mnémoniques, types d'E/S (ETOR, STOR, EANA, SANA) et synthèse des E/S.",
                    "Intégration au module automatisme de l'assistant : dépôt du fichier, téléchargement du .docx généré."
                ],
                decisions: [
                    { q: "Pourquoi ne pas utiliser le LLM ?", a: "Les données d'entrée sont déjà structurées et le document est technique : chaque mnémonique et chaque comptage d'entrées/sorties doit être exact. Une transformation déterministe donne toujours le même résultat pour le même fichier, sans risque d'hallucination et sans GPU." },
                    { q: "Pourquoi modifier le modèle Word au niveau XML ?", a: "Pour conserver à l'identique la mise en page, les styles et le reste du document. Seul le bloc entre deux titres est remplacé ; tout le reste du modèle reste intact." }
                ],
                challenges: [
                    "Respecter exactement un modèle Word existant, sans le casser."
                ],
                results: "Un chapitre qui demandait une longue saisie manuelle est généré en quelques secondes.",
                learnings: [
                    "Dans un assistant « IA », certaines des fonctions les plus utiles n'utilisent pas d'IA du tout."
                ]
            },
            en: {
                title: "Automatic functional specification generator",
                label: "Groupe API · AI assistant module",
                period: "2026",
                team: "Full development",
                summary: "Generating, in one click, the functional specification chapter of an automation project from its configuration file.",
                context: "For each automation project, the functional specification (a Word document) describes the installation's structure: processes, units, equipment, modules, inputs and outputs. Long, repetitive and error-prone to write by hand.",
                goal: "Produce a chapter that matches the company template, accurate and reproducible.",
                role: "Analysed the format with the automation engineers, developed it and integrated it into the assistant.",
                steps: [
                    "Reading and validating the project configuration file (JSON): processes, units, equipment, control modules, inputs/outputs.",
                    "Copying the company's Word template and replacing, at XML level, only the content between the target heading and the next heading of the same level.",
                    "Tables generated per process: units, equipment, mnemonics, I/O types (ETOR, STOR, EANA, SANA) and an I/O summary.",
                    "Integrated into the assistant's automation module: upload the file, download the generated .docx."
                ],
                decisions: [
                    { q: "Why not use the LLM?", a: "The input data is already structured and the document is technical: every mnemonic and every I/O count must be exact. A deterministic transformation always gives the same result for the same file, with no risk of hallucination and no GPU." },
                    { q: "Why edit the Word template at XML level?", a: "To keep the layout, styles and the rest of the document exactly as they are. Only the block between two headings is replaced; the rest of the template stays intact." }
                ],
                challenges: [
                    "Following an existing Word template exactly, without breaking it."
                ],
                results: "A chapter that took long manual work is generated in seconds.",
                learnings: [
                    "In an \"AI\" assistant, some of the most useful features use no AI at all."
                ]
            }
        },
        {
            id: "digdash",
            group: "pro",
            types: ["data"],
            pro: true,
            cover: "dash",
            image: "",
            link: "",
            logos: ["python", "sqlite"],
            stack: ["DigDash", "SQL", "Python", "Expressions régulières"],
            fr: {
                title: "Tableaux de bord décisionnels (DigDash)",
                label: "Groupe API · aide à la décision",
                period: "Depuis 2026",
                team: "Conception avec les équipes métier",
                summary: "Conception de tableaux de bord métiers pour l'aide à la décision stratégique et managériale, accessibles aussi depuis l'assistant IA.",
                context: "Les managers et plusieurs équipes, notamment commerciales, avaient besoin de visualiser leurs données de façon fiable et à jour pour appuyer leurs décisions.",
                goal: "Des indicateurs justes, compris par ceux qui les utilisent, et faciles à retrouver.",
                role: "Recueil des besoins, choix des indicateurs, conception des tableaux de bord, intégration dans l'assistant.",
                steps: [
                    "Ateliers avec les managers et les équipes pour définir les décisions à éclairer, puis les indicateurs utiles.",
                    "Conception des tableaux de bord dans DigDash pour plusieurs services.",
                    "Intégration dans l'assistant : détection du tableau de bord pertinent à partir de la question et du contexte récent, et lien d'accès généré avec un jeton d'authentification temporaire."
                ],
                decisions: [
                    { q: "Pourquoi un outil de dataviz plutôt qu'un LLM pour les chiffres ?", a: "Un LLM génère du texte de façon probabiliste : il peut mal recopier un chiffre, inventer une tendance ou se tromper dans une somme. Les données chiffrées passent donc par un outil qui calcule à partir de la source. L'assistant se contente d'orienter vers le bon tableau de bord." },
                    { q: "Pourquoi détecter le tableau de bord par mots-clés ?", a: "Le choix se joue sur un vocabulaire métier précis. Des expressions régulières par tableau de bord sont instantanées, explicables et faciles à maintenir, sans mobiliser le GPU." },
                    { q: "Pourquoi un jeton temporaire ?", a: "Le lien ouvre directement le bon tableau de bord sans redemander d'identifiants, sans jamais exposer de mot de passe dans le lien : les identifiants restent côté serveur, dans les variables d'environnement." }
                ],
                challenges: [
                    "Traduire des questions de pilotage en indicateurs mesurables."
                ],
                results: "Des tableaux de bord utilisés par les managers pour leurs décisions, accessibles en une question depuis l'assistant.",
                learnings: [
                    "Un bon tableau de bord commence par la décision qu'il doit éclairer, pas par les données disponibles."
                ]
            },
            en: {
                title: "Decision-making dashboards (DigDash)",
                label: "Groupe API · decision support",
                period: "Since 2026",
                team: "Designed with business teams",
                summary: "Designing business dashboards to support strategic and managerial decisions, also reachable from the AI assistant.",
                context: "Managers and several teams, sales in particular, needed reliable, up-to-date data visualisation to support their decisions.",
                goal: "Accurate indicators, understood by the people who use them, and easy to find.",
                role: "Needs gathering, choice of indicators, dashboard design, integration into the assistant.",
                steps: [
                    "Workshops with managers and teams to define the decisions to support, then the useful indicators.",
                    "Dashboards designed in DigDash for several departments.",
                    "Integration into the assistant: detection of the relevant dashboard from the question and recent context, and an access link generated with a temporary authentication token."
                ],
                decisions: [
                    { q: "Why a dataviz tool rather than an LLM for figures?", a: "An LLM generates text probabilistically: it can copy a figure wrong, invent a trend or get a sum wrong. Numerical data therefore goes through a tool that computes from the source. The assistant only points to the right dashboard." },
                    { q: "Why detect the dashboard with keywords?", a: "The choice depends on precise business vocabulary. Regular expressions per dashboard are instant, explainable and easy to maintain, with no GPU involved." },
                    { q: "Why a temporary token?", a: "The link opens the right dashboard directly without asking for credentials again, and never exposes a password in the link: credentials stay on the server, in environment variables." }
                ],
                challenges: [
                    "Turning management questions into measurable indicators."
                ],
                results: "Dashboards used by managers for their decisions, reachable with one question from the assistant.",
                learnings: [
                    "A good dashboard starts from the decision it must support, not from the available data."
                ]
            }
        },
        {
            id: "monitoring",
            featured: true,
            group: "pro",
            types: ["data", "ml"],
            pro: true,
            cover: "monitor",
            image: "",
            link: "",
            logos: ["python", "streamlit", "pandas", "scikitlearn", "huggingface"],
            stack: ["Python", "Streamlit", "pandas", "scikit-learn", "Sentence Transformers", "Excel"],
            fr: {
                title: "Suivi d'usage et qualité des réponses",
                label: "Groupe API · pilotage de l'assistant IA",
                period: "2026",
                team: "Conception et développement",
                summary: "Un tableau de bord Streamlit pour suivre l'usage, les performances et la qualité de l'assistant, et regrouper automatiquement les questions par sujet.",
                context: "Pour améliorer un outil en production, il faut savoir qui l'utilise, pour quoi faire, avec quels temps de réponse et quelles insatisfactions.",
                goal: "Piloter les évolutions à partir de données plutôt que d'impressions.",
                role: "Conception et développement, définition des indicateurs.",
                steps: [
                    "Exploitation des logs de l'API et des feedbacks (pouce levé ou baissé, commentaire), enregistrés avec la question et la réponse.",
                    "Indicateurs par module et vue d'ensemble, avec variation par rapport à la période précédente de même durée.",
                    "Performances : temps de réponse, distribution, P95, requêtes sans résultat.",
                    "Regroupement automatique des questions par proximité sémantique pour identifier les sujets les plus demandés.",
                    "Accès par rôle (chaque référent ne voit que ses modules), pagination, export Excel."
                ],
                decisions: [
                    { q: "Comment regrouper les questions sans connaître le nombre de sujets ?", a: "Les questions sont encodées avec un modèle d'embeddings multilingue, puis regroupées par clustering hiérarchique agglomératif (distance cosinus, liaison moyenne, seuil de distance 0,72). Contrairement aux k-means, il n'impose pas de fixer le nombre de groupes à l'avance. Les formules de politesse sont retirées avant l'encodage, et chaque groupe est nommé à partir de ses noms les plus fréquents." },
                    { q: "Pourquoi suivre le P95 plutôt que la moyenne ?", a: "La moyenne masque les cas lents. Le 95e centile donne le temps sous lequel passent 95 % des requêtes : c'est ce que ressentent les utilisateurs qui attendent le plus. Un P95 supérieur à 60 secondes sur la recherche détaillée est signalé en alerte." },
                    { q: "Pourquoi comparer à la période précédente ?", a: "Un chiffre seul ne dit pas grand-chose. Comparer à une fenêtre glissante de même durée permet de voir immédiatement si l'usage ou la qualité progresse après une mise à jour." }
                ],
                challenges: [
                    "Des questions courtes et bruitées (formules de politesse, fautes), difficiles à regrouper."
                ],
                results: "Les priorités d'évolution de l'assistant sont choisies à partir des sujets les plus demandés et des réponses mal notées.",
                learnings: [
                    "Le clustering non supervisé est un bon outil d'exploration, à condition de nettoyer les données avant."
                ]
            },
            en: {
                title: "Usage monitoring and answer quality",
                label: "Groupe API · steering the AI assistant",
                period: "2026",
                team: "Design and development",
                summary: "A Streamlit dashboard to monitor the assistant's usage, performance and quality, and automatically group questions by topic.",
                context: "To improve a tool in production, you need to know who uses it, for what, with what response times and what dissatisfaction.",
                goal: "Drive evolutions from data rather than impressions.",
                role: "Design and development, definition of the indicators.",
                steps: [
                    "Use of the API logs and of feedback (thumbs up or down, comment), stored with the question and answer.",
                    "Indicators per module and an overview, with the change versus the previous period of the same length.",
                    "Performance: response times, distribution, P95, queries without results.",
                    "Automatic grouping of questions by semantic similarity to identify the most requested topics.",
                    "Role-based access (each module owner only sees their modules), pagination, Excel export."
                ],
                decisions: [
                    { q: "How to group questions without knowing the number of topics?", a: "Questions are encoded with a multilingual embedding model, then grouped by agglomerative hierarchical clustering (cosine distance, average linkage, distance threshold 0.72). Unlike k-means, it does not require fixing the number of groups in advance. Polite phrases are stripped before encoding, and each group is named from its most frequent nouns." },
                    { q: "Why track P95 rather than the mean?", a: "The mean hides slow cases. The 95th percentile is the time under which 95% of queries complete: it reflects what the users who wait longest experience. A P95 above 60 seconds on detailed search is flagged as an alert." },
                    { q: "Why compare to the previous period?", a: "A figure on its own says little. Comparing to a sliding window of the same length shows immediately whether usage or quality improves after an update." }
                ],
                challenges: [
                    "Short, noisy questions (polite phrases, typos) that are hard to group."
                ],
                results: "Priorities for the assistant are chosen from the most requested topics and the poorly rated answers.",
                learnings: [
                    "Unsupervised clustering is a good exploration tool, provided the data is cleaned first."
                ]
            }
        },
        {
            id: "correctexam",
            featured: true,
            group: "school",
            types: ["genai", "ml"],
            pro: false,
            cover: "exam",
            image: "static/img/projets/correct-exam/mlt-transcription.png",
            link: "",
            logos: ["python", "opencv", "angular", "typescript", "java"],
            stack: ["Python", "OpenCV", "Embeddings", "RAG", "Angular", "TypeScript", "Java"],
            fr: {
                title: "CorrectExam : l'IA pour aider à corriger des copies",
                label: "INSA Rennes · plateforme INRIA / IRISA",
                period: "Sept. 2024 - janv. 2025",
                team: "Projet en équipe, méthode Agile",
                summary: "Reconnaissance d'écriture manuscrite, regroupement des réponses similaires et génération de commentaires pédagogiques.",
                context: "CorrectExam est une plateforme de correction de copies numérisées développée à l'INRIA / IRISA. Notre équipe devait y intégrer des fonctionnalités d'IA pour faire gagner du temps aux correcteurs.",
                goal: "Transcrire les réponses manuscrites, regrouper les réponses qui se ressemblent pour les corriger par lots, et proposer des commentaires à partir du cours.",
                role: "Étude des solutions existantes, développement (Python, Angular/TypeScript, Java), tests et adaptation aux contraintes de la plateforme.",
                steps: [
                    "Segmentation des lignes manuscrites, puis transcription avec des modèles de reconnaissance d'écriture.",
                    "Calcul d'embeddings et regroupement des réponses similaires pour la correction par lots.",
                    "Architecture RAG sur les supports de cours pour ancrer les commentaires générés.",
                    "Génération de suggestions de notes et de commentaires pédagogiques."
                ],
                decisions: [
                    { q: "Pourquoi segmenter les lignes avant de transcrire ?", a: "Les modèles de reconnaissance d'écriture travaillent sur des lignes de texte. Isoler chaque ligne de la copie numérisée (traitement d'image avec OpenCV) donne au modèle une entrée propre et améliore nettement la transcription." },
                    { q: "Pourquoi regrouper les réponses avant de corriger ?", a: "Des réponses proches sur le fond reçoivent souvent la même note et le même commentaire. En représentant chaque réponse transcrite par un embedding et en regroupant les plus proches, le correcteur valide un groupe au lieu de corriger chaque copie séparément." },
                    { q: "Pourquoi un RAG pour les commentaires ?", a: "Un commentaire pédagogique doit renvoyer au cours, pas aux connaissances générales d'un modèle. Le RAG ancre la génération dans les supports du cours." }
                ],
                challenges: [
                    "Des écritures manuscrites très variées.",
                    "Des contraintes de calcul fortes côté client : choisir entre modèles performants mais lourds et solutions plus légères."
                ],
                results: "Une version fonctionnelle intégrée à la plateforme et testée en conditions réelles.",
                learnings: [
                    "Évaluer une solution dans son contexte d'usage, pas seulement sur un jeu de test.",
                    "Travailler à plusieurs sur une base de code existante, en sprints."
                ]
            },
            en: {
                title: "CorrectExam: AI to help grade exam papers",
                label: "INSA Rennes · INRIA / IRISA platform",
                period: "Sep 2024 - Jan 2025",
                team: "Team project, Agile",
                summary: "Handwriting recognition, grouping of similar answers and generation of teaching feedback.",
                context: "CorrectExam is a platform for grading scanned exam papers, developed at INRIA / IRISA. Our team had to add AI features to save graders time.",
                goal: "Transcribe handwritten answers, group similar answers so they can be graded in batches, and suggest comments based on the course material.",
                role: "Reviewing existing solutions, development (Python, Angular/TypeScript, Java), testing and adapting to the platform's constraints.",
                steps: [
                    "Segmented handwritten lines, then transcribed them with handwriting recognition models.",
                    "Computed embeddings and clustered similar answers for batch grading.",
                    "Built a RAG architecture over the course material to ground the generated comments.",
                    "Generated suggested grades and teaching comments."
                ],
                decisions: [
                    { q: "Why segment lines before transcribing?", a: "Handwriting recognition models work on lines of text. Isolating each line of the scanned paper (image processing with OpenCV) gives the model a clean input and clearly improves transcription." },
                    { q: "Why group answers before grading?", a: "Answers that are close in substance often get the same grade and comment. By representing each transcribed answer as an embedding and grouping the closest ones, the grader validates a group instead of grading each paper separately." },
                    { q: "Why RAG for the comments?", a: "Teaching feedback should refer to the course, not to a model's general knowledge. RAG grounds the generation in the course material." }
                ],
                challenges: [
                    "Very different handwriting styles.",
                    "Tight compute constraints on the client side: choosing between powerful but heavy models and lighter solutions."
                ],
                results: "A working version integrated into the platform and tested in real conditions.",
                learnings: [
                    "Evaluating a solution in its real context, not only on a test set.",
                    "Working as a team on an existing codebase, in sprints."
                ]
            }
        },
        {
            id: "gestures",
            featured: true,
            group: "school",
            types: ["ml"],
            pro: false,
            cover: "gesture",
            image: "static/img/projets/amrg/amrg.png",
            link: "",
            logos: ["unity", "python"],
            stack: ["Unity", "Leap Motion", "Classification", "F-score", "Levenshtein"],
            fr: {
                title: "Reconnaissance de gestes en temps réel pour un jeu Unity",
                label: "INSA Rennes · machine learning et interaction",
                period: "Sept. 2025 - janv. 2026",
                team: "Projet en équipe",
                summary: "Contrôler un personnage Unity avec des gestes de la main captés par un Leap Motion, reconnus en continu.",
                context: "Le but était de remplacer les commandes classiques d'un jeu par des gestes de la main, reconnus en continu pendant la partie.",
                goal: "Définir des gestes faciles à distinguer et obtenir une reconnaissance assez fiable et rapide pour jouer en temps réel.",
                role: "Acquisition des données, paramétrage, évaluation des stratégies de fusion et intégration dans Unity.",
                steps: [
                    "Définition de sept gestes.",
                    "Protocole d'acquisition : 30 enregistrements par geste auprès de deux personnes, en faisant varier l'amplitude et la vitesse.",
                    "Conception et comparaison de stratégies de fusion, d'abord en batch puis en flux continu.",
                    "Évaluation avec le F-score et la distance de Levenshtein sur les séquences reconnues.",
                    "Intégration des actions et des animations du personnage dans Unity."
                ],
                decisions: [
                    { q: "Pourquoi deux métriques, F-score et Levenshtein ?", a: "Le F-score (moyenne harmonique de la précision et du rappel) mesure la qualité de la classification geste par geste. Mais en flux continu, la sortie est une séquence : il faut compter les gestes en trop (faux positifs), oubliés et confondus. C'est exactement la distance d'édition de Levenshtein entre la séquence reconnue et la séquence attendue, calculée par programmation dynamique." },
                    { q: "Pourquoi évaluer en batch puis en flux continu ?", a: "En batch, chaque enregistrement contient un seul geste bien délimité : c'est le cas idéal. En flux continu, il faut aussi décider quand un geste commence et finit, et ignorer les mouvements parasites. Une stratégie excellente hors ligne peut s'effondrer en conditions réelles." }
                ],
                challenges: [
                    "Réduire les confusions entre des gestes proches.",
                    "Limiter les faux positifs quand la main bouge sans vouloir faire de geste, tout en restant réactif."
                ],
                results: "La stratégie retenue s'est révélée nettement plus robuste en flux continu et permet de contrôler le jeu avec les gestes.",
                learnings: [
                    "Construire un protocole d'acquisition de données.",
                    "Un bon score hors ligne ne garantit pas un bon comportement en conditions réelles."
                ]
            },
            en: {
                title: "Real-time gesture recognition for a Unity game",
                label: "INSA Rennes · machine learning and interaction",
                period: "Sep 2025 - Jan 2026",
                team: "Team project",
                summary: "Controlling a Unity character with hand gestures captured by a Leap Motion sensor and recognised continuously.",
                context: "The goal was to replace a game's usual controls with hand gestures, recognised continuously during play.",
                goal: "Define gestures that are easy to tell apart and get recognition reliable and fast enough to play in real time.",
                role: "Data collection, parameter tuning, evaluation of fusion strategies and integration into Unity.",
                steps: [
                    "Defined seven gestures.",
                    "Data collection protocol: 30 recordings per gesture from two people, varying amplitude and speed.",
                    "Designed and compared fusion strategies, first in batch mode, then on a continuous stream.",
                    "Evaluated with F-score and Levenshtein distance on the recognised sequences.",
                    "Integrated the character's actions and animations into Unity."
                ],
                decisions: [
                    { q: "Why two metrics, F-score and Levenshtein?", a: "The F-score (harmonic mean of precision and recall) measures classification quality gesture by gesture. But on a continuous stream, the output is a sequence: extra gestures (false positives), missed and confused ones all count. That is exactly the Levenshtein edit distance between the recognised and expected sequences, computed by dynamic programming." },
                    { q: "Why evaluate in batch, then on a stream?", a: "In batch, each recording holds a single, well-delimited gesture: the ideal case. On a stream, you also have to decide when a gesture starts and ends, and ignore stray movements. A strategy that is excellent offline can collapse in real conditions." }
                ],
                challenges: [
                    "Reducing confusion between similar gestures.",
                    "Limiting false positives when the hand moves without meaning to make a gesture, while staying responsive."
                ],
                results: "The chosen strategy proved much more robust on a continuous stream and makes it possible to control the game with gestures.",
                learnings: [
                    "Building a data collection protocol.",
                    "A good offline score does not guarantee good behaviour in real conditions."
                ]
            }
        },
        {
            id: "boardrace",
            featured: true,
            group: "school",
            types: ["genai"],
            pro: false,
            cover: "board",
            image: "static/img/projets/boardrace/boardrace.png",
            link: "",
            logos: ["typescript", "javascript", "html5", "vscode", "meta"],
            stack: ["Langium", "TypeScript", "Node.js", "HTML/JS", "Vitest", "Minimax", "Llama 3.1 8B", "OpenRouter", "Express"],
            fr: {
                title: "BoardRace : un langage pour générer des jeux de plateau",
                label: "INSA Rennes · DSL, génération de code et IA de jeu",
                period: "Sept. 2025 - janv. 2026",
                team: "Projet en équipe",
                summary: "Un langage dédié (DSL) pour décrire des jeux de course sur plateau, compilé en jeu HTML jouable, avec quatre adversaires : aléatoire, glouton, Minimax et un LLM.",
                context: "Les jeux de course (jeu de l'oie, petits chevaux…) partagent une même structure : des cases, des pions, des dés et des cases spéciales. L'idée était de décrire chaque variante dans un court texte plutôt que de recoder un jeu à chaque fois.",
                goal: "Concevoir le langage et son outillage (grammaire, validation, éditeur), générer un jeu jouable à partir d'un programme, et des IA capables de jouer à n'importe quelle variante sans être réécrites.",
                role: "Définition du langage, générateur, moteur de jeu et stratégies d'IA, dont l'agent LLM et sa journalisation.",
                steps: [
                    "Grammaire Langium : joueurs (humain ou IA, couleur, nombre de pions), plateau, huit effets de case (move, jump, lose, repeat, win, pushback, swap et choose, qui combine plusieurs effets), dés au format « 2 d 4 », règle de dépassement (bounce, exact, stop), parcours en serpent ou en spirale, thème.",
                    "Règles de validation affichées dans l'éditeur : 10 à 200 cases, 2 à 6 joueurs, effet win uniquement sur la dernière case. Extension VS Code pour la coloration et les erreurs en direct.",
                    "Métamodèle UML et correspondance documentée avec l'AST généré par Langium.",
                    "CLI de génération : plateau statique ou jeu jouable en HTML/JS, choix de l'IA (random, greedy, minimax, llm), simulation sans interface sur N tours avec graine fixe.",
                    "Moteur générique (coups légaux, application d'un coup sur une copie de l'état, effets, dépassement) partagé par toutes les IA.",
                    "Agent LLM (Llama 3.1 8B via OpenRouter) et serveur Express qui enregistre chaque décision (prompt, réponse brute, latence, validité) pour l'évaluation.",
                    "Cinq variantes d'exemple documentées (dés de 1d6 à 1d12, 2d4, spirale, arrivée exacte) et tests de parsing, de liaison et de validation (Vitest)."
                ],
                decisions: [
                    { q: "Pourquoi un langage plutôt qu'un fichier de configuration ?", a: "Un programme BoardRace se lit comme la règle du jeu : « cell 12 : choose { move +3, repeat } ». Langium fournit l'analyseur, l'AST typé et un serveur de langage : l'éditeur souligne une erreur sur la ligne exacte. Les effets sont composables (un choose contient d'autres effets), ce qui serait lourd à exprimer en JSON." },
                    { q: "Pourquoi des règles de validation en plus de la grammaire ?", a: "La grammaire vérifie la forme, pas le sens : « cell 30 : win » sur un plateau de 63 cases est syntaxiquement correct mais absurde. Le validateur ajoute ces contraintes (taille du plateau, nombre de joueurs, position de la victoire) et rattache l'erreur à la propriété fautive, pour qu'elle s'affiche au bon endroit." },
                    { q: "Que fixer à la compilation, que laisser à l'exécution ?", a: "Ce qui définit le jeu (plateau, cases spéciales, dés, dépassement, parcours) est figé à la génération. Ce qui ne change que l'expérience (thème, couleurs) et la stratégie d'IA restent réglables sans toucher au programme. On compare ainsi plusieurs IA sur une même variante, ou une même IA sur plusieurs variantes." },
                    { q: "Comment une IA joue-t-elle à une variante qu'elle ne connaît pas ?", a: "Les IA ne connaissent pas les règles : elles n'utilisent que l'interface du moteur (coups légaux, application d'un coup, évaluation). Le moteur lit le modèle généré depuis le programme. Une nouvelle variante ne demande donc aucune ligne de code côté IA." },
                    { q: "Comment fonctionne le Minimax, et quelle est sa limite ?", a: "Il explore 2 coups de profondeur : il maximise l'évaluation à son tour et la minimise au tour adverse. L'évaluation vaut 1 000 points par pion arrivé et 10 points par case parcourue. Le hasard est simplifié : au-delà du premier coup, le dé est remplacé par sa valeur moyenne. Un expectiminimax, qui pondère chaque résultat du dé par sa probabilité, serait plus juste mais beaucoup plus coûteux." },
                    { q: "Comment rendre un LLM fiable comme joueur ?", a: "On ne lui demande pas d'inventer un coup : le prompt liste les coups légaux, chacun annoté avec l'effet de la case d'arrivée, et exige une seule ligne de JSON {pawnIndex, toPosition}. La réponse est extraite, puis comparée aux coups légaux. Si elle est invalide, un second prompt propose les options JSON exactes à recopier ; en dernier recours, un coup légal est joué. Température 0,2 et graine fixe pour des parties reproductibles." },
                    { q: "Pourquoi journaliser chaque décision du LLM ?", a: "Pour l'évaluer sur des faits plutôt que sur une impression : chaque tour enregistre le prompt complet, la réponse brute, le coup retenu, la latence (de l'ordre de plusieurs secondes) et la validité. On peut ainsi mesurer le taux de réponses invalides et comparer ses choix à ceux du Minimax." }
                ],
                challenges: [
                    "Bien séparer la compilation du langage et l'exécution du jeu.",
                    "Gérer les effets interactifs (pushback, swap, choose) aussi bien pour un humain que pour une IA.",
                    "Garder des réponses du LLM exploitables malgré des sorties parfois mal formées."
                ],
                results: "Un programme de quelques dizaines de lignes donne un jeu complet et jouable, contre des IA de niveaux différents ; cinq variantes illustrent l'effet des règles (dés, dépassement, parcours) sur le déroulement des parties.",
                learnings: [
                    "Concevoir un langage, c'est aussi concevoir ses messages d'erreur et son outillage.",
                    "Un LLM s'intègre de façon fiable quand on restreint ses choix et qu'on vérifie chacune de ses réponses."
                ]
            },
            en: {
                title: "BoardRace: a language to generate board games",
                label: "INSA Rennes · DSL, code generation and game AI",
                period: "Sep 2025 - Jan 2026",
                team: "Team project",
                summary: "A domain-specific language (DSL) to describe race board games, compiled into a playable HTML game, with four opponents: random, greedy, Minimax and an LLM.",
                context: "Race games (Game of the Goose, Ludo…) share the same structure: cells, pawns, dice and special cells. The idea was to describe each variant in a short text instead of coding a new game every time.",
                goal: "Design the language and its tooling (grammar, validation, editor), generate a playable game from a program, and build AIs that can play any variant without being rewritten.",
                role: "Language definition, generator, game engine and AI strategies, including the LLM agent and its logging.",
                steps: [
                    "Langium grammar: players (human or AI, colour, number of pawns), board, eight cell effects (move, jump, lose, repeat, win, pushback, swap and choose, which combines several effects), dice written as \"2 d 4\", overflow rule (bounce, exact, stop), snake or spiral path, theme.",
                    "Validation rules shown in the editor: 10 to 200 cells, 2 to 6 players, win effect only on the last cell. A VS Code extension for highlighting and live errors.",
                    "UML metamodel and a documented mapping to the AST generated by Langium.",
                    "Generation CLI: static board or playable HTML/JS game, AI choice (random, greedy, minimax, llm), headless simulation over N turns with a fixed seed.",
                    "A generic engine (legal moves, applying a move to a copy of the state, effects, overflow) shared by every AI.",
                    "An LLM agent (Llama 3.1 8B through OpenRouter) and an Express server that records each decision (prompt, raw response, latency, validity) for evaluation.",
                    "Five documented example variants (dice from 1d6 to 1d12, 2d4, spiral, exact finish) and parsing, linking and validation tests (Vitest)."
                ],
                decisions: [
                    { q: "Why a language rather than a configuration file?", a: "A BoardRace program reads like the rules of the game: \"cell 12 : choose { move +3, repeat }\". Langium provides the parser, a typed AST and a language server: the editor underlines an error on the exact line. Effects compose (a choose holds other effects), which would be clumsy in JSON." },
                    { q: "Why validation rules on top of the grammar?", a: "The grammar checks form, not meaning: \"cell 30 : win\" on a 63-cell board is syntactically fine but makes no sense. The validator adds those constraints (board size, number of players, position of the win) and attaches the error to the faulty property so it shows in the right place." },
                    { q: "What is fixed at compile time, what is left to run time?", a: "What defines the game (board, special cells, dice, overflow, path) is fixed at generation. What only changes the experience (theme, colours) and the AI strategy stay adjustable without touching the program. That makes it possible to compare several AIs on one variant, or one AI across variants." },
                    { q: "How does an AI play a variant it has never seen?", a: "The AIs do not know the rules: they only use the engine's interface (legal moves, applying a move, evaluation). The engine reads the model generated from the program. A new variant therefore needs no AI code at all." },
                    { q: "How does Minimax work, and what is its limit?", a: "It searches 2 plies deep: maximising the evaluation on its turn and minimising it on the opponent's. The evaluation is 1,000 points per finished pawn plus 10 points per cell travelled. Chance is simplified: beyond the first move, the die is replaced by its average value. An expectiminimax, weighting each roll by its probability, would be more accurate but far more expensive." },
                    { q: "How do you make an LLM a reliable player?", a: "It is not asked to invent a move: the prompt lists the legal moves, each annotated with the effect of the landing cell, and requires a single line of JSON {pawnIndex, toPosition}. The answer is extracted, then matched against the legal moves. If it is invalid, a second prompt offers the exact JSON options to copy; as a last resort, a legal move is played. Temperature 0.2 and a fixed seed keep games reproducible." },
                    { q: "Why log every LLM decision?", a: "To evaluate it on facts rather than impressions: each turn records the full prompt, the raw response, the chosen move, the latency (several seconds) and validity. That makes it possible to measure the invalid-answer rate and compare its choices with Minimax's." }
                ],
                challenges: [
                    "Keeping language compilation and game execution clearly separate.",
                    "Handling interactive effects (pushback, swap, choose) for human players and AIs alike.",
                    "Keeping LLM answers usable despite occasionally malformed outputs."
                ],
                results: "A program of a few dozen lines gives a complete, playable game against AIs of different strengths; five variants show how the rules (dice, overflow, path) change the way games unfold.",
                learnings: [
                    "Designing a language also means designing its error messages and tooling.",
                    "An LLM integrates reliably when you narrow its choices and check every answer."
                ]
            }
        },
        {
            id: "devops",
            group: "school",
            types: ["eng"],
            pro: false,
            cover: "devops",
            image: "static/img/projets/devops/jeu.png",
            link: "",
            logos: ["gitlab", "docker", "kaniko", "kubernetes", "prometheus", "grafana", "java", "spring", "angular", "cypress"],
            stack: ["GitLab CI/CD", "Maven", "JUnit", "JaCoCo", "SpotBugs", "Checkstyle", "Cypress", "ESLint", "Docker", "Kaniko", "Nginx", "Kubernetes (MicroK8s)", "Prometheus", "Micrometer", "kube-state-metrics", "cAdvisor", "Grafana"],
            fr: {
                title: "Chaîne CI/CD, Kubernetes et supervision",
                label: "INSA Rennes · DevOps",
                period: "Sept. 2025 - janv. 2026",
                team: "Projet en équipe",
                summary: "Une chaîne DevOps complète autour d'un jeu du taquin (Spring Boot + Angular) : tests bloquants, images construites par Kaniko, déploiement Kubernetes et tableau de bord Grafana.",
                context: "Nous partions d'une application écrite dans un autre cours : un jeu du taquin, avec une API REST Spring Boot (Java 21, base H2) et une interface Angular (historique annuler / refaire, motifs à assembler, meilleurs scores). Consigne : ne rien changer au fonctionnel et construire toute la chaîne autour.",
                goal: "Qu'un commit passe seul par les tests, la construction, la publication des images et le déploiement, et que l'application déployée soit observable.",
                role: "Travail sur toute la chaîne avec l'équipe : pipeline GitLab, images Docker, manifestes Kubernetes, tests et supervision.",
                steps: [
                    "Back-end : tests JUnit sur les contrôleurs, services et modèles, couverture JaCoCo avec un seuil de 70 % vérifié au build, SpotBugs, Checkstyle et analyse des dépendances (OWASP).",
                    "Front-end : 36 tests de bout en bout Cypress (partie, scores, fin de partie, services), ESLint et mesure de couverture (nyc).",
                    "Pipeline GitLab en deux étapes : build (Maven sur Temurin 21, Angular sur Node 22 avec cache) puis publication des images dans le registre GitLab avec Kaniko.",
                    "Images : back-end sur un JRE Alpine ; front-end en multi-stage (build Node, puis Nginx Alpine qui ne sert que les fichiers statiques).",
                    "Kubernetes (MicroK8s) : namespace dédié, 2 réplicas du front-end exposés en NodePort, back-end en ClusterIP, accès au registre par secret.",
                    "Supervision : métriques applicatives Micrometer (@Timed sur les contrôleurs, /actuator/prometheus), Prometheus avec découverte des pods, kube-state-metrics, cAdvisor et un tableau de bord Grafana (CPU, mémoire, réseau, redémarrages par pod).",
                    "Analyse de sécurité du front-end (XSS, validation des entrées, falsification des requêtes)."
                ],
                decisions: [
                    { q: "Pourquoi Kaniko pour construire les images ?", a: "Kaniko construit et pousse une image sans démon Docker ni conteneur privilégié. Sur un runner de CI partagé, cela évite le Docker-in-Docker et ses risques de sécurité. Les identifiants du registre sont injectés par les variables de CI au moment du job, jamais écrits dans le dépôt." },
                    { q: "Pourquoi un seuil de couverture qui bloque le build ?", a: "Un rapport de couverture que personne ne lit ne change rien. Le plugin JaCoCo vérifie le ratio de lignes couvertes pendant la phase verify de Maven : sous 70 %, le build échoue et l'image n'est pas publiée." },
                    { q: "Pourquoi ne reconstruire une image que si son code a changé ?", a: "Chaque job Kaniko a des règles : il ne tourne pas si seuls la documentation ou les tests ont changé, et ne se déclenche que pour les modifications de son propre dossier (backend/ ou frontend/). On évite de republier une image identique et d'occuper le runner pour rien." },
                    { q: "Pourquoi une image front-end en deux étapes ?", a: "La première étape contient Node, npm et toutes les dépendances de build ; la seconde ne garde que le résultat compilé dans un Nginx Alpine. L'image finale est beaucoup plus légère et n'embarque aucun outil de développement. Nginx renvoie index.html pour toute route inconnue, sinon un rafraîchissement sur /grid/... donnerait une 404." },
                    { q: "Pourquoi 2 réplicas pour le front-end mais un seul pour le back-end ?", a: "Le front-end est sans état : deux réplicas permettent une mise à jour progressive sans coupure. Le back-end garde ses données dans une base H2 en mémoire : deux réplicas auraient chacun leurs propres scores, et le joueur verrait des résultats différents selon le pod atteint." },
                    { q: "Comment Prometheus trouve-t-il les pods à surveiller ?", a: "Par découverte Kubernetes plutôt que par une liste fixe. Chaque pod déclare dans ses annotations s'il doit être collecté, sur quel port et quel chemin ; des règles de relabeling construisent l'adresse cible à partir de ces annotations. Un nouveau réplica est donc collecté automatiquement, toutes les 15 secondes." },
                    { q: "Pourquoi superviser à plusieurs niveaux ?", a: "Une panne se lit rarement à un seul endroit : cAdvisor donne la consommation des conteneurs, kube-state-metrics l'état du cluster (pods, redémarrages), Micrometer le comportement de l'application (temps de réponse des routes). Le tableau de bord Grafana croise les trois, avec par exemple le CPU calculé comme rate(container_cpu_usage_seconds_total[5m]) par pod." }
                ],
                challenges: [
                    "Faire tenir ensemble beaucoup de briques : Maven, Node, Kaniko, registre, MicroK8s, Prometheus, Grafana.",
                    "Donner au cluster l'accès au registre privé (secret Kubernetes de type dockerconfigjson).",
                    "Écrire les règles de relabeling Prometheus sans casser la collecte des autres cibles."
                ],
                results: "Un commit déclenche les tests, la construction et la publication des images ; l'application tourne sur Kubernetes et son état se lit dans Grafana.",
                learnings: [
                    "Une chaîne CI/CD se conçoit comme du code : règles, artefacts et cache comptent autant que les scripts.",
                    "Choisir le nombre de réplicas oblige à savoir où vit l'état de l'application."
                ]
            },
            en: {
                title: "CI/CD pipeline, Kubernetes and monitoring",
                label: "INSA Rennes · DevOps",
                period: "Sep 2025 - Jan 2026",
                team: "Team project",
                summary: "A complete DevOps chain around a sliding-puzzle game (Spring Boot + Angular): blocking tests, images built with Kaniko, Kubernetes deployment and a Grafana dashboard.",
                context: "We started from an application written in another course: a sliding-puzzle game with a Spring Boot REST API (Java 21, H2 database) and an Angular interface (undo / redo history, patterns to assemble, high scores). The brief: change nothing functional and build the whole chain around it.",
                goal: "Have a commit go through tests, build, image publishing and deployment on its own, with the deployed application observable.",
                role: "Worked with the team across the whole chain: GitLab pipeline, Docker images, Kubernetes manifests, tests and monitoring.",
                steps: [
                    "Back end: JUnit tests on controllers, services and models, JaCoCo coverage with a 70% threshold checked at build time, SpotBugs, Checkstyle and dependency scanning (OWASP).",
                    "Front end: 36 Cypress end-to-end tests (game, scores, end of game, services), ESLint and coverage measurement (nyc).",
                    "Two-stage GitLab pipeline: build (Maven on Temurin 21, Angular on Node 22 with caching), then images published to the GitLab registry with Kaniko.",
                    "Images: back end on an Alpine JRE; front end as a multi-stage build (Node build, then an Alpine Nginx that only serves static files).",
                    "Kubernetes (MicroK8s): dedicated namespace, 2 front-end replicas exposed as NodePort, back end as ClusterIP, registry access through a secret.",
                    "Monitoring: Micrometer application metrics (@Timed on controllers, /actuator/prometheus), Prometheus with pod discovery, kube-state-metrics, cAdvisor and a Grafana dashboard (CPU, memory, network, restarts per pod).",
                    "Security review of the front end (XSS, input validation, request tampering)."
                ],
                decisions: [
                    { q: "Why Kaniko to build images?", a: "Kaniko builds and pushes an image without a Docker daemon or privileged container. On a shared CI runner, that avoids Docker-in-Docker and its security risks. Registry credentials are injected from CI variables at job time, never written into the repository." },
                    { q: "Why a coverage threshold that fails the build?", a: "A coverage report nobody reads changes nothing. The JaCoCo plugin checks the covered-line ratio during Maven's verify phase: below 70%, the build fails and no image is published." },
                    { q: "Why rebuild an image only when its code changed?", a: "Each Kaniko job has rules: it does not run when only documentation or tests changed, and only triggers on changes to its own folder (backend/ or frontend/). That avoids republishing an identical image and tying up the runner for nothing." },
                    { q: "Why a two-stage front-end image?", a: "The first stage holds Node, npm and all build dependencies; the second keeps only the compiled output in an Alpine Nginx. The final image is much lighter and ships no development tools. Nginx returns index.html for unknown routes, otherwise refreshing on /grid/... would give a 404." },
                    { q: "Why 2 front-end replicas but a single back end?", a: "The front end is stateless: two replicas allow rolling updates without downtime. The back end keeps its data in an in-memory H2 database: two replicas would each hold their own scores, and players would see different results depending on which pod answered." },
                    { q: "How does Prometheus find the pods to scrape?", a: "Through Kubernetes service discovery rather than a fixed list. Each pod declares in its annotations whether to scrape it, on which port and path; relabeling rules build the target address from those annotations. A new replica is therefore scraped automatically, every 15 seconds." },
                    { q: "Why monitor at several levels?", a: "An outage rarely shows in a single place: cAdvisor gives container usage, kube-state-metrics the cluster state (pods, restarts), Micrometer the application's behaviour (route response times). The Grafana dashboard brings the three together, for instance CPU computed as rate(container_cpu_usage_seconds_total[5m]) per pod." }
                ],
                challenges: [
                    "Getting many components to work together: Maven, Node, Kaniko, registry, MicroK8s, Prometheus, Grafana.",
                    "Giving the cluster access to the private registry (a dockerconfigjson Kubernetes secret).",
                    "Writing Prometheus relabeling rules without breaking the other scrape targets."
                ],
                results: "A commit triggers tests, build and image publishing; the application runs on Kubernetes and its state can be read in Grafana.",
                learnings: [
                    "A CI/CD pipeline is designed like code: rules, artifacts and caching matter as much as the scripts.",
                    "Choosing a replica count forces you to know where the application's state lives."
                ]
            }
        },
        {
            id: "traitement-images",
            group: "school",
            types: ["ml"],
            pro: false,
            cover: "scan",
            image: "static/img/projets/traitement-images/chaine.png",
            link: "",
            logos: ["cplusplus", "opencv", "cmake"],
            stack: ["C++17", "OpenCV 4.8", "CMake", "SIFT", "Canny", "Contours"],
            fr: {
                title: "Extraction et classement de dessins sur des formulaires scannés",
                label: "INSA Rennes · traitement d'images",
                period: "Sept. 2024 - janv. 2025",
                team: "Projet en équipe",
                summary: "Une chaîne OpenCV en C++ qui redresse des formulaires scannés, lit leur identifiant binaire, découpe chaque dessin fait à la main et le range selon le symbole de sa rangée.",
                context: "Une base de scans de formulaires : sept rangées par feuille, chacune avec une icône imprimée (feu, police, inondation, personne… 14 types), parfois une taille demandée (small, medium, large), puis cinq cases où des personnes ont reproduit l'icône à la main. Des croix de calibrage et un code binaire identifient la feuille. Certains scans sont décalés, tournés ou incomplets.",
                goal: "Extraire automatiquement chaque dessin, savoir quelle icône et quelle taille il représente, et l'enregistrer avec ses informations (formulaire, rangée, colonne).",
                role: "Conception et développement de la chaîne en équipe : redressement, découpage, détection des cases, reconnaissance des icônes et export.",
                steps: [
                    "Détection des croix de calibrage (flou gaussien, seuillage inversé, contours de 100 à 120 px) et recalage de la feuille par une translation qui ramène la croix sur une position de référence.",
                    "Lecture de l'identifiant : dans le rectangle du haut, chaque petit carré noir vaut 1 et les espaces entre carrés sont convertis en 0 selon leur largeur.",
                    "Découpage des sept rangées puis, dans chacune, de la zone de l'icône et de celle de la taille.",
                    "Détection des cases : contours de Canny sur chaque canal, approximation polygonale, puis filtres (4 sommets, convexité, angles proches de 90°, surface attendue) et suppression des doublons par IoU.",
                    "Reconnaissance de l'icône et de la taille par SIFT face aux 14 icônes et 3 tailles de référence.",
                    "Export : un dossier par type, chaque imagette accompagnée d'un fichier texte (label, formulaire, rangée, colonne, taille) ; les pages de texte manuscrit sont gardées entières."
                ],
                decisions: [
                    { q: "Pourquoi s'appuyer sur les croix de calibrage ?", a: "Tout le découpage suit la géométrie du formulaire : si la feuille est décalée de quelques millimètres, chaque rangée est mal coupée. Les croix sont faciles à isoler (taille connue, contraste fort). On calcule l'écart entre la croix trouvée et sa position théorique, puis on applique une translation avec warpAffine. Limite assumée : la rotation n'est pas corrigée, ce qui explique une partie des erreurs sur les scans tournés." },
                    { q: "Pourquoi SIFT pour reconnaître les icônes ?", a: "L'icône scannée n'a ni la même taille ni exactement le même tracé que l'image de référence. SIFT décrit des points caractéristiques invariants à l'échelle et à une légère rotation. Après flou et binarisation, on apparie les descripteurs (force brute, distance L2, vérification croisée), on garde les bons appariements (distance au plus 2 fois la meilleure) et le score est leur proportion. L'icône de référence au meilleur score l'emporte." },
                    { q: "Comment distinguer une case d'un dessin ?", a: "On approxime chaque contour par un polygone (tolérance de 2 % du périmètre) et on ne garde que ceux à 4 sommets, convexes, dont tous les angles sont proches de l'angle droit : le cosinus maximal entre deux côtés doit rester sous 0,3. Un filtre sur la surface écarte ensuite les petits carrés dessinés et les grands cadres." },
                    { q: "Pourquoi une suppression des doublons par IoU ?", a: "La détection tourne sur les trois canaux de couleur, donc une même case est souvent trouvée plusieurs fois avec des contours légèrement différents. Deux boîtes dont l'intersection dépasse la moitié de leur union (IoU > 0,5) sont considérées comme la même case." },
                    { q: "Comment lire le numéro binaire ?", a: "Le code est une suite de carrés pleins et de vides. On seuille le rectangle, on trie les carrés de gauche à droite, chaque carré donne un 1 et chaque espace donne autant de 0 qu'il contient de largeurs de carré (environ 55 px). On en déduit l'auteur et le numéro de page, donc aussi le type de page (avec ou sans taille, ou page de texte)." }
                ],
                challenges: [
                    "Des icônes visuellement proches (Person et Injury, FireBrigade et Accident) que SIFT confond.",
                    "Des paramètres différents entre l'échantillon et la base de test (position et hauteur des rangées).",
                    "Des scans de qualité variable : rotation, zone manquante, décalage."
                ],
                results: "Sur l'échantillon (30 feuilles) : 83 % de bonnes reconnaissances d'icône et de taille, 94 % pour l'identifiant du formulaire. Sur la base de test (12 feuilles) : 84,5 % et 92 %. La détection des cases est très fiable.",
                learnings: [
                    "Un traitement d'images classique, bien paramétré, va loin sans apprentissage, mais chaque seuil est un choix à justifier.",
                    "Mesurer les résultats par type d'erreur montre où porter l'effort (ici, les icônes qui se ressemblent)."
                ]
            },
            en: {
                title: "Extracting and sorting drawings from scanned forms",
                label: "INSA Rennes · image processing",
                period: "Sep 2024 - Jan 2025",
                team: "Team project",
                summary: "A C++ OpenCV pipeline that straightens scanned forms, reads their binary ID, cuts out each hand-drawn sketch and files it under the symbol of its row.",
                context: "A set of scanned forms: seven rows per sheet, each with a printed icon (fire, police, flood, person… 14 types), sometimes a requested size (small, medium, large), then five boxes where people redrew the icon by hand. Calibration crosses and a binary code identify the sheet. Some scans are shifted, rotated or incomplete.",
                goal: "Automatically extract each drawing, know which icon and size it represents, and save it with its metadata (form, row, column).",
                role: "Designed and built the pipeline as a team: straightening, cutting, box detection, icon recognition and export.",
                steps: [
                    "Calibration cross detection (Gaussian blur, inverted threshold, 100 to 120 px contours) and sheet alignment with a translation that brings the cross back to a reference position.",
                    "ID reading: in the top rectangle, each small black square is a 1 and gaps between squares become 0s according to their width.",
                    "Cutting the seven rows, then the icon area and size area inside each.",
                    "Box detection: Canny edges on each channel, polygon approximation, then filters (4 vertices, convexity, angles close to 90°, expected area) and duplicate removal by IoU.",
                    "Icon and size recognition with SIFT against the 14 reference icons and 3 reference sizes.",
                    "Export: one folder per type, each thumbnail with a text file (label, form, row, column, size); handwritten text pages are kept whole."
                ],
                decisions: [
                    { q: "Why rely on the calibration crosses?", a: "All cutting follows the form's geometry: if the sheet is shifted by a few millimetres, every row is cut wrong. The crosses are easy to isolate (known size, strong contrast). We compute the offset between the detected cross and its theoretical position, then apply a translation with warpAffine. Known limitation: rotation is not corrected, which explains part of the errors on rotated scans." },
                    { q: "Why SIFT to recognise icons?", a: "The scanned icon has neither the same size nor exactly the same lines as the reference image. SIFT describes keypoints that are invariant to scale and slight rotation. After blurring and binarising, descriptors are matched (brute force, L2 distance, cross-check), good matches are kept (distance at most twice the best one) and the score is their proportion. The reference icon with the best score wins." },
                    { q: "How to tell a box from a drawing?", a: "Each contour is approximated by a polygon (2% of the perimeter as tolerance) and only those with 4 vertices, convex, with every angle close to a right angle are kept: the maximum cosine between two sides must stay below 0.3. An area filter then rules out small drawn squares and large frames." },
                    { q: "Why remove duplicates with IoU?", a: "Detection runs on all three colour channels, so the same box is often found several times with slightly different contours. Two boxes whose intersection exceeds half of their union (IoU > 0.5) are treated as the same box." },
                    { q: "How is the binary number read?", a: "The code is a sequence of filled squares and gaps. The rectangle is thresholded, squares are sorted left to right, each square gives a 1 and each gap gives as many 0s as it holds square widths (about 55 px). That gives the author and page number, and therefore the page type (with or without size, or a text page)." }
                ],
                challenges: [
                    "Visually similar icons (Person and Injury, FireBrigade and Accident) that SIFT confuses.",
                    "Different parameters between the sample and the test set (row position and height).",
                    "Scans of uneven quality: rotation, missing areas, offsets."
                ],
                results: "On the sample (30 sheets): 83% correct icon and size recognition, 94% for the form ID. On the test set (12 sheets): 84.5% and 92%. Box detection is very reliable.",
                learnings: [
                    "Well-tuned classical image processing goes a long way without learning, but every threshold is a choice to justify.",
                    "Measuring results by error type shows where to focus (here, look-alike icons)."
                ]
            }
        },
        {
            id: "tfidf",
            group: "school",
            types: ["search"],
            pro: false,
            cover: "tfidf",
            image: "",
            link: "",
            logos: ["python", "spacy", "numpy"],
            stack: ["Python", "TF-IDF", "spaCy", "NumPy", "NLP"],
            fr: {
                title: "Moteur de recherche TF-IDF sur le corpus CISI",
                label: "INSA Rennes · recherche d'information",
                period: "Janv. 2024 - mai 2024",
                team: "Projet de cours",
                summary: "Un moteur de recherche écrit à partir des bases du modèle vectoriel, sur 1 460 documents, sans bibliothèque qui fait tout.",
                context: "Un projet pour comprendre concrètement les fondements de la recherche d'information.",
                goal: "Construire toute la chaîne : prétraitement, indexation et recherche par similarité TF-IDF.",
                role: "Implémentation du prétraitement, du vocabulaire, des calculs TF et IDF et de la recherche.",
                steps: [
                    "Nettoyage et normalisation des 1 460 documents du corpus CISI.",
                    "Suppression des mots vides et lemmatisation avec spaCy.",
                    "Construction du vocabulaire et représentation vectorielle des documents.",
                    "Calcul et normalisation des vecteurs TF-IDF.",
                    "Classement des documents par similarité pour une requête."
                ],
                decisions: [
                    { q: "Les mathématiques derrière TF-IDF", a: "Le poids d'un terme t dans un document d vaut tf(t, d) × log(N / df(t)), où N est le nombre de documents et df(t) le nombre de documents contenant t : un terme pèse lourd s'il est fréquent dans le document mais rare dans le corpus. Chaque document devient un vecteur dans l'espace des termes. Après normalisation en norme L2, la pertinence d'un document pour une requête est le cosinus de l'angle entre leurs vecteurs, c'est-à-dire un simple produit scalaire." },
                    { q: "Pourquoi lemmatiser ?", a: "Sans lemmatisation, « documents » et « document » sont deux dimensions différentes et ne se rencontrent jamais. Ramener les mots à leur lemme réduit la taille du vocabulaire et augmente le rappel, au prix d'un temps de prétraitement plus long." }
                ],
                challenges: [
                    "Passer d'un texte brut à une représentation exploitable.",
                    "Mesurer l'effet de chaque étape de prétraitement sur les résultats."
                ],
                results: "Un moteur de recherche fonctionnel, construit à partir des principes de base. J'ai réutilisé ces notions directement dans la [recherche hybride de l'assistant IA](#projet/assistant-ia).",
                learnings: [
                    "Pourquoi une recherche lexicale reste utile à côté des embeddings."
                ]
            },
            en: {
                title: "TF-IDF search engine on the CISI corpus",
                label: "INSA Rennes · information retrieval",
                period: "Jan 2024 - May 2024",
                team: "Course project",
                summary: "A search engine built from the basics of the vector space model, over 1,460 documents, without a do-everything library.",
                context: "A project to really understand the foundations of information retrieval.",
                goal: "Build the whole chain: preprocessing, indexing and TF-IDF similarity search.",
                role: "Implemented preprocessing, vocabulary building, TF and IDF computation and the search itself.",
                steps: [
                    "Cleaned and normalised the 1,460 documents of the CISI corpus.",
                    "Removed stop words and lemmatised with spaCy.",
                    "Built the vocabulary and the vector representation of documents.",
                    "Computed and normalised TF-IDF vectors.",
                    "Ranked documents by similarity for a given query."
                ],
                decisions: [
                    { q: "The maths behind TF-IDF", a: "The weight of a term t in a document d is tf(t, d) × log(N / df(t)), where N is the number of documents and df(t) the number of documents containing t: a term weighs a lot if it is frequent in the document but rare in the corpus. Each document becomes a vector in term space. After L2 normalisation, a document's relevance to a query is the cosine of the angle between their vectors, i.e. a simple dot product." },
                    { q: "Why lemmatise?", a: "Without lemmatisation, \"documents\" and \"document\" are two different dimensions that never meet. Reducing words to their lemma shrinks the vocabulary and increases recall, at the cost of longer preprocessing." }
                ],
                challenges: [
                    "Going from raw text to a usable representation.",
                    "Measuring the effect of each preprocessing step on the results."
                ],
                results: "A working search engine built from first principles. I reused these ideas directly in the [AI assistant's hybrid search](#projet/assistant-ia).",
                learnings: [
                    "Why lexical search is still useful alongside embeddings."
                ]
            }
        },
        {
            id: "portfolio-chatbot",
            group: "perso",
            types: ["genai", "search"],
            pro: false,
            cover: "chat",
            image: "static/img/projets/portfolio-chatbot/assistant.png",
            link: "",
            logos: ["python", "fastapi", "mistral", "numpy", "javascript"],
            stack: ["Python", "FastAPI", "Mistral", "mistral-embed", "NumPy", "JavaScript"],
            fr: {
                title: "L'assistant de ce portfolio",
                label: "Projet personnel",
                period: "2026",
                team: "Projet personnel",
                summary: "Un RAG qui répond aux questions sur mon parcours à partir du contenu de ce site, avec ses sources. Essayez-le en haut de la page ou en bas à droite.",
                context: "Je voulais qu'un recruteur puisse poser directement une question plutôt que de chercher dans chaque page, et appliquer à mon propre site ce que je fais au travail.",
                goal: "Des réponses courtes, justes et sourcées, sans jamais inventer une compétence ou un résultat.",
                role: "Conception et développement en solo : découpage du contenu, API, prompt, interface.",
                steps: [
                    "Le contenu du site est découpé en passages courts, exportés par un script depuis le même fichier que le site : une seule source à maintenir.",
                    "API FastAPI : embeddings des passages avec mistral-embed, recherche par similarité cosinus, génération avec un modèle Mistral.",
                    "Consignes strictes : répondre uniquement à partir des passages retrouvés, dire quand l'information manque.",
                    "Historique récent pris en compte pour les questions de suivi, réponse dans la langue du site, mise en forme Markdown sécurisée côté navigateur.",
                    "La clé API reste côté serveur ; le site statique n'appelle que mon API, avec une liste d'origines autorisées (CORS)."
                ],
                decisions: [
                    { q: "Pourquoi pas de base vectorielle ?", a: "Une centaine de passages : une matrice NumPy et un produit scalaire sur des vecteurs normalisés suffisent. Une base vectorielle ajouterait un service à héberger sans aucun gain." },
                    { q: "Comment gérer les limites de l'API ?", a: "L'offre gratuite de Mistral limite le débit. Les embeddings du portfolio sont mis en cache sur disque avec une empreinte du contenu, et ne sont recalculés que si le contenu change ; les appels réessaient avec un délai qui double à chaque tentative (1, 2, 4 s) en cas d'erreur 429." }
                ],
                challenges: [
                    "Empêcher le modèle d'« embellir » : il a tendance à ajouter des compétences plausibles mais fausses.",
                    "Un site public : aucune clé ne doit se retrouver dans le JavaScript."
                ],
                results: "L'assistant répond à partir du portfolio en français comme en anglais, et affiche les sections utilisées pour que l'on puisse vérifier.",
                learnings: [
                    "Les consignes de refus comptent autant que les consignes de réponse."
                ]
            },
            en: {
                title: "The assistant on this portfolio",
                label: "Personal project",
                period: "2026",
                team: "Personal project",
                summary: "A RAG system that answers questions about my background from the content of this site, with sources. Try it at the top of the page or at the bottom right.",
                context: "I wanted a recruiter to be able to ask a question directly instead of digging through every section, and to apply to my own site what I do at work.",
                goal: "Short, accurate answers with sources, never inventing a skill or result.",
                role: "Designed and built on my own: content chunking, API, prompt and interface.",
                steps: [
                    "The site content is split into short passages, exported by a script from the same file the site uses: a single source to maintain.",
                    "FastAPI backend: passages embedded with mistral-embed, cosine similarity search, generation with a Mistral model.",
                    "Strict instructions: answer only from the retrieved passages, say when information is missing.",
                    "Recent history used for follow-up questions, answers in the site's language, Markdown formatting rendered safely in the browser.",
                    "The API key stays on the server; the static site only calls my API, restricted to a list of allowed origins (CORS)."
                ],
                decisions: [
                    { q: "Why no vector database?", a: "Around a hundred passages: a NumPy matrix and a dot product over normalised vectors are enough. A vector database would add a service to host for no gain." },
                    { q: "How are API limits handled?", a: "Mistral's free tier limits throughput. The portfolio's embeddings are cached on disk with a content fingerprint and only recomputed when the content changes; calls retry with a delay that doubles each time (1, 2, 4 s) on a 429 error." }
                ],
                challenges: [
                    "Stopping the model from \"embellishing\": it tends to add plausible but false skills.",
                    "A public site: no key can ever end up in the JavaScript."
                ],
                results: "The assistant answers from the portfolio in French and English, and shows which sections it used so answers can be checked.",
                learnings: [
                    "Instructions on when to refuse matter as much as instructions on how to answer."
                ]
            }
        }
    ],

    /* ------------------------------------------------------------------ */
    /* Compétences                                                         */
    /* Chaque élément : "texte", { fr, en }, ou { label, logo }            */
    /* (logo = fichier de static/img/logos/, sans .svg)                     */
    /* ------------------------------------------------------------------ */
    skills: [
        // Une ligne par domaine : outils (avec logo, dans static/img/logos/) + notions
        {
            name: { fr: "IA & ML", en: "AI & ML" },
            tools: [
                { label: "PyTorch", logo: "pytorch" }, { label: "Transformers", logo: "huggingface" },
                { label: "scikit-learn", logo: "scikitlearn" }, { label: "Mistral", logo: "mistral" },
                { label: "spaCy", logo: "spacy" }, { label: "OpenCV", logo: "opencv" }
            ],
            items: {
                fr: ["RAG", "recherche hybride", "embeddings", "cross-encoders", "quantification 4 bits", "clustering", "classification", "vision (SIFT, contours)"],
                en: ["RAG", "hybrid search", "embeddings", "cross-encoders", "4-bit quantisation", "clustering", "classification", "vision (SIFT, contours)"]
            }
        },
        {
            name: { fr: "Data & BI", en: "Data & BI" },
            tools: [
                { label: "pandas", logo: "pandas" }, { label: "NumPy", logo: "numpy" },
                { label: "Jupyter", logo: "jupyter" }, { label: "Streamlit", logo: "streamlit" }
            ],
            items: {
                fr: ["DigDash", "tableaux de bord métiers", "suivi d'usage"],
                en: ["DigDash", "business dashboards", "usage analytics"]
            }
        },
        {
            name: { fr: "Langages & web", en: "Languages & web" },
            tools: [
                { label: "Python", logo: "python" }, { label: "SQL", logo: "sqlite" },
                { label: "JavaScript", logo: "javascript" }, { label: "TypeScript", logo: "typescript" },
                { label: "FastAPI", logo: "fastapi" }
            ],
            items: {
                fr: ["Java / Spring Boot", "C / C++", "HTML / CSS", "Angular", "Unity", "Langium"],
                en: ["Java / Spring Boot", "C / C++", "HTML / CSS", "Angular", "Unity", "Langium"]
            }
        },
        {
            name: { fr: "MLOps & infra", en: "MLOps & infra" },
            tools: [
                { label: "Docker", logo: "docker" }, { label: "Kubernetes", logo: "kubernetes" },
                { label: "GitLab CI", logo: "gitlab" }, { label: "Git", logo: "git" }, { label: "Grafana", logo: "grafana" }
            ],
            items: {
                fr: ["Kaniko", "Prometheus", "JUnit / Cypress", "services Windows (NSSM)"],
                en: ["Kaniko", "Prometheus", "JUnit / Cypress", "Windows services (NSSM)"]
            }
        },
        {
            name: { fr: "Maths", en: "Maths" },
            items: {
                fr: ["algèbre linéaire (cosinus, normes)", "statistiques (centiles, normalisation)", "précision / rappel / F-score", "programmation dynamique", "Minimax"],
                en: ["linear algebra (cosine, norms)", "statistics (percentiles, normalisation)", "precision / recall / F-score", "dynamic programming", "Minimax"]
            }
        },
        {
            name: { fr: "Méthodes", en: "Methods" },
            items: {
                fr: ["gestion de projet", "recueil des besoins", "travail transversal avec les équipes métier et techniques", "Agile / Scrum", "documentation", "vulgarisation (Cafés IA)"],
                en: ["project management", "requirements gathering", "cross-functional work with business and technical teams", "Agile / Scrum", "documentation", "explaining AI (AI Cafés)"]
            }
        },
        {
            name: { fr: "Sécurité", en: "Security" },
            items: {
                fr: ["EDR (SentinelOne)", "détection réseau (DarkTrace)", "audit Active Directory (ORADAD)", "CVSS"],
                en: ["EDR (SentinelOne)", "network detection (DarkTrace)", "Active Directory audit (ORADAD)", "CVSS"]
            }
        }
    ],


    /* ------------------------------------------------------------------ */
    /* Formation et langues                                                */
    /* ------------------------------------------------------------------ */
    education: [
        {
            school: "INSA Rennes",
            fr: { degree: "Diplôme d'ingénieure en informatique, parcours Intelligence Artificielle · semestre Erasmus à la Munster Technological University (Cork, Irlande)", period: "2021 - 2026", place: "Rennes" },
            en: { degree: "Master's-level engineering degree in Computer Science, Artificial Intelligence track · Erasmus semester at Munster Technological University (Cork, Ireland)", period: "2021 - 2026", place: "Rennes, France" }
        }
    ],

    certifications: [
        { name: "TOEIC", issuer: "ETS", date: { fr: "Janv. 2026", en: "Jan 2026" } },
        { name: "First Certificate in English (B2)", issuer: "Cambridge English", date: { fr: "Mai 2021", en: "May 2021" } },
        { name: "Goethe-Zertifikat B2", issuer: "Goethe-Institut", date: { fr: "Sept. 2021", en: "Sep 2021" } }
    ],

    languages: [
        { fr: { name: "Français", level: "langue maternelle" }, en: { name: "French", level: "native" } },
        { fr: { name: "Anglais", level: "B2+ (TOEIC, First)" }, en: { name: "English", level: "B2+ (TOEIC, First)" } },
        { fr: { name: "Allemand", level: "B2 (Goethe-Zertifikat)" }, en: { name: "German", level: "B2 (Goethe-Zertifikat)" } }
    ],

    hobbies: [
        {
            fr: { name: "Enseignement / tutorat", text: "Accompagnement scolaire individuel en mathématiques, auprès d'élèves de collège et de lycée." },
            en: { name: "Teaching / tutoring", text: "One-to-one maths tutoring for secondary school pupils (middle and high school)." }
        }
    ]
};