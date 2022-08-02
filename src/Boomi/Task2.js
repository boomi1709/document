import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './image/Women-buying.jpg';
import Image2 from './image/Selection men.jpg';
import Image3 from './image/All in 1 mens.webp';
import Image4 from './image/All in 1 mens.webp';
import Image5 from './image/Men casual-look.jpeg';
import Image6 from './image/collection.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';


function Task2() {
    return (
        <div>

<Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">E-Tail Sx</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
      <Container>
      <Row className='pt-3'>
      <Col className='pt-4'>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1} width={330} height={330}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2} width={330} height={330}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3} width={330} height={330}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>

    <Col>
    <h2 className='text-center pt-2 mt-2'>E-TAIL SX</h2>
    <p className='pt-4 p-4 fs-5'>
    In the fashion world, “style” is usually shorthand for “personal style,”
     or the way an individual expresses themselves through aesthetic choices
      such as their clothing, accessories hairstyle, and the way they put an outfit together.       
    </p>
    
    <Button variant="warning" className='px-5 ms-4 fs-5'>CLICK</Button>{' '}
    </Col>
    </Row>

    
      <Alert  bg='info' className='text-center mt-5 mb-5'>
      <h4> We are welcoming you for E-TAIL SX Welcome.</h4>
      </Alert>

      <Row>
        <Col>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={Image5} height={250} />
      <Card.Body>
        <Card.Title>E-TAIL SX</Card.Title>
        <Card.Text>
          Get Offer For All Brand Dress. Foor Low Price E-TAIL SX Giving.
        </Card.Text>
        <Button variant="secondary">Search</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={Image4} height={250} />
      <Card.Body>
        <Card.Title>E-TAIL SX</Card.Title>
        <Card.Text>
        Get Offer For All Brand Dress. Foor Low Price E-TAIL SX Giving.
        </Card.Text>
        <Button variant="danger">Press</Button>
      </Card.Body>
    </Card>
    </Col>

      <Col>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={Image6} height={250} />
      <Card.Body>
        <Card.Title>E-TAIL SX</Card.Title>
        <Card.Text>
        Get Offer For All Brand Dress. Foor Low Price E-TAIL SX Giving.
        </Card.Text>
        <Button variant="success">Click</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>

    <div className='mt-5 text-center bg-dark text-white p-5'>
    <h4>Thank You,Welcome Again. </h4>
    </div>
      
    </div>
    );
}

export default Task2;