import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

import homeImg from '../images/home.png'
const Home = () => {
  return (
    <Container className='mt-5'>
      <Row style={{height: '100vh', textAlign: 'left'}}>
        <Col lg={6} sm={12}>
          <Card className='h-75 border-0'>
            <Card.Body className="d-flex flex-column justify-content-around align-items-left">
              <Card.Title className= 'text-primary'> Lorem ipsum, dolor sit amet consectetur </Card.Title>
              <Card.Text>
                <div className="d-lg-block d-none">
									<h2 style={{fontSize: '60px', marginBottom: '2rem'}}>
										Lorem ipsum dolor, sit 
									</h2>
									<p className='fs-5'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum dignissimos illum delectus praesentium maxime 
									</p>
								</div>
								<h2 className="d-lg-none">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								</h2>
              </Card.Text>
              <Button className='w-50' variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} sm={12}>
				<img className='mw-100 mh-100' id="home-img" src={homeImg} alt='home image' />
				</Col>
      </Row>
    </Container>
  );
};

export default Home;
