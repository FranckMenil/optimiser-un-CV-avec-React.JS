import React from "react";
import '../HomePage.css';


const HomePage = () => {
  return (
    <main>
      {/* Section de la page d'accueil */}
      <section className="home">
        <div className="content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary">En savoir plus</a>
        </div>
      </section>

      {/* Section about */}
      <section id="about" className="about-section py-5 shadow">
        <div className="container">
          <div className="row">

            {/* Colonne gauche pour le texte */}
            <div className="col-md-6">
              <h2>À propos</h2>
              <div className="blue-line mb-4"></div>
              <p>Passionné par l'informatique et les nouvelles technologies, j'ai
              suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours
              de cette formation, j'ai pu acquérir des bases solides pour
              travailler dans le domaine du <strong>développement web</strong>.</p>

              <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une
              agence digitale pour consolider ma formation de <strong>développeur web
              full stack</strong>.</p>

              <p>J'accorde une attention particulière à la qualité du code que
              j'écris et je respecte les bonnes pratiques du web.</p>
            </div>

            {/* Colonne droite pour la photo + compétences */}
            <div className="col-md-6">
              <div className="mb-4">
                <img src="developer-8829709_640.jpg" alt="John Doe" className="img-fluid rounded"/>
              </div>
              <h4>Mes compétences</h4>
              <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">HTML5 90%</div>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">CSS3 80%</div>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">JavaScript 70%</div>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">PHP 60%</div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">React 50%</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;