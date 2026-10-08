# Portfolio · Jeanne Dubois

Site statique (HTML, CSS, JavaScript sans framework), hébergeable sur GitHub Pages.
Bilingue français / anglais, thème clair par défaut et thème sombre.

## Organisation

```text
index.html                 structure de la page (textes FR par défaut)
static/css/style.css       styles, couleurs des deux thèmes (variables en haut du fichier)
static/js/config.js        e-mail, LinkedIn, GitHub, CV, photo, Formspree, URL du chatbot
static/js/content.js       TOUT le contenu FR/EN : expériences, projets, compétences, formation...
static/js/main.js          langue, thème, affichage, fiches projets, filtres, formulaire
static/js/chatbot.js       interface de l'assistant
static/cv/                 CV en PDF
static/img/                favicon, photo, captures de projets (static/img/projets/)
tools/export-chatbot-data.mjs   génère les données du chatbot depuis content.js
```

## Tester en local

```powershell
python -m http.server 8000
```

Puis http://127.0.0.1:8000 (et `?lang=en` pour forcer l'anglais).

## Modifier le contenu

Tout se passe dans `static/js/content.js`. Chaque élément a une version `fr` et une version `en`.

- **Ajouter une capture à un projet** : mettre l'image dans `static/img/projets/` et renseigner
  `image: "static/img/projets/novy.png"`. Sinon, une illustration est dessinée automatiquement.
- **Lien GitHub ou démo d'un projet** : champs `github` et `demo`.
- **Galerie / vidéos** : ajouter `screenshots: [...]` ou `videos: [...]` à un projet.
- **Loisirs** : la section « En dehors du code » s'affiche dès que `hobbies` n'est pas vide.
- **Photo** : déposer `static/img/photo.jpg` (format portrait). Sans photo, les initiales s'affichent.

Une fiche projet a sa propre URL, partageable : `.../#projet/novy`.

Après une modification du contenu, mettre à jour le chatbot :

```powershell
node tools/export-chatbot-data.mjs
```

## Formulaire de contact

Créer un formulaire gratuit sur https://formspree.io et copier son identifiant dans
`formspreeId` (config.js). Tant qu'il est vide, le bouton « Envoyer » ouvre la messagerie
du visiteur avec le message pré-rempli.

## Chatbot

Le site appelle l'API du dossier `portfolio_chatbot_backend` (FastAPI + Mistral).
Renseigner son URL dans `CHATBOT_API_URL`. Si la valeur est vide, le bouton de l'assistant
n'apparaît pas.

Aucune clé API dans ce dossier : tout le JavaScript d'un site GitHub Pages est public.

## Mise en ligne (GitHub Pages)

```powershell
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/TON-USERNAME.github.io.git
git push -u origin main
```

Puis Settings → Pages → Deploy from a branch → main → / (root).

## Nouveautés de la version 5

- **Hero sur un seul écran** : photo ronde à côté du titre, deux lignes « Je recherche / Disponible », bouton projets + icônes mail et LinkedIn. L'assistant est affiché comme une petite fenêtre de discussion à droite. Le CV n'est plus dans le hero (il reste dans Expériences et Contact).
- **À propos** : texte + encart Formation (INSA, Erasmus) et certifications. Les langues sont passées dans Compétences.
- **Projets** : la démarche (6 étapes) est une frise en tête de section (`ui.*.projects.method`). Les filtres se font par **type** : chaque projet a un champ `types` (`genai`, `search`, `ml`, `data`, `eng`, `tools`), libellés dans `ui.*.projects.filters`.
- **Choix techniques** : registre de décisions numérotées (liste à gauche, décision lue à droite, flèches et clavier). Sur mobile, la liste devient une rangée de numéros.
- **Compétences** : `skills.stack` (outils avec logo) + `skills.domains` (une ligne par domaine), langues en dernière ligne.
- **Expériences** : Groupe API regroupé en une seule entrée (champ `years`, plus de période détaillée).

Après modification de `content.js` : `node tools/export-chatbot-data.mjs`.

## Nouveautés de la version 3

### Ordre des sections

Accueil (avec l'encart « Une question sur mon parcours ? » relié au chatbot) → À propos (texte court + frise des expériences et de la formation) → Méthode → Projets → Compétences → Expériences professionnelles → Contact.

### Liens dans les textes

Dans `content.js`, `[libellé](#projet/id)` crée un lien vers la fiche d'un projet et `[libellé](https://...)` un lien externe. Ça marche dans les paragraphes « À propos », les missions des expériences et toutes les rubriques des fiches projets.

### Projets

- `group` : `"pro"` (Groupe API), `"school"` (INSA) ou `"perso"` ; sert aux filtres.
- `decisions` : les mini-fiches « Choix techniques » (`{ q: "question", a: "réponse" }`).
- `logos` : noms de fichiers de `static/img/logos/` (sans `.svg`).
- `link` : lien externe affiché en bouton dans la fiche (ex. la version en ligne pour les clients LINA).
- `image` puis `fallback` : si `image` n'existe pas, le site essaie `fallback`, puis affiche l'illustration dessinée (`cover`).

Images attendues (à ajouter quand tu les as) :

```text
static/img/projets/assistant-ia/demo.gif   GIF de démonstration (sinon interface.png s'affiche)
static/img/projets/devops/jeu.png                   capture du jeu (sinon l'illustration s'affiche)
```

### Logos des technologies

Les logos sont copiés en local dans `static/img/logos/` (paquets npm `devicon` et `simple-icons`) : pas de dépendance à un CDN. Pour en ajouter un, déposer un `.svg` dans ce dossier et utiliser son nom dans `logos` (projets) ou `logo` (compétences).

### Aperçu du CV

Le bouton « Aperçu du CV » ouvre le PDF dans une fenêtre, avec boutons de téléchargement. Quand le navigateur ne sait pas afficher un PDF (beaucoup de mobiles), c'est l'image `static/cv/cv-apercu.jpg` qui s'affiche. Si le CV change, régénérer l'image, par exemple :

```powershell
pdftoppm -jpeg -r 110 -f 1 -l 1 static/cv/CV_JeanneDubois_Ingenieure_IA.pdf static/cv/cv-apercu
```

(puis renommer le fichier produit en `cv-apercu.jpg`), ou faire une capture de la première page.

### Chatbot

Après toute modification de `content.js` :

```powershell
node tools/export-chatbot-data.mjs
```

Le script écrit dans `../backend/data/portfolio.json`. Au redémarrage, le backend recalcule les embeddings (une quinzaine de secondes la première fois, par lots de 16), puis les garde en cache.
