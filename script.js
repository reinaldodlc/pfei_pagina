document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('menu-navegacao');

    // Adiciona o evento de clique ao menu de navegação
    navMenu.addEventListener('click', function() {
        // Alterna a classe 'clicked' para mudar a cor
        navMenu.classList.toggle('clicked');
    });
});
