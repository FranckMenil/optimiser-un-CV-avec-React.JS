import React from "react";
import { Accordion } from 'react-bootstrap';

const LegalPage = () => {
  return (
    <div className="container my-5">
      <meta name="robots" content="noindex" />
      <h1 className="text-center mb-4">MENTIONS LEGALES</h1>
      <div className="titre-blue-line mb-5"></div>

      {/* Accordéon */}
      <Accordion defaultActiveKey="0">
        {/* Éditeur du site */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Editeur du site</Accordion.Header>
          <Accordion.Body>
            <h5>John Doe</h5>
            <p><i className="fa fa-map-marker"></i><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.25393150821!2d4.796403976619976!3d45.77866571240149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1726591435234!5m2!1sfr!2sfr" target="_blank"> 40 Rue Laure Diebold, 69009 Lyon, France</a></p>
            <p><i className="fa fa-phone"></i><a href="tel:0606060606" target="_blank"> 0606060606</a></p>
            <p><i className="fa fa-envelope"></i><a href="mailto:john.doe@gmail.com" target="_blank"> john.doe@gmail.com</a></p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Hébergeur du site */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <h5>Hébergement Web XYZ</h5>
            <p>456 Rue de l'Hébergement, 69000 Lyon, France</p>
            <p><i className="fa fa-ravelry"></i><a href="https://www.hebergementxyz.com" target="_blank" rel="noopener noreferrer"> www.hebergementxyz.com</a></p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Crédits */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <h5>Crédits</h5>
            <p>Site développé par John Doe, étudiant CEF.</p>
            <p>Les images libre de droit sont issues du site<a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer"> Pixabay</a>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};




export default LegalPage;