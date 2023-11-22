// Fonction pour définir la valeur du cookie
function setCookie(name, value) {
    document.cookie = name + '=' + value + '; path=/';
}

// Définir le cookie "admin" à 1 (ce qui donne à l'utilisateur le statut d'administrateur)
setCookie("admin", "1");

// Recharger la page pour voir le changement
location.reload();
