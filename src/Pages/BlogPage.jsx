import React from "react";
import { Card, Button } from 'react-bootstrap';

const BlogPage = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-3">BLOG</h2>
      <p className="text-center lead mb-4">Retrouver ici quelques articles sur le développement Web.</p>
      <div className="titre-blue-line mb-5"></div>
      <div className="row">

        {/* article 1 */}
        <article className="col-md-4 mb-4">
          <Card className="shadow">
            <Card.Img variant="top" src="dark-mood-food-2983709_640.jpg"/>
            <Card.Body className="d-flex flex-column text-center">
              <h5 className="card-title">Coder son site en HTML/CSS</h5>
              <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="mt-auto"><Button variant="primary" href="">Lire la suite</Button></div>
            </Card.Body>
            <Card.Footer className="text-center"><p>Publié le 22 âout 2022</p></Card.Footer>
          </Card>
        </article>

        {/* article 2 */}
        <article className="col-md-4 mb-4">
          <Card className="shadow">
            <Card.Img variant="top" src="sushi-546311_640.jpg"/>
            <Card.Body className="d-flex flex-column text-center">
              <h5 className="card-title">Vendre ses produits sur le web</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="mt-auto"><Button variant="primary" href="">Lire la suite</Button></div>
            </Card.Body>
            <Card.Footer className="text-center"><p>Publié le 20 âout 2022</p></Card.Footer>
          </Card>
        </article>


        {/* article 3 */}
        <article className="col-md-4 mb-4">
          <Card className="shadow">
            <Card.Img variant="top" src="stones-1058365_640.jpg"/>
            <Card.Body className="d-flex flex-column text-center">
              <h5 className="card-title">Se positionner sur Google</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="mt-auto"><Button variant="primary" href="">Lire la suite</Button></div>
            </Card.Body>
            <Card.Footer className=" text-center"><p>Publié le 1 âout 2022</p></Card.Footer>
          </Card>
        </article>

        {/* article 4 */}
        <article className="col-md-4 mb-4">
          <Card className="shadow">
            <Card.Img variant="top" src="dark-mood-food-2983709_640.jpg"/>
            <Card.Body className="d-flex flex-column text-center">
              <h5 className="card-title">Coder en responsive design</h5>
              <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="mt-auto"><Button variant="primary" href="">Lire la suite</Button></div>
            </Card.Body>
            <Card.Footer className="text-center"><p>Publié le 31 Juillet 2022</p></Card.Footer>
          </Card>
        </article>

        {/* article 5 */}
        <article className="col-md-4 mb-4">
          <Card className="shadow">
            <Card.Img variant="top" src="sushi-546311_640.jpg"/>
            <Card.Body className="d-flex flex-column text-center">
              <h5 className="card-title">Techniques de référencement</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="mt-auto"><Button variant="primary" href="">Lire la suite</Button></div>
            </Card.Body>
            <Card.Footer className="text-center"><p>Publié le 30 Juillet 2022</p></Card.Footer>
          </Card>
        </article>

        {/* article 6 */}
        <article className="col-md-4 mb-4">
          <Card className="shadow">
            <Card.Img variant="top" src="stones-1058365_640.jpg"/>
            <Card.Body className="d-flex flex-column text-center">
              <h5 className="card-title">Apprendre à coder</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="mt-auto"><Button variant="primary" href="">Lire la suite</Button></div>
            </Card.Body>
            <Card.Footer className=" text-center"><p>Publié le 12 Juillet 2022</p></Card.Footer>
          </Card>
        </article>
      </div>
    </section>
  );
};

export default BlogPage;