import React , { useEffect } from 'react';



const Footer = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById('backToTop');

    // Affiche ou cache le bouton en fonction du défilement
    const handleScroll = () => {
      if (window.scrollY > 0) { 
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour le retour en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Défilement en douceur
    });
  };

  return (
    <footer className="footer-custom py-4">
      <div className="container">
        <div className="row">

          {/* Colonne 1: Informations du développeur */}
          <div className="col-md-3">
            <h5>John Doe</h5>
            <p>40 Rue Laure Diebold,<br /> 69009 Lyon, France</p>
            <p>Tél : +33 6 20 30 40 50</p>
            <a href="https://github.com/github-john-doe " target="_blank" rel="noopener noreferrer" className="text-dark me-4">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://github.com/github-john-doe " target="_blank" rel="noopener noreferrer" className="text-dark me-4">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://github.com/github-john-doe " target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>

          {/* Colonne 2: Liens utiles */}
          <div className="col-md-3">
            <h5>Liens utiles</h5>
            <ul>
              <li><a href="/" className="link">Accueil</a></li>
              <li><a href="/#about" className="link">A propos</a></li>
              <li><a href="/services" className="link">Services</a></li>
              <li><a href="/contact" className="link">Me Contacter</a></li>
              <li><a href="/legal" className="link">Mentions Légales</a></li>
            </ul>
          </div>

          {/* Colonne 3: Dernières réalisations */}
          <div className="col-md-3">
            <h5>Mes dernières réalisations</h5>
            <ul>
              <li><a href="/realisations" className="link">Fresh food</a></li>
              <li><a href="/realisations" className="link">Restaurant Akira</a></li>
              <li><a href="/realisations" className="link">Espace bien-être</a></li>
            </ul>
          </div>

          {/* Colonne 4: Derniers articles */}
          <div className="col-md-3">
            <h5>Mes derniers articles</h5>
            <ul>
              <li><a href="/blog" className="link">Coder son site en HTML/CSS</a></li>
              <li><a href="/blog" className="link">Vendre ses produits sur le web</a></li>
              <li><a href="/blog" className="link">Se positionner sur Google</a></li>
            </ul>
          </div>
        </div>

        {/* Ligne de copyright */}
        <div className="text-center mt-3">
          <p>&copy; 2024 John Doe. Tous droits réservés.</p>
        </div>

        {/* Lien pour remonter en haut de page */}
        <button id="backToTop" title="Retour en haut" onClick={scrollToTop} className="btn btn-lg position-fixed bottom-0 end-0 m-3">
          <i className="fa fa-long-arrow-up"></i>
        </button>
      </div> 
    </footer>
  );
};

export default Footer;
