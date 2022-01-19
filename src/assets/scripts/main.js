
function ouvrirFermerContenuPiedDePage() {
    const liensDeroulantsPiedDePage = document.querySelectorAll('.pied_page_contenu_3');

    liensDeroulantsPiedDePage.forEach(function(lien) {
        lien.addEventListener('click', ouvrirFermerContenuLienDeroulant);

        function ouvrirFermerContenuLienDeroulant() {
            if (lien.className == 'pied_page_contenu_3 fermerContenu') {
                lien.classList.remove('fermerContenu');
                lien.classList.add('ouvrirContenu');
            } else {
                lien.classList.remove('ouvrirContenu');
                lien.classList.add('fermerContenu');
            }
        }
    });
}

function ouvrierFermerMenuMobile() {
    const iconeMenuMobile = document.querySelector('.mobile_menu_bouton_hamburger');
    const iconeFermerMenuMobile = document.querySelector('.mobile_menu_bouton_fermer');
    const liensNavigationMenuMobile = document.querySelector('.mobile_menu_gauche_navigation_liens');
    const baliseALiensNavigationMenuMobile = document.querySelectorAll('.mobile_menu_gauche_navigation_liens ul li a');

    iconeMenuMobile.addEventListener('click', ouvrirMenuMobile);
    iconeFermerMenuMobile.addEventListener('click', fermerMenuMobile);

    baliseALiensNavigationMenuMobile.forEach(function(baliseA) {
        baliseA.addEventListener('click', fermerMenuMobile);
    });

    function ouvrirMenuMobile() {
        iconeMenuMobile.style.display = 'none';
        iconeFermerMenuMobile.style.display = 'initial';
        liensNavigationMenuMobile.style.display = 'initial';
    }

    function fermerMenuMobile() {
        iconeMenuMobile.style.display = 'initial';
        iconeFermerMenuMobile.style.display = 'none';
        liensNavigationMenuMobile.style.display = 'none';
    }
}

function enleverBanniereTop() {
    const boutonFermerBanniereTop = document.querySelector('.mobile_banniere_bouton_close');
    const banniereTop = document.querySelector('.mobile_banniere');

    boutonFermerBanniereTop.addEventListener('click', fermerBanniereTop);

    function fermerBanniereTop() {
        banniereTop.style.display = 'none';
    }
}


ouvrirFermerContenuPiedDePage();
enleverBanniereTop();
ouvrierFermerMenuMobile();