import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Carousel from 'react-bootstrap/Carousel';


import Image1 from './image/Women-buying.jpg';
import Image2 from './image/Selection men.jpg';
import Image3 from './image/All in 1 mens.webp';
import Image4 from './image/men&women.jpg';
import Image5 from './image/Men casual-look.jpeg';
import Image6 from './image/collection.jpg';
import Image7 from './image/all in 1 mens.jpeg';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Task5() {
  return (
    <div>
    <Navbar bg='primary' expand="lg">
      <Container>
        <Navbar.Brand  href="#home">Online Shopping</Navbar.Brand>
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


                    <Carousel>
                    <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={Image6}  height={400}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={Image7} height={400}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image3}  height={400}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                        {/* <p> */}
                        {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
                        {/* </p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>


                    <Container>
                        <Row className='text-center p-3 '>
                            

                            <Col>
                        <img  className=' mt-5 h-50 w-100 rounded-circle'
                        src={Image3}
                        />
                        <h3 className='text-danger'>Collection</h3>
                        <p>But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         </p>
                       </Col>


                       <Col>
                        <img  className=' mt-5 h-50 w-100 rounded-circle'
                        src={Image6}
                        />
                        <h3 className='text-primary'>Look</h3>
                        <p>But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         </p>
                       </Col>

                       <Col>
                        <img  className=' mt-5 h-50 w-100 rounded-circle'
                        src={Image5}
                        />
                        <h3 className='text-info'>Style</h3>
                        <p>But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         </p>
                       </Col>


                       <Col>
                        <img  className=' mt-5 h-50 w-100 rounded-circle'
                        src={Image2}
                        />
                        <h3 className='text-dark'>Updates</h3>
                        <p>But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         </p>
                       </Col>
                       </Row>  
                        </Container>
                        
                        
                        <img
                        src={Image2} width={1349} height={450}
                        />


                        <Container>
                           <h1 className='mt-5 text-danger'>About Colthes Collection...</h1>
                            <Row className='mt-4'>
                              <Col>  
                            <Row>
                         <Col>
                        <h3>Fashion</h3>
                        <p>But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         </p>
                         </Col>

                         <Col>
                        <h3>Style</h3>
                        <p>But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         </p>
                         </Col>
                         </Row>



                         <Row>
                         <Col>
                        <h3>Look</h3>
                        <p>But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         </p>
                         </Col>

                         <Col>
                        <h3>Collection</h3>
                        <p>But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         </p>
                         </Col>
                         </Row>

                         <Row>
                         <Col>
                        <h3>New</h3>
                        <p>But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         
                         </p>
                         </Col>

                         <Col>
                        <h3>Updates</h3>
                        <p>But the enemy of the new emirs is neither the Jew nor the Christian,
                         it is the godless militant defending secularism.
                         </p>
                         </Col>
                         </Row>
                         </Col>


                        <Col>
                        <img
                        src={Image4} width={549} height={450}
                        />
                        </Col>
                         </Row>


                         <Row className='mt-5'>
                         <Col>
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Image7}  height={300} />
                        <Card.Body>
                            <Card.Title>E-TAIL SX</Card.Title>
                            <Card.Text>
                            Women's Combo Offers
                            </Card.Text>
                            <Button variant="danger">10%-30%</Button>
                        </Card.Body>
                        </Card>
                        </Col>

                        <Col>
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Image6} />
                        <Card.Body>
                            <Card.Title>E-TAIL SX</Card.Title>
                            <Card.Text>
                            Family Combo Offers
                            </Card.Text>
                            <Button variant="danger">20%-60%</Button>
                        </Card.Body>
                        </Card>
                        </Col>


                        <Col>
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Image3} height={300}/>
                        <Card.Body>
                            <Card.Title>E-TAIL SX</Card.Title>
                            <Card.Text>
                            Mens Combo Offers 
                            </Card.Text>
                            <Button variant="danger">5%-50% Offers</Button>
                        </Card.Body>
                        </Card>
                        </Col>

                        </Row>
                         </Container>

                         <div className='h-100 w-100 bg-dark p-5 mt-5 text-white text-center'>
                          <h3>E-TAIL SX</h3>
                          <p>Thank You, Welcome You All Again.</p>
                         </div>

                    
                    </div>
  );
}

export default Task5;