import React from "react";
import { Card, Button } from 'react-bootstrap';


const RealisationsPage = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-3">PORTFOLIO</h2>
      <p className="text-center lead mb-4">Voici quelques-unes de mes réalisations.</p>
      <div className="titre-blue-line mb-5"></div>
      <div className="row">

        {/* projet 1 */}
        <article className="col-md-4 mb-4">
          <Card className="shadow">
            <Card.Img variant="top" src="dark-mood-food-2983709_640.jpg"/>
            <Card.Body className="d-flex flex-column text-center">
              <h5 className="card-title">Fresh food</h5>
              <Card.Text className="text-center">Réalisation d'un site avec commande en ligne.</Card.Text>
              <div className="mt-auto"><Button variant="primary" href="">Voir</Button></div>
            </Card.Body>
            <Card.Footer className="text-center"><p>Site réalisé avec WordPress</p></Card.Footer>
          </Card>
        </article>

        {/* projet 2 */}
        <article className="col-md-4 mb-4">
          <Card className="shadow">
            <Card.Img variant="top" src="sushi-546311_640.jpg"/>
            <Card.Body className="d-flex flex-column text-center">
              <h5 className="card-title">Restaurant Akira</h5>
              <Card.Text>Réalisation d'un site vitrine.</Card.Text>
              <div className="mt-auto"><Button variant="primary" href="">Voir</Button></div>
            </Card.Body>
            <Card.Footer className="text-center"><p>Site réalisé avec WordPress</p></Card.Footer>
          </Card>
        </article>

        {/* projet 3 */}
          <article className="col-md-4 mb-4">
            <Card className="shadow">
              <Card.Img variant="top" src="stones-1058365_640.jpg"/>
              <Card.Body className="d-flex flex-column text-center">
                <h5 className="card-title">Espace bien-être</h5>
                <Card.Text>Réalisation d'un site vitrine pour un praticien de bien-être.</Card.Text>
                <div className="mt-auto"><Button variant="primary" href="">Voir</Button></div>
              </Card.Body>
              <Card.Footer className=" text-center"><p>Site réalisé avec WordPress</p></Card.Footer>
            </Card>
          </article>
          
      </div>
    </section>
  );
};

export default RealisationsPage;