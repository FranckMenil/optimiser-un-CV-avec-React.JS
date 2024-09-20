import React from "react";
import { Card } from 'react-bootstrap';



const ServicesPage = () => {
  return (
    <section className="services-section container my-5">
      <h2 className="text-center mb-3">MON OFFRE DE SERVICES</h2>
      <p className="text-center lead mb-4">Voici les prestations sur lesquelles je peux intervenir.</p>
      <div className="titre-blue-line mb-5"></div>
      <div className="row">

        {/* Service 1 */}
        <article className="col-md-4 mb-4">
          <Card className="shadow">
            <Card.Body className="d-flex flex-column text-center">
              <div className="text-center icon mb-3"><i className="fas fa-desktop fa-2x"></i></div>
              <h5 className="card-title">UX DESIGN</h5>
              <p className="card-text">L'<strong>UX Design</strong> est une méthode de conception centrée sur
              l'utilisateur. Son but est d'offrir une expérience de
              navigation optimale à l'internaute.</p>
            </Card.Body>
          </Card>
        </article>

        {/* Service 2 */}
        <article className="col-md-4 mb-4">
          <Card className="shadow">
            <Card.Body className="d-flex flex-column text-center">
              <div className="text-center icon mb-3"><i className="fas fa-code fa-2x"></i></div>
              <h5 className="card-title">DÉVELOPPEMENT WEB</h5>
              <p className="card-text">
              Le <strong>développement de sites web</strong> repose sur l'utilisation des
              langages HTML, CSS, JavaScript et PHP.</p>
            </Card.Body>
          </Card>
        </article>

        {/* Service 3 */}
        <article className="col-md-4 mb-4">
          <Card className="shadow">
            <Card.Body className="d-flex flex-column text-center">
              <div className="text-center icon mb-3"><i className="fas fa-search fa-2x"></i></div>
              <h5 className="card-title">RÉFÉRENCEMENT</h5>
              <p className="card-text">
              Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste
              à mettre des techniques en œuvre pour améliorer sa position
              dans les résultats des moteurs de recherche.</p>
            </Card.Body>
          </Card>
        </article>
      </div>
    </section>
  );
};

export default ServicesPage;