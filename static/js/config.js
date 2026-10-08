/*
  Réglages du site : tout ce qui change d'un déploiement à l'autre est ici.
  Laisser une valeur vide ("") masque l'élément correspondant sur le site.
*/
window.PORTFOLIO_CONFIG = {
    email: "jeanne.dubois.ia@gmail.com",
    phone: "",
    linkedin: "https://www.linkedin.com/in/jeanne-dubois10/",
    github: "",     // ex. "https://github.com/jeanne-dubois"

    // CV proposé au téléchargement
    cv: {
        fr: "static/cv/CV_JeanneDubois_Ingenieure_IA.pdf",
    },

    // Image de la première page du CV, affichée quand le navigateur ne sait pas afficher le PDF
    cvPreview: "static/cv/cv-apercu.jpg",

    // Photo de profil. Si le fichier n'existe pas, les initiales s'affichent à la place.
    photo: "static/img/photo.png",

    // API du chatbot (backend FastAPI).
    CHATBOT_API_URL: "https://portfolio-6gu8.onrender.com/chat"
};
