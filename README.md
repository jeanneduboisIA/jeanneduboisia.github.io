# Portfolio · Jeanne Dubois

Portfolio d'ingénieure IA & Data : **https://jeanneduboisia.github.io**

Site statique en HTML, CSS et JavaScript, sans framework ni étape de build, hébergé sur GitHub Pages. Il est bilingue (français / anglais), avec un thème clair par défaut et un thème sombre. Il intègre un assistant (RAG) qui répond aux questions sur mon parcours à partir du contenu du site, en citant ses sources.

## Organisation

```text
index.html                      structure de la page
static/css/style.css            styles ; couleurs des deux thèmes en variables en haut du fichier
static/js/config.js             e-mail, LinkedIn, GitHub, CV, photo, URL du chatbot
static/js/content.js            tout le contenu FR/EN : à propos, projets, compétences, expériences...
static/js/main.js               langue, thème, affichage, filtres, fiches projets, aperçu du CV
static/js/chatbot.js            fenêtre de l'assistant
static/cv/                      CV en PDF + image d'aperçu (cv-apercu.jpg)
static/img/                     photo, favicon, logos des technologies, images des projets
tools/export-chatbot-data.mjs   génère la base de connaissances du chatbot à partir de content.js
```

## Tester en local

```powershell
python -m http.server 8000
```

Puis ouvrir http://127.0.0.1:8000 (ajouter `?lang=en` pour forcer l'anglais).

## Modifier le contenu

Tout se passe dans `static/js/content.js` : chaque texte existe en version `fr` et `en`.
Dans les textes, `[libellé](#projet/id)` crée un lien vers la fiche d'un projet, et `[libellé](https://...)` un lien externe.

### Projets

Champs principaux d'un projet :

| Champ | Rôle |
|---|---|
| `id` | identifiant, utilisé dans l'URL de la fiche (`#projet/id`) |
| `group` | `"pro"`, `"school"` ou `"perso"` : affiche « Groupe API », « INSA Rennes » ou « Projet perso » |
| `types` | catégories utilisées par les filtres : `genai`, `search`, `ml`, `data`, `eng`, `tools` |
| `featured` | `true` : grande carte en tête de section ; sinon, ligne dans « Autres projets » |
| `image`, `fallback` | image du projet, puis image de secours ; à défaut, un dessin (`cover`) s'affiche |
| `logos` | noms de fichiers de `static/img/logos/` (sans `.svg`) |
| `link`, `github`, `demo` | liens affichés en boutons dans la fiche |
| `screenshots`, `videos` | galerie d'images ou vidéos dans la fiche |
| `fr` / `en` | textes : titre, résumé, contexte, objectif, rôle, étapes, `decisions` (choix techniques), difficultés, résultat |

Les images de projets vont dans `static/img/projets/<id>/`. Dans une fiche, un clic sur une image l'affiche en grand.

### Autres sections

- **Compétences** : `skills`, une entrée par domaine, avec ses outils (`tools`, avec logo) et ses notions (`items`).
- **Expériences** : `experiences`.
- **Formation** : `education`.
- **Langues** : `languages`.
- **En dehors du code** : `hobbies`. Le bloc ne s'affiche que si la liste n'est pas vide.
- **Textes de l'interface** (menus, titres, boutons) : `ui.fr` et `ui.en`.
- **Logos** : pour ajouter un logo, déposer un `.svg` dans `static/img/logos/` et utiliser son nom.

## CV

Le bouton « Aperçu du CV » affiche `static/cv/CV_JeanneDubois_Ingenieure_IA.pdf`. Quand le navigateur ne sait pas afficher un PDF (la plupart des mobiles), c'est l'image `static/cv/cv-apercu.jpg` qui s'affiche à la place.

À chaque nouveau CV, remplacer **les deux fichiers** en gardant ces noms. Pour l'image, par exemple :

```powershell
pdftoppm -jpeg -r 110 -singlefile static/cv/CV_JeanneDubois_Ingenieure_IA.pdf static/cv/cv-apercu
```

Une capture de la première page fonctionne aussi.

## Chatbot

L'assistant repose sur une API séparée (FastAPI + Mistral), hébergée sur Render. Son adresse se règle dans `static/js/config.js` :

```js
CHATBOT_API_URL: "https://portfolio-6gu8.onrender.com/chat"
```

Si la valeur est vide, l'assistant est masqué. La clé Mistral reste côté serveur : aucune clé ne doit figurer dans ce dépôt, dont tout le contenu est public.

Après une modification de `content.js`, régénérer la base de connaissances du chatbot :

```powershell
node tools/export-chatbot-data.mjs
```

Le script écrit `../backend/data/portfolio.json`, à publier ensuite dans le dépôt du backend. Render redéploie alors l'API et recalcule les embeddings au démarrage.

L'hébergement gratuit de Render met le serveur en veille après 15 minutes sans visite. La première réponse peut alors prendre jusqu'à une minute ; le site réveille le serveur dès l'ouverture de la page pour réduire cette attente.

## Mise en ligne

Le site est publié par GitHub Pages depuis la branche `main`, à la racine du dépôt (**Settings → Pages → Deploy from a branch → main → / (root)**). Chaque modification poussée sur `main` est en ligne en une à deux minutes.

```powershell
git add .
git commit -m "Mise à jour du contenu"
git push
```
