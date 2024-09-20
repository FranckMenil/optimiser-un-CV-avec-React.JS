import React , {useState}from "react";
import { Form , Button  } from 'react-bootstrap';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Le nom est requis';
    if (!formData.email) newErrors.email = 'L\'e-mail est requis';
    if (!formData.phone) newErrors.phone = 'Le numéro de téléphone est requis';
    if (!formData.subject) newErrors.subject = 'Le sujet est requis';
    if (!formData.message) newErrors.message = 'Le message est requis';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulaire soumis avec succès :', formData);
    }
  };


  return (
    <section className="contact">
      <div className="contact-section p-5">
        <h2 className="text-center mb-4">ME CONTACTER</h2>
        <p className="text-center lead mb-4">Pour me contacter en vue d'un entretien ou d'une future collaboration, 
        merci de remplir le formulaire de contact.</p>
        <div className="titre-blue-line mb-5"></div>
        <div className="row">

          {/* Formulaire */}
          <div className="col-md-6">
            <h3 className="form-title">Formulaire de contact</h3>
            <div className="blue-line mb-4"></div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} isInvalid={!!errors.name}/>
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" name="email" placeholder="Votre adresse email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email}/>
                <Form.Control.Feedback type="invalid"> {errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Control type="tel" name="phone" placeholder="Votre numéro de téléphone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone}/>
                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Control type="text" name="subject" placeholder="Sujet" value={formData.subject} onChange={handleChange} isInvalid={!!errors.subject}/>
                <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control as="textarea" name="message" rows={4} placeholder="Votre message" value={formData.message} onChange={handleChange} isInvalid={!!errors.message}/>
                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
              </Form.Group>
              <div className="text-center py-3"><Button type="submit" variant="primary">Envoyer</Button></div>
            </Form>
          </div>
          
          {/* Coordonnées */}
          <div className="col-md-6">
            <h3 className="adress-title">Mes coordonnées</h3>
            <div className="blue-line mb-4"></div>
            <p><i className="fa fa-map-marker fa-1x"></i> 40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p><i className="fa fa-phone"></i> 06 20 30 40 50</p>
            <iframe 
              title="Google Map" 
              width="100%" 
              height="335"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.25393150821!2d4.796403976619976!3d45.77866571240149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1726591435234!5m2!1sfr!2sfr">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;