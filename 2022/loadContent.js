function caricaContenuto(pagina) {
    // Usa fetch per ottenere il contenuto della pagina
    fetch(pagina)
        .then(response => response.text())
        .then(data => {
            // Sostituisci il contenuto del div con il contenuto della pagina caricata
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error('Errore nel caricamento:', error));
}

document.getElementById("explore").addEventListener("click", function() {
    caricaContenuto('explore.html');
});

document.getElementById("media").addEventListener("click", function() {
    caricaContenuto('media.html');
});

document.getElementById("ideas").addEventListener("click", function() {
    caricaContenuto('ideas.html');
});

document.getElementById("contacts").addEventListener("click", function() {
    caricaContenuto('contacts.html');
});
