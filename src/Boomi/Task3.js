import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image4 from './image/50cbb751b412ea270dca86f949a11d6e.jpg';
import Image5 from './image/2489629.webp';
import Image6 from './image/istockphoto-1339264709-612x612.jpg';

const data = [
    {
      name: 'T-Shirt',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Shirt',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Pants',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Cotton Pants',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Jeans',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Lycri Shirt',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Lycri Pants',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
function Task3() {
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
    <Row>
        <Col>
        <LineChart
          width={550}
          height={350}
          data={data}
          margin={{
            top: 45,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </Col>
         
           <Col>
        <h2 className='text-center pt-2 mt-4'>E-TAIL SX</h2>
    <p className='pt-4 p-4  fs-5'>
    In the fashion world, “style” is usually shorthand for “personal style,”
     or the way an individual expresses themselves through aesthetic choices
      such as their clothing, accessories hairstyle, and the way they put an outfit together.       
    </p>
    </Col>
    </Row>

    <Row className='mt-5'>
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

        </div>
    );
}

export default Task3;